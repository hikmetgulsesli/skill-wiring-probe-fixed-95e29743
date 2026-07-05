import { useEffect, useMemo } from 'react';
import {
  InsightsSkillWiringProbeFixed,
  RecordEditorSkillWiringProbeFixed,
  RecordOperationsSkillWiringProbeFixed,
} from './screens';
import { StoreProvider, useSkillWiringProbeFixedStore } from './features/skill-wiring-probe-fixed/skill-wiring-probe-fixed.store';
import type { SurfaceId } from './features/skill-wiring-probe-fixed/skill-wiring-probe-fixed.types';
import { initBridge, setBridgeState } from './test/bridge';

function AppShell() {
  const { state, actions } = useSkillWiringProbeFixedStore();

  useEffect(() => {
    initBridge();
  }, []);

  useEffect(() => {
    setBridgeState(state);
  }, [state]);

  const insightsActions = useMemo(
    () => ({
      'toggle-on-1': () => {},
      'notifications-2': () => {},
      'settings-3': () => {},
      'new-probe-4': () => actions.setActiveSurface('SURF_RECORD_EDITOR'),
      'filter-insights-5': () => {},
      'export-summary-6': () => {},
      'more-vert-7': () => {},
      'enable-trace-logic-8': () => {},
      'operations-1': () => actions.setActiveSurface('SURF_RECORD_OPERATIONS'),
      'editor-2': () => actions.setActiveSurface('SURF_RECORD_EDITOR'),
      'insights-3': () => actions.setActiveSurface('SURF_INSIGHTS'),
      'settings-4': () => {},
      'support-5': () => {},
      'view-in-operations-6': () => actions.setActiveSurface('SURF_RECORD_OPERATIONS'),
    }),
    [actions]
  );

  const editorActions = useMemo(
    () => ({
      'toggle-on-1': () => {},
      'notifications-2': () => {},
      'settings-3': () => {},
      'new-probe-4': () => actions.setActiveSurface('SURF_RECORD_EDITOR'),
      'discard-5': () => actions.setActiveSurface('SURF_RECORD_OPERATIONS'),
      'save-now-6': () => {},
      'format-json-7': () => {},
      'cancel-8': () => actions.setActiveSurface('SURF_RECORD_OPERATIONS'),
      'save-record-9': () => {},
      'operations-1': () => actions.setActiveSurface('SURF_RECORD_OPERATIONS'),
      'editor-2': () => actions.setActiveSurface('SURF_RECORD_EDITOR'),
      'insights-3': () => actions.setActiveSurface('SURF_INSIGHTS'),
      'settings-4': () => {},
      'support-5': () => {},
    }),
    [actions]
  );

  const operationsActions = useMemo(
    () => ({
      'new-probe-1': () => actions.setActiveSurface('SURF_RECORD_EDITOR'),
      'toggle-on-off-2': () => {},
      'notifications-3': () => {},
      'settings-4': () => {},
      'refresh-5': () => actions.refreshRecords(),
      'close-preview-6': () => actions.selectRecord(null),
      'edit-7': () => actions.setActiveSurface('SURF_RECORD_EDITOR'),
      'suspend-8': () => {},
      'force-sync-9': () => {},
      'operations-1': () => actions.setActiveSurface('SURF_RECORD_OPERATIONS'),
      'editor-2': () => actions.setActiveSurface('SURF_RECORD_EDITOR'),
      'insights-3': () => actions.setActiveSurface('SURF_INSIGHTS'),
      'settings-4-2': () => {},
      'support-5': () => {},
    }),
    [actions]
  );

  const screenMap: Record<SurfaceId, React.ReactNode> = {
    SURF_INSIGHTS: <InsightsSkillWiringProbeFixed actions={insightsActions} />,
    SURF_RECORD_EDITOR: <RecordEditorSkillWiringProbeFixed actions={editorActions} />,
    SURF_RECORD_OPERATIONS: <RecordOperationsSkillWiringProbeFixed actions={operationsActions} />,
  };

  return (
    <div data-setfarm-root="app" data-testid="setfarm-app-root" className="relative min-h-screen w-full overflow-hidden bg-surface text-on-surface">
      {screenMap[state.activeSurface]}
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <AppShell />
    </StoreProvider>
  );
}
