import type { SkillWiringProbeFixedState } from '../features/skill-wiring-probe-fixed/skill-wiring-probe-fixed.types';

export interface AppBridge {
  getState(): SkillWiringProbeFixedState | null;
  getActiveScreen(): string | null;
  getSelectedRecord(): unknown | null;
  getCounts(): { recordCount: number; activeCount: number; suspendedCount: number } | null;
  getStorageStatus(): string | null;
  getLastError(): string | null;
  getActivePanel(): string | null;
}

declare global {
  interface Window {
    app: AppBridge;
  }
}

let _bridgeState: SkillWiringProbeFixedState | null = null;

export function setBridgeState(state: SkillWiringProbeFixedState | null) {
  _bridgeState = state;
}

export const bridge: AppBridge = {
  getState() {
    return _bridgeState;
  },
  getActiveScreen() {
    return _bridgeState?.activeSurface ?? null;
  },
  getSelectedRecord() {
    return _bridgeState?.selectedRecord ?? null;
  },
  getCounts() {
    if (!_bridgeState) return null;
    return {
      recordCount: _bridgeState.recordCount,
      activeCount: _bridgeState.activeCount,
      suspendedCount: _bridgeState.suspendedCount,
    };
  },
  getStorageStatus() {
    return _bridgeState?.storageStatus ?? null;
  },
  getLastError() {
    return _bridgeState?.lastError ?? null;
  },
  getActivePanel() {
    return _bridgeState?.activePanel ?? null;
  },
};

export function initBridge() {
  window.app = bridge;
}
