import type {
  SkillWiringProbeFixedRecord,
  SkillWiringProbeFixedPreferences,
  SurfaceId,
  PanelId,
} from './skill-wiring-probe-fixed.types';

const STORAGE_KEY = 'skill-wiring-probe-fixed:preferences';

export function loadPreferences(): SkillWiringProbeFixedPreferences | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed === 'object' &&
      'activeSurface' in parsed &&
      'activePanel' in parsed
    ) {
      return parsed as SkillWiringProbeFixedPreferences;
    }
    return null;
  } catch {
    return null;
  }
}

export function savePreferences(preferences: SkillWiringProbeFixedPreferences): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch {
    // Storage may be full or unavailable; fail silently.
  }
}

export function loadRecords(): SkillWiringProbeFixedRecord[] {
  try {
    const raw = localStorage.getItem('skill-wiring-probe-fixed:records');
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed as SkillWiringProbeFixedRecord[];
    }
    return [];
  } catch {
    return [];
  }
}

export function saveRecords(records: SkillWiringProbeFixedRecord[]): void {
  try {
    localStorage.setItem('skill-wiring-probe-fixed:records', JSON.stringify(records));
  } catch {
    // Storage may be full or unavailable; fail silently.
  }
}

export function clearStorage(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('skill-wiring-probe-fixed:records');
  } catch {
    // Ignore
  }
}

export function getDefaultSurface(): SurfaceId {
  const prefs = loadPreferences();
  return prefs?.activeSurface ?? 'SURF_RECORD_OPERATIONS';
}

export function getDefaultPanel(): PanelId {
  const prefs = loadPreferences();
  return prefs?.activePanel ?? 'PANEL_OVERVIEW';
}
