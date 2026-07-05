import { createContext, useContext, useState, useCallback, useEffect, useMemo } from 'react';
import type {
  SkillWiringProbeFixedState,
  SkillWiringProbeFixedRecord,
  SurfaceId,
  PanelId,
} from './skill-wiring-probe-fixed.types';
import {
  loadPreferences,
  savePreferences,
  loadRecords,
  saveRecords,
  getDefaultSurface,
  getDefaultPanel,
} from './skill-wiring-probe-fixed.repo';

interface StoreContextValue {
  state: SkillWiringProbeFixedState;
  actions: {
    setActiveSurface: (surface: SurfaceId) => void;
    setActivePanel: (panel: PanelId) => void;
    selectRecord: (record: SkillWiringProbeFixedRecord | null) => void;
    createRecord: (record: Omit<SkillWiringProbeFixedRecord, 'id' | 'createdAt' | 'updatedAt'>) => void;
    updateRecord: (record: SkillWiringProbeFixedRecord) => void;
    deleteRecord: (id: string) => void;
    refreshRecords: () => void;
    clearError: () => void;
    resetStorage: () => void;
  };
}

const StoreContext = createContext<StoreContextValue | null>(null);

export function useSkillWiringProbeFixedStore(): StoreContextValue {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useSkillWiringProbeFixedStore must be used within StoreProvider');
  return ctx;
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [activeSurface, setActiveSurfaceState] = useState<SurfaceId>(getDefaultSurface());
  const [activePanel, setActivePanelState] = useState<PanelId>(getDefaultPanel());
  const [selectedRecordId, setSelectedRecordId] = useState<string | null>(null);
  const [selectedRecord, setSelectedRecord] = useState<SkillWiringProbeFixedRecord | null>(null);
  const [storageStatus, setStorageStatus] = useState<SkillWiringProbeFixedState['storageStatus']>('loading');
  const [lastError, setLastError] = useState<string | null>(null);
  const [records, setRecords] = useState<SkillWiringProbeFixedRecord[]>([]);

  useEffect(() => {
    try {
      const loaded = loadRecords();
      setRecords(loaded);
      setStorageStatus('ready');
    } catch (e) {
      setStorageStatus('error');
      setLastError(e instanceof Error ? e.message : 'Failed to load records');
    }
  }, []);

  const recordCount = records.length;
  const activeCount = records.filter((r) => r.status === 'active').length;
  const suspendedCount = records.filter((r) => r.status === 'suspended').length;

  const setActiveSurface = useCallback((surface: SurfaceId) => {
    setActiveSurfaceState(surface);
    try {
      savePreferences({ activeSurface: surface, activePanel: getDefaultPanel() });
    } catch {
      // ignore
    }
  }, []);

  const setActivePanel = useCallback((panel: PanelId) => {
    setActivePanelState(panel);
    try {
      savePreferences({ activeSurface: getDefaultSurface(), activePanel: panel });
    } catch {
      // ignore
    }
  }, []);

  const selectRecord = useCallback((record: SkillWiringProbeFixedRecord | null) => {
    setSelectedRecord(record);
    setSelectedRecordId(record?.id ?? null);
  }, []);

  const createRecord = useCallback(
    (record: Omit<SkillWiringProbeFixedRecord, 'id' | 'createdAt' | 'updatedAt'>) => {
      const now = new Date().toISOString();
      const newRecord: SkillWiringProbeFixedRecord = {
        ...record,
        id: crypto.randomUUID(),
        createdAt: now,
        updatedAt: now,
      };
      setRecords((prev) => {
        const next = [...prev, newRecord];
        saveRecords(next);
        return next;
      });
    },
    []
  );

  const updateRecord = useCallback((record: SkillWiringProbeFixedRecord) => {
    setRecords((prev) => {
      const next = prev.map((r) => (r.id === record.id ? { ...record, updatedAt: new Date().toISOString() } : r));
      saveRecords(next);
      return next;
    });
    setSelectedRecord((prev) => (prev?.id === record.id ? { ...record, updatedAt: new Date().toISOString() } : prev));
  }, []);

  const deleteRecord = useCallback((id: string) => {
    setRecords((prev) => {
      const next = prev.filter((r) => r.id !== id);
      saveRecords(next);
      return next;
    });
    setSelectedRecord((prev) => (prev?.id === id ? null : prev));
    setSelectedRecordId((prev) => (prev === id ? null : prev));
  }, []);

  const refreshRecords = useCallback(() => {
    try {
      const loaded = loadRecords();
      setRecords(loaded);
      setStorageStatus('ready');
      setLastError(null);
    } catch (e) {
      setStorageStatus('error');
      setLastError(e instanceof Error ? e.message : 'Failed to refresh records');
    }
  }, []);

  const clearError = useCallback(() => {
    setLastError(null);
  }, []);

  const resetStorage = useCallback(() => {
    try {
      localStorage.removeItem('skill-wiring-probe-fixed:preferences');
      localStorage.removeItem('skill-wiring-probe-fixed:records');
      setRecords([]);
      setSelectedRecord(null);
      setSelectedRecordId(null);
      setStorageStatus('ready');
      setLastError(null);
      setActiveSurfaceState('SURF_RECORD_OPERATIONS');
      setActivePanelState('PANEL_OVERVIEW');
    } catch (e) {
      setStorageStatus('error');
      setLastError(e instanceof Error ? e.message : 'Failed to reset storage');
    }
  }, []);

  const state: SkillWiringProbeFixedState = useMemo(
    () => ({
      activeSurface,
      selectedRecordId,
      selectedRecord,
      storageStatus,
      lastError,
      activePanel,
      recordCount,
      activeCount,
      suspendedCount,
    }),
    [activeSurface, selectedRecordId, selectedRecord, storageStatus, lastError, activePanel, recordCount, activeCount, suspendedCount]
  );

  const actions = useMemo(
    () => ({
      setActiveSurface,
      setActivePanel,
      selectRecord,
      createRecord,
      updateRecord,
      deleteRecord,
      refreshRecords,
      clearError,
      resetStorage,
    }),
    [
      setActiveSurface,
      setActivePanel,
      selectRecord,
      createRecord,
      updateRecord,
      deleteRecord,
      refreshRecords,
      clearError,
      resetStorage,
    ]
  );

  return <StoreContext.Provider value={{ state, actions }}>{children}</StoreContext.Provider>;
}
