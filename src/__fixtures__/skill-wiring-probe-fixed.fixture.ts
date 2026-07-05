import type { SkillWiringProbeFixedRecord } from '../features/skill-wiring-probe-fixed/skill-wiring-probe-fixed.types';

export const fixtureRecords: SkillWiringProbeFixedRecord[] = [
  {
    id: 'rec-001',
    type: 'probe',
    status: 'active',
    payload: { name: 'Wiring Probe Alpha', version: '1.0.0' },
    createdAt: '2024-01-15T08:00:00Z',
    updatedAt: '2024-06-20T14:30:00Z',
  },
  {
    id: 'rec-002',
    type: 'probe',
    status: 'suspended',
    payload: { name: 'Wiring Probe Beta', version: '1.1.0' },
    createdAt: '2024-02-10T10:00:00Z',
    updatedAt: '2024-05-15T09:00:00Z',
  },
  {
    id: 'rec-003',
    type: 'trace',
    status: 'pending',
    payload: { name: 'Trace Logic Gamma', enabled: false },
    createdAt: '2024-03-05T12:00:00Z',
    updatedAt: '2024-03-05T12:00:00Z',
  },
];
