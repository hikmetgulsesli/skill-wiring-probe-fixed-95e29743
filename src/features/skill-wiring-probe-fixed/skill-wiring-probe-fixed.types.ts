export type SurfaceId =
  | 'SURF_INSIGHTS'
  | 'SURF_RECORD_EDITOR'
  | 'SURF_RECORD_OPERATIONS';

export type PanelId =
  | 'PANEL_OVERVIEW'
  | 'PANEL_DETAILS'
  | 'PANEL_SETTINGS';

export interface SkillWiringProbeFixedRecord {
  id: string;
  type: string;
  status: 'active' | 'suspended' | 'pending';
  payload: unknown;
  createdAt: string;
  updatedAt: string;
}

export interface SkillWiringProbeFixedState {
  activeSurface: SurfaceId;
  selectedRecordId: string | null;
  selectedRecord: SkillWiringProbeFixedRecord | null;
  storageStatus: 'idle' | 'loading' | 'ready' | 'error';
  lastError: string | null;
  activePanel: PanelId;
  recordCount: number;
  activeCount: number;
  suspendedCount: number;
}

export interface SkillWiringProbeFixedPreferences {
  activeSurface: SurfaceId;
  activePanel: PanelId;
}
