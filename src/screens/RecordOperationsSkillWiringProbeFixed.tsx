// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Operations - Skill Wiring Probe Fixed
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowUp, BadgeAlert, BarChart3, Bell, CircleHelp, Factory, Minus, Pencil, Plus, RefreshCw, Search, Settings, ToggleRight, TriangleAlert, X } from "lucide-react";


export type RecordOperationsSkillWiringProbeFixedActionId = "new-probe-1" | "toggle-on-off-2" | "notifications-3" | "settings-4" | "refresh-5" | "close-preview-6" | "edit-7" | "suspend-8" | "force-sync-9" | "operations-1" | "editor-2" | "insights-3" | "settings-4-2" | "support-5";

export interface RecordOperationsSkillWiringProbeFixedProps {
  actions?: Partial<Record<RecordOperationsSkillWiringProbeFixedActionId, () => void>>;

}

export function RecordOperationsSkillWiringProbeFixed({ actions }: RecordOperationsSkillWiringProbeFixedProps) {
  return (
    <>
      {/* ========================================================
              SIDE NAVIGATION BAR (Shared Component)
              ======================================================== */}
      <aside aria-label="Sidebar Navigation" className="fixed left-0 top-0 h-full w-[240px] border-r border-outline-variant/20 flex flex-col py-xl bg-inverse-surface text-primary-fixed-dim z-40 hidden md:flex">
      {/* Header */}
      <div className="px-lg mb-xl flex items-center gap-md">
      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border border-primary/30">
      <img alt="System Probe" className="w-full h-full object-cover opacity-80 mix-blend-screen" data-alt="A stylized, minimalist avatar icon for a system probe in a modern technical dashboard, primarily using dark blues and subtle glowing teal accents. High-tech, clean corporate style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK7lYL3jgHviSOSAvd4pchUseOwoQo3xZ40Fv2xh90_ta_xmY9yfC760KthNukzU2jXZDGA-Xa81rP_r5PhRB4RWF4g4ffJ71iq6vfE3_xlq-hC903KOdV9pceMB-n2mwqQJjusSgiyNdoh8nrdoQUs6AQDW-PbI9NEDDqEp7zxfiLSet6ufM3D3gle5cLKa_KsnX8lOicW7P9Nr-uJJHNKPWe3Lyot3bTIRigdp4qdQu1sBgrB8HQ7V9Bh0CNINGlj7l5CWFrdl48" />
      </div>
      <div>
      <h1 className="font-display-lg text-display-lg text-primary-fixed-dim m-0">Wiring Probe</h1>
      <p className="font-label-sm text-label-sm text-surface-variant/70 mt-xs">Fixed Node v4.2</p>
      </div>
      </div>
      {/* CTA */}
      <div className="px-lg mb-xl">
      <button className="w-full h-[32px] bg-primary text-on-primary font-label-md text-label-md rounded flex items-center justify-center gap-sm hover:bg-primary/90 transition-colors" type="button" data-action-id="new-probe-1" onClick={actions?.["new-probe-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                      New Probe
                  </button>
      </div>
      {/* Main Navigation */}
      <nav className="flex-1 px-sm">
      <ul className="space-y-sm">
      {/* Operations (Active) */}
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded-r bg-primary/10 text-primary-fixed-dim border-l-[3px] border-primary-fixed-dim font-label-md text-label-md hover:bg-surface-variant/10 transition-colors duration-200 ease-in-out" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <Factory className="text-[18px]" aria-hidden={true} focusable="false" />
                              Operations
                          </a>
      </li>
      {/* Editor */}
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded-r text-surface-variant/70 hover:text-surface-variant font-label-md text-label-md hover:bg-surface-variant/10 transition-colors duration-200 ease-in-out border-l-[3px] border-transparent" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
                              Editor
                          </a>
      </li>
      {/* Insights */}
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded-r text-surface-variant/70 hover:text-surface-variant font-label-md text-label-md hover:bg-surface-variant/10 transition-colors duration-200 ease-in-out border-l-[3px] border-transparent" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3 className="text-[18px]" aria-hidden={true} focusable="false" />
                              Insights
                          </a>
      </li>
      </ul>
      </nav>
      {/* Footer Navigation */}
      <div className="px-sm mt-auto">
      <ul className="space-y-sm">
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded-r text-surface-variant/70 hover:text-surface-variant font-label-md text-label-md hover:bg-surface-variant/10 transition-colors duration-200 ease-in-out border-l-[3px] border-transparent" href="#" data-action-id="settings-4-2" onClick={(event) => { event.preventDefault(); actions?.["settings-4-2"]?.(); }}>
      <Settings className="text-[18px]" aria-hidden={true} focusable="false" />
                              Settings
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded-r text-surface-variant/70 hover:text-surface-variant font-label-md text-label-md hover:bg-surface-variant/10 transition-colors duration-200 ease-in-out border-l-[3px] border-transparent" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>
      <CircleHelp className="text-[18px]" aria-hidden={true} focusable="false" />
                              Support
                          </a>
      </li>
      </ul>
      </div>
      </aside>
      {/* ========================================================
              MAIN CONTENT AREA
              ======================================================== */}
      <main className="flex-1 flex flex-col md:ml-[240px] h-full overflow-hidden bg-background">
      {/* ========================================================
                  TOP NAVIGATION BAR (Shared Component)
                  ======================================================== */}
      <header aria-label="Top Application Bar" className="w-full h-[48px] border-b border-outline-variant flex justify-between items-center px-lg bg-surface z-30 shrink-0">
      {/* Left: Brand/Context */}
      <div className="flex items-center gap-md">
      <span className="font-headline-sm text-headline-sm text-primary font-bold">Skill Wiring Probe Fixed</span>
      <span className="text-outline-variant">/</span>
      <span className="font-headline-sm text-headline-sm text-on-surface-variant">Record Operations</span>
      </div>
      {/* Right: Search & Actions */}
      <div className="flex items-center gap-lg">
      {/* Search */}
      <div className="relative w-[280px] hidden lg:block">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-[18px] text-outline" aria-hidden={true} focusable="false" />
      <input className="w-full h-[32px] pl-[32px] pr-sm bg-surface-container-lowest border border-outline-variant rounded font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant/50 transition-colors" placeholder="Search records by ID, Type, or Status..." type="text" />
      </div>
      {/* Actions */}
      <div className="flex items-center gap-sm">
      <button className="w-[32px] h-[32px] flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-low transition-colors" title="Toggle On/Off" type="button" data-action-id="toggle-on-off-2" onClick={actions?.["toggle-on-off-2"]}>
      <ToggleRight className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-[32px] h-[32px] flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-low transition-colors relative" title="Notifications" type="button" data-action-id="notifications-3" onClick={actions?.["notifications-3"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
      </button>
      <button className="w-[32px] h-[32px] flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-low transition-colors" title="Settings" type="button" data-action-id="settings-4" onClick={actions?.["settings-4"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <div className="w-[32px] h-[32px] rounded-full overflow-hidden border border-outline-variant ml-sm cursor-pointer hover:border-primary transition-colors">
      <img alt="User Avatar" className="w-full h-full object-cover" data-alt="A small, professional user avatar portrait. Minimalist style, neutral lighting, simple background, suited for a corporate tech dashboard. Serious but approachable expression." src="https://lh3.googleusercontent.com/aida-public/AB6AXuABN0kGf3-oa00jw52t7jXkvccO_aJ6aJDHj1QDh4ajNdrqP85Su8WchOmIeVAVHKtuLCfXEVc7gxMytDOd8gRd-oTlfTnuImQBV3_7iYBCJu8xyfBbcZnd5N7Dxk-A-Xla_aX2TJA6e0hwGcrq6OLnCeqQBGnji5epjkazc3p-IoWT5eS0UTETN5emkU8mIijLRmI1y2UlR2WhUxfAxNTJxEz1zmHVoY6Lgl1j5MbY-QqxXaY9gMbcpS9nkgeHqI8eNTtyC6a37zgz" />
      </div>
      </div>
      </div>
      </header>
      {/* ========================================================
                  WORKSPACE CANVAS (Bento Grid / Functional Layout)
                  ======================================================== */}
      <div className="flex-1 flex overflow-hidden p-md gap-md">
      {/* LEFT PANEL: Main List/Table & Controls */}
      <div className="flex-1 flex flex-col min-w-[500px] bg-surface rounded border border-outline-variant overflow-hidden shadow-sm">
      {/* Metrics Header (Status Tiles) */}
      <div className="flex gap-sm p-sm border-b border-outline-variant bg-surface-container-lowest shrink-0">
      {/* Tile 1 */}
      <div className="flex-1 flex flex-col p-md rounded bg-surface border-l-4 border-l-[#10B981] border border-outline-variant shadow-sm">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Active Probes</span>
      <span className="font-mono-data text-headline-md text-on-surface mt-xs">142</span>
      </div>
      {/* Tile 2 */}
      <div className="flex-1 flex flex-col p-md rounded bg-surface border-l-4 border-l-primary border border-outline-variant shadow-sm">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Success Rate</span>
      <div className="flex items-baseline gap-xs mt-xs">
      <span className="font-mono-data text-headline-md text-on-surface">99.4%</span>
      <span className="text-[10px] text-[#10B981] flex items-center"><ArrowUp className="text-[12px]" aria-hidden={true} focusable="false" /> 0.2</span>
      </div>
      </div>
      {/* Tile 3 */}
      <div className="flex-1 flex flex-col p-md rounded bg-surface border-l-4 border-l-[#F59E0B] border border-outline-variant shadow-sm">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Queue Depth</span>
      <div className="flex items-center gap-sm mt-xs">
      <span className="font-mono-data text-headline-md text-on-surface">1,024</span>
      <div className="w-16 h-2 bg-surface-variant rounded-full overflow-hidden">
      <div className="w-3/4 h-full bg-[#F59E0B]"></div>
      </div>
      </div>
      </div>
      </div>
      {/* Toolbar: Filters & Actions */}
      <div className="flex items-center justify-between p-sm border-b border-outline-variant bg-surface shrink-0">
      <div className="flex gap-sm">
      {/* Filter Selectors */}
      <select className="h-[28px] pl-sm pr-lg py-0 bg-surface-container-lowest border border-outline-variant rounded text-label-sm font-label-sm focus:border-primary focus:ring-0 text-on-surface">
      <option>Status: All</option>
      <option>Status: Active</option>
      <option>Status: Pending</option>
      <option>Status: Failed</option>
      </select>
      <select className="h-[28px] pl-sm pr-lg py-0 bg-surface-container-lowest border border-outline-variant rounded text-label-sm font-label-sm focus:border-primary focus:ring-0 text-on-surface">
      <option>Type: All Nodes</option>
      <option>Type: Fixed</option>
      <option>Type: Mobile</option>
      </select>
      <select className="h-[28px] pl-sm pr-lg py-0 bg-surface-container-lowest border border-outline-variant rounded text-label-sm font-label-sm focus:border-primary focus:ring-0 text-on-surface">
      <option>Date: Last 24h</option>
      <option>Date: Last 7 Days</option>
      </select>
      </div>
      <div className="flex items-center gap-md">
      <div className="flex items-center gap-xs text-on-surface-variant text-label-sm">
      <RefreshCw className="text-[14px]" aria-hidden={true} focusable="false" />
      <span>Updated 10:42:15 AM</span>
      </div>
      <button className="h-[28px] px-md bg-surface text-on-surface border border-outline-variant font-label-sm rounded flex items-center justify-center hover:bg-surface-container-low transition-colors" type="button" data-action-id="refresh-5" onClick={actions?.["refresh-5"]}>
                                  Refresh
                              </button>
      </div>
      </div>
      {/* Data Table Container (Scrollable) */}
      <div className="flex-1 overflow-auto bg-surface-container-lowest relative">
      <table className="w-full text-left border-collapse">
      <thead className="sticky top-0 bg-surface z-10 shadow-[0_1px_0_0_theme('colors.outline-variant')]">
      <tr>
      <th className="py-sm px-md font-label-sm text-label-sm text-on-surface-variant uppercase font-bold w-[40px]"></th>
      <th className="py-sm px-md font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Record ID</th>
      <th className="py-sm px-md font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Status</th>
      <th className="py-sm px-md font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Type</th>
      <th className="py-sm px-md font-label-sm text-label-sm text-on-surface-variant uppercase font-bold text-right">Last Activity</th>
      <th className="py-sm px-md font-label-sm text-label-sm text-on-surface-variant uppercase font-bold text-center">Priority</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant text-body-sm font-body-sm">
      {/* Row 1 (Active/Selected) */}
      <tr className="table-row-active cursor-pointer">
      <td className="py-xs px-md w-[40px] text-center">
      <div className="w-2 h-2 rounded-full bg-[#10B981] mx-auto"></div>
      </td>
      <td className="py-xs px-md font-mono-data text-primary font-medium">REC-9021-X</td>
      <td className="py-xs px-md">
      <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-bold bg-[#10B981]/10 text-[#047857] uppercase tracking-wide border border-[#10B981]/20">Active</span>
      </td>
      <td className="py-xs px-md text-on-surface">Data Extract</td>
      <td className="py-xs px-md font-mono-data text-on-surface-variant text-right">10:41:02 AM</td>
      <td className="py-xs px-md text-center">
      <BadgeAlert className="text-[16px] text-error" aria-hidden={true} focusable="false" />
      </td>
      </tr>
      {/* Row 2 */}
      <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
      <td className="py-xs px-md w-[40px] text-center">
      <div className="w-2 h-2 rounded-full bg-[#10B981] mx-auto"></div>
      </td>
      <td className="py-xs px-md font-mono-data text-on-surface">REC-9020-A</td>
      <td className="py-xs px-md">
      <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-bold bg-[#10B981]/10 text-[#047857] uppercase tracking-wide border border-[#10B981]/20">Active</span>
      </td>
      <td className="py-xs px-md text-on-surface">Config Sync</td>
      <td className="py-xs px-md font-mono-data text-on-surface-variant text-right">10:38:45 AM</td>
      <td className="py-xs px-md text-center">
      <Minus className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </td>
      </tr>
      {/* Row 3 */}
      <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
      <td className="py-xs px-md w-[40px] text-center">
      <div className="w-2 h-2 rounded-full bg-[#F59E0B] mx-auto"></div>
      </td>
      <td className="py-xs px-md font-mono-data text-on-surface">REC-9019-B</td>
      <td className="py-xs px-md">
      <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-bold bg-[#F59E0B]/10 text-[#B45309] uppercase tracking-wide border border-[#F59E0B]/20">Pending</span>
      </td>
      <td className="py-xs px-md text-on-surface">Firmware Update</td>
      <td className="py-xs px-md font-mono-data text-on-surface-variant text-right">10:15:00 AM</td>
      <td className="py-xs px-md text-center">
      <TriangleAlert className="text-[16px] text-[#F59E0B]" aria-hidden={true} focusable="false" />
      </td>
      </tr>
      {/* Row 4 (Error state) */}
      <tr className="hover:bg-surface-container-low cursor-pointer transition-colors bg-error-container/20">
      <td className="py-xs px-md w-[40px] text-center">
      <div className="w-2 h-2 rounded-full bg-error mx-auto"></div>
      </td>
      <td className="py-xs px-md font-mono-data text-on-surface">REC-9018-F</td>
      <td className="py-xs px-md">
      <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-bold bg-error/10 text-error uppercase tracking-wide border border-error/20">Failed</span>
      </td>
      <td className="py-xs px-md text-on-surface">Telemetry Push</td>
      <td className="py-xs px-md font-mono-data text-on-surface-variant text-right">09:55:12 AM</td>
      <td className="py-xs px-md text-center">
      <BadgeAlert className="text-[16px] text-error" aria-hidden={true} focusable="false" />
      </td>
      </tr>
      {/* Row 5 */}
      <tr className="hover:bg-surface-container-low cursor-pointer transition-colors">
      <td className="py-xs px-md w-[40px] text-center">
      <div className="w-2 h-2 rounded-full bg-outline-variant mx-auto"></div>
      </td>
      <td className="py-xs px-md font-mono-data text-on-surface">REC-9017-X</td>
      <td className="py-xs px-md">
      <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-bold bg-outline-variant/20 text-on-surface-variant uppercase tracking-wide border border-outline-variant/40">Complete</span>
      </td>
      <td className="py-xs px-md text-on-surface">Data Extract</td>
      <td className="py-xs px-md font-mono-data text-on-surface-variant text-right">08:22:10 AM</td>
      <td className="py-xs px-md text-center">
      <Minus className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </td>
      </tr>
      </tbody>
      </table>
      {/* Example Empty/Loading state (Hidden by default, uncomment for design proofing) 
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-container-lowest/80 backdrop-blur-sm z-20">
                              <div className="w-24 h-24 mb-md opacity-50">
                                   <animated-svg src="{{DATA:ANIMATION:ANIMATION_0}}" className="w-full h-full"></animated-svg>
                              </div>
                              <p className="font-headline-sm text-headline-sm text-on-surface">No records found</p>
                              <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Try adjusting your filters or search query.</p>
                          </div> */}
      </div>
      </div>
      {/* RIGHT PANEL: Selected Item Preview */}
      <aside className="w-[340px] bg-surface rounded border border-outline-variant flex flex-col overflow-hidden shadow-sm shrink-0">
      {/* Detail Header */}
      <div className="p-md border-b border-outline-variant bg-surface-container flex items-start justify-between">
      <div>
      <div className="flex items-center gap-sm mb-xs">
      <span className="font-mono-data text-headline-sm text-on-surface font-bold">REC-9021-X</span>
      <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-bold bg-[#10B981]/10 text-[#047857] uppercase tracking-wide border border-[#10B981]/20">Active</span>
      </div>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Type: Data Extract Node</p>
      </div>
      <button className="w-[28px] h-[28px] flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-variant transition-colors bg-surface border border-outline-variant shadow-sm" title="Close Preview" type="button" data-action-id="close-preview-6" onClick={actions?.["close-preview-6"]}>
      <X className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Detail Body (Scrollable) */}
      <div className="flex-1 overflow-y-auto p-md space-y-lg no-scrollbar">
      {/* Section: Meta */}
      <div>
      <h3 className="font-label-sm text-label-sm text-primary uppercase font-bold mb-sm border-b border-outline-variant pb-xs">Metadata</h3>
      <div className="grid grid-cols-2 gap-y-sm gap-x-md font-body-sm text-body-sm">
      <div className="text-on-surface-variant">Created</div>
      <div className="font-mono-data text-on-surface text-right">08:00:00 AM</div>
      <div className="text-on-surface-variant">Duration</div>
      <div className="font-mono-data text-on-surface text-right">02h 41m</div>
      <div className="text-on-surface-variant">Origin IP</div>
      <div className="font-mono-data text-on-surface text-right">192.168.1.104</div>
      <div className="text-on-surface-variant">Owner</div>
      <div className="text-on-surface text-right">System_Ops</div>
      </div>
      </div>
      {/* Section: Parameters (Inline Edit Example) */}
      <div>
      <div className="flex items-center justify-between mb-sm border-b border-outline-variant pb-xs">
      <h3 className="font-label-sm text-label-sm text-primary uppercase font-bold">Parameters</h3>
      <button className="text-primary hover:text-primary-container font-label-sm text-label-sm flex items-center gap-xs" type="button" data-action-id="edit-7" onClick={actions?.["edit-7"]}>
      <Pencil className="text-[14px]" aria-hidden={true} focusable="false" /> Edit
                                  </button>
      </div>
      <div className="space-y-sm">
      <div>
      <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Data Threshold (MB)</label>
      <input className="w-full h-[28px] px-sm bg-surface-container-lowest border border-outline-variant rounded font-mono-data text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" readOnly={true} type="text" value="500" />
      </div>
      <div>
      <label className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Timeout (ms)</label>
      <input className="w-full h-[28px] px-sm bg-surface-container-lowest border border-outline-variant rounded font-mono-data text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" readOnly={true} type="text" value="30000" />
      </div>
      </div>
      </div>
      {/* Section: Live Console/Logs preview */}
      <div>
      <h3 className="font-label-sm text-label-sm text-primary uppercase font-bold mb-sm border-b border-outline-variant pb-xs">Recent Telemetry</h3>
      <div className="bg-inverse-surface rounded p-sm border border-outline-variant">
      <div className="font-mono-data text-[11px] leading-tight text-primary-fixed-dim opacity-80">
      <p>[10:41:00] Init sequence started.</p>
      <p>[10:41:01] <span className="text-[#10B981]">OK</span> Handshake complete.</p>
      <p>[10:41:02] Streaming payload... 14%</p>
      <p className="animate-pulse text-secondary-fixed">_</p>
      </div>
      </div>
      </div>
      </div>
      {/* Detail Actions */}
      <div className="p-md border-t border-outline-variant bg-surface-container flex gap-sm mt-auto">
      <button className="flex-1 h-[32px] bg-surface text-on-surface border border-outline-variant font-label-md text-label-md rounded flex items-center justify-center hover:bg-surface-container-low transition-colors" type="button" data-action-id="suspend-8" onClick={actions?.["suspend-8"]}>
                              Suspend
                          </button>
      <button className="flex-1 h-[32px] bg-primary text-on-primary font-label-md text-label-md rounded flex items-center justify-center hover:bg-primary/90 transition-colors shadow-sm" type="button" data-action-id="force-sync-9" onClick={actions?.["force-sync-9"]}>
                              Force Sync
                          </button>
      </div>
      </aside>
      </div>
      </main>
    </>
  );
}
