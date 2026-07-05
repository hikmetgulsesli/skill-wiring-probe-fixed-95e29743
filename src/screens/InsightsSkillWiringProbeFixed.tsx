// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - Skill Wiring Probe Fixed
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowRight, BadgeHelp, BarChart3, Bell, CircleAlert, CircleHelp, Database, Download, EllipsisVertical, Factory, Gauge, ListFilter, Pencil, Plus, Router, Search, Settings, Terminal, ToggleRight, TrendingUp, TriangleAlert } from "lucide-react";


export type InsightsSkillWiringProbeFixedActionId = "toggle-on-1" | "notifications-2" | "settings-3" | "new-probe-4" | "filter-insights-5" | "export-summary-6" | "more-vert-7" | "enable-trace-logic-8" | "operations-1" | "editor-2" | "insights-3" | "settings-4" | "support-5" | "view-in-operations-6";

export interface InsightsSkillWiringProbeFixedProps {
  actions?: Partial<Record<InsightsSkillWiringProbeFixedActionId, () => void>>;

}

export function InsightsSkillWiringProbeFixed({ actions }: InsightsSkillWiringProbeFixedProps) {
  return (
    <>
      {/* TopNavBar */}
      <header className="fixed top-0 w-full h-[48px] border-b border-outline-variant dark:border-outline flex justify-between items-center px-lg z-50 bg-surface dark:bg-inverse-surface">
      <div className="flex items-center gap-md pl-[240px]">
      <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">
                      Skill Wiring Probe Fixed
                  </span>
      </div>
      <div className="flex items-center gap-lg">
      {/* Search on right */}
      <div className="relative w-64">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-[32px] pl-[32px] pr-sm bg-surface-container-lowest border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant transition-colors" placeholder="Search insights..." type="text" />
      </div>
      <div className="flex items-center gap-sm">
      <button className="h-[32px] w-[32px] flex items-center justify-center rounded hover:bg-surface-container-low dark:hover:bg-tertiary-container transition-colors cursor-pointer active:opacity-80 text-on-surface-variant" type="button" aria-label="Toggle On" data-action-id="toggle-on-1" onClick={actions?.["toggle-on-1"]}>
      <ToggleRight className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="h-[32px] w-[32px] flex items-center justify-center rounded hover:bg-surface-container-low dark:hover:bg-tertiary-container transition-colors cursor-pointer active:opacity-80 text-on-surface-variant relative" type="button" aria-label="Notifications" data-action-id="notifications-2" onClick={actions?.["notifications-2"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="absolute top-[6px] right-[6px] w-[6px] h-[6px] rounded-full bg-error"></span>
      </button>
      <button className="h-[32px] w-[32px] flex items-center justify-center rounded hover:bg-surface-container-low dark:hover:bg-tertiary-container transition-colors cursor-pointer active:opacity-80 text-on-surface-variant" type="button" aria-label="Settings" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="w-[32px] h-[32px] rounded-full bg-primary-container border border-outline-variant overflow-hidden flex items-center justify-center">
      <img alt="User Avatar" className="w-full h-full object-cover" data-alt="A minimalist UI avatar featuring a geometric abstract shape in vibrant teal and dark navy on a pure white background, corporate tool aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8_T0YPCfk0PdNjDADdWJwXzUAoB1btgu2F8Zy3J7SkRVO9cnwsZ4me4WxqyhEEA9O0ZA99LVShquQLeN46IZ2c5JGTGWLOCs6V6JQH0xDDsIwLY_IEEhoNljCMIbZK530cctswj0kT2tyDCvCVcFNUtpXEukGXKJOdvfWlv3z6Li9odvCqBXBn6C68dqHrxprZEAExhj4688pylzyIpWq0XCU0c_PWBJy_qDLaLzz6_FuVjCyuVQUwmqwqaQqjX8yUSjR0Vh-0jBN" />
      </div>
      </div>
      </header>
      {/* SideNavBar & Main Content Wrapper */}
      <div className="flex h-full pt-[48px]">
      {/* SideNavBar */}
      <nav className="fixed left-0 top-[48px] h-[calc(100%-48px)] w-[240px] border-r border-outline-variant/20 bg-inverse-surface dark:bg-on-surface flex flex-col py-xl z-40">
      {/* Header section of SideNav */}
      <div className="px-xl mb-xl flex flex-col gap-sm">
      <div className="flex items-center gap-md">
      <div className="w-[40px] h-[40px] rounded-DEFAULT bg-primary-container flex items-center justify-center flex-shrink-0">
      <Terminal className="text-on-primary-container text-[24px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-display-lg text-[18px] leading-[24px] font-bold text-primary-fixed-dim tracking-tight truncate">Wiring Probe</div>
      <div className="font-label-sm text-label-sm text-surface-variant/70 uppercase tracking-widest mt-[2px]">Fixed Node v4.2</div>
      </div>
      </div>
      <button className="mt-md w-full h-[32px] bg-primary text-on-primary font-label-md text-label-md rounded flex items-center justify-center gap-xs hover:bg-surface-tint transition-colors duration-200 ease-in-out cursor-pointer shadow-sm" type="button" data-action-id="new-probe-4" onClick={actions?.["new-probe-4"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" />
                          New Probe
                      </button>
      </div>
      {/* Primary Navigation */}
      <div className="flex-1 flex flex-col gap-base px-md">
      {/* Inactive Tab */}
      <a className="flex items-center gap-md px-md h-[32px] rounded font-label-md text-label-md text-surface-variant/70 hover:text-surface-variant hover:bg-surface-variant/10 transition-colors duration-200 ease-in-out" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <Factory className="text-[18px]" aria-hidden={true} focusable="false" />
                          Operations
                      </a>
      {/* Inactive Tab */}
      <a className="flex items-center gap-md px-md h-[32px] rounded font-label-md text-label-md text-surface-variant/70 hover:text-surface-variant hover:bg-surface-variant/10 transition-colors duration-200 ease-in-out" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
                          Editor
                      </a>
      {/* Active Tab: Insights */}
      <a className="flex items-center gap-md px-md h-[32px] rounded font-label-md text-label-md bg-primary/10 text-primary-fixed-dim border-l-[3px] border-primary-fixed-dim transition-colors duration-200 ease-in-out" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3 className="text-[18px]" aria-hidden={true} focusable="false" />
                          Insights
                      </a>
      </div>
      {/* Footer Navigation */}
      <div className="mt-auto px-md flex flex-col gap-base border-t border-outline-variant/10 pt-lg">
      <a className="flex items-center gap-md px-md h-[32px] rounded font-label-md text-label-md text-surface-variant/70 hover:text-surface-variant hover:bg-surface-variant/10 transition-colors duration-200 ease-in-out" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings className="text-[18px]" aria-hidden={true} focusable="false" />
                          Settings
                      </a>
      <a className="flex items-center gap-md px-md h-[32px] rounded font-label-md text-label-md text-surface-variant/70 hover:text-surface-variant hover:bg-surface-variant/10 transition-colors duration-200 ease-in-out" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>
      <CircleHelp className="text-[18px]" aria-hidden={true} focusable="false" />
                          Support
                      </a>
      </div>
      </nav>
      {/* Main Canvas */}
      <main className="ml-[240px] flex-1 h-full overflow-y-auto p-xl bg-background">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-xl">
      {/* Canvas Header & Actions */}
      <div className="flex items-end justify-between border-b border-outline-variant/50 pb-md">
      <div>
      <h1 className="font-headline-md text-headline-md text-on-surface">Telemetry Insights</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-base">Real-time performance and diagnostic data.</p>
      </div>
      <div className="flex items-center gap-md">
      <button className="h-[32px] px-md rounded bg-surface-container-lowest border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-container-low transition-colors flex items-center gap-xs" type="button" data-action-id="filter-insights-5" onClick={actions?.["filter-insights-5"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" />
                                  Filter Insights
                              </button>
      <button className="h-[32px] px-md rounded bg-surface-container-lowest border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-container-low transition-colors flex items-center gap-xs" type="button" data-action-id="export-summary-6" onClick={actions?.["export-summary-6"]}>
      <Download className="text-[16px]" aria-hidden={true} focusable="false" />
                                  Export Summary
                              </button>
      </div>
      </div>
      {/* Actionable Follow-up Hint */}
      <div className="bg-error-container/20 border border-error-container rounded-lg p-md flex items-center justify-between">
      <div className="flex items-center gap-md">
      <TriangleAlert className="text-error text-[24px]" aria-hidden={true} focusable="false" />
      <div>
      <div className="font-label-md text-label-md text-on-surface">3 Probes require attention</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">Elevated latency detected in European nodes over the last 15 minutes.</div>
      </div>
      </div>
      <a className="font-label-md text-label-md text-error hover:underline flex items-center gap-xs" href="#" data-action-id="view-in-operations-6" onClick={(event) => { event.preventDefault(); actions?.["view-in-operations-6"]?.(); }}>
                              View in Operations
                              <ArrowRight className="text-[16px]" aria-hidden={true} focusable="false" />
      </a>
      </div>
      {/* Small Metrics Grid */}
      <div className="grid grid-cols-4 gap-md">
      {/* Metric 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md relative overflow-hidden group hover:border-primary transition-colors">
      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-primary"></div>
      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-sm flex justify-between">
                                  Total Events
                                  <Database className="text-[14px] text-primary" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-mono-data text-[24px] leading-tight text-on-surface font-medium">14,291,044</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant mt-xs flex items-center gap-xs">
      <TrendingUp className="text-[12px] text-tertiary" aria-hidden={true} focusable="false" />
                                  +12.4% vs last hour
                              </div>
      </div>
      {/* Metric 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md relative overflow-hidden group hover:border-primary transition-colors">
      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-error"></div>
      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-sm flex justify-between">
                                  Error Count
                                  <CircleAlert className="text-[14px] text-error" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-mono-data text-[24px] leading-tight text-on-surface font-medium">1,204</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant mt-xs flex items-center gap-xs">
      <TrendingUp className="text-[12px] text-error" aria-hidden={true} focusable="false" />
                                  +3.2% vs last hour
                              </div>
      </div>
      {/* Metric 3 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md relative overflow-hidden group hover:border-primary transition-colors">
      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-surface-tint"></div>
      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-sm flex justify-between">
                                  Avg Latency
                                  <Gauge className="text-[14px] text-surface-tint" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-mono-data text-[24px] leading-tight text-on-surface font-medium">42<span className="text-body-sm ml-[2px] text-on-surface-variant">ms</span></div>
      <div className="font-label-sm text-label-sm text-on-surface-variant mt-xs flex items-center gap-xs">
      <BadgeHelp className="text-[12px] text-tertiary" aria-hidden={true} focusable="false" />
                                  Stable
                              </div>
      </div>
      {/* Metric 4 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md relative overflow-hidden group hover:border-primary transition-colors">
      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-tertiary-container"></div>
      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-sm flex justify-between">
                                  Active Probes
                                  <Router className="text-[14px] text-tertiary" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-mono-data text-[24px] leading-tight text-on-surface font-medium">84 / 86</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant mt-xs flex items-center gap-xs">
      <TriangleAlert className="text-[12px] text-error" aria-hidden={true} focusable="false" />
                                  2 disconnected
                              </div>
      </div>
      </div>
      {/* Bento Grid for Detailed Views */}
      <div className="grid grid-cols-12 gap-lg mt-base">
      {/* Left Col: State Distribution & Empty State Demo */}
      <div className="col-span-8 flex flex-col gap-lg">
      {/* State Distribution Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg">
      <div className="flex items-center justify-between mb-lg">
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Record State Distribution</h2>
      <button className="text-on-surface-variant hover:text-on-surface transition-colors" type="button" aria-label="More Vert" data-action-id="more-vert-7" onClick={actions?.["more-vert-7"]}>
      <EllipsisVertical className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="space-y-xl">
      {/* Compact Horizontal Bar */}
      <div>
      <div className="flex justify-between font-label-md text-label-md text-on-surface-variant mb-sm">
      <span>Total Records Processed</span>
      <span className="font-mono-data">928,441</span>
      </div>
      <div className="h-[12px] w-full flex rounded-full overflow-hidden bg-surface-container-high border border-outline-variant/30">
      <div className="bg-primary h-full transition-colors duration-500 ease-out" style={{width: "72%"}} title="Processed (72%)"></div>
      <div className="bg-secondary-fixed-dim h-full border-l border-surface-container-lowest transition-colors duration-500 ease-out" style={{width: "18%"}} title="Pending (18%)"></div>
      <div className="bg-error h-full border-l border-surface-container-lowest transition-colors duration-500 ease-out" style={{width: "10%"}} title="Failed (10%)"></div>
      </div>
      <div className="flex gap-lg mt-sm">
      <div className="flex items-center gap-xs font-label-sm text-label-sm text-on-surface-variant">
      <div className="w-[8px] h-[8px] rounded-full bg-primary"></div> Processed (72%)
                                              </div>
      <div className="flex items-center gap-xs font-label-sm text-label-sm text-on-surface-variant">
      <div className="w-[8px] h-[8px] rounded-full bg-secondary-fixed-dim"></div> Pending (18%)
                                              </div>
      <div className="flex items-center gap-xs font-label-sm text-label-sm text-on-surface-variant">
      <div className="w-[8px] h-[8px] rounded-full bg-error"></div> Failed (10%)
                                              </div>
      </div>
      </div>
      </div>
      </div>
      {/* Secondary Data / Empty State Panel */}
      <div className="bg-surface-container-lowest border border-outline-variant border-dashed rounded-lg p-xl flex flex-col items-center justify-center text-center min-h-[200px] bg-surface-variant/20">
      <BarChart3 className="text-surface-variant text-[48px] mb-md font-light" aria-hidden={true} focusable="false" />
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">No Deep Diagnostics Found</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant max-w-[400px]">
                                      Advanced wiring diagnostics require the 'Trace Logic' flag to be enabled on the target probes.
                                  </p>
      <button className="mt-lg h-[32px] px-lg rounded bg-surface-container-lowest border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-container-low transition-colors" type="button" data-action-id="enable-trace-logic-8" onClick={actions?.["enable-trace-logic-8"]}>
                                      Enable Trace Logic
                                  </button>
      </div>
      </div>
      {/* Right Col: Recent Activity Feed */}
      <div className="col-span-4 bg-surface-container-lowest border border-outline-variant rounded-lg p-lg flex flex-col">
      <div className="flex items-center justify-between mb-lg">
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Recent Activity</h2>
      <span className="font-label-sm text-label-sm text-on-surface-variant px-sm py-[2px] bg-surface-container-high rounded-full">Live</span>
      </div>
      <div className="flex-1 overflow-y-auto no-scrollbar relative pr-xs">
      <div className="absolute left-[11px] top-md bottom-0 w-[1px] bg-outline-variant/30 z-0"></div>
      <div className="flex flex-col gap-lg relative z-10">
      {/* Activity Item */}
      <div className="flex gap-md">
      <div className="w-[24px] h-[24px] rounded-full bg-surface-container-lowest border-2 border-error flex items-center justify-center mt-[2px] flex-shrink-0">
      <div className="w-[8px] h-[8px] rounded-full bg-error"></div>
      </div>
      <div>
      <div className="font-label-md text-label-md text-on-surface">Probe Disconnected</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Node EU-West-04 dropped heartbeat.</div>
      <div className="font-mono-data text-label-sm text-tertiary mt-xs">14:02:44.120</div>
      </div>
      </div>
      {/* Activity Item */}
      <div className="flex gap-md">
      <div className="w-[24px] h-[24px] rounded-full bg-surface-container-lowest border-2 border-outline-variant flex items-center justify-center mt-[2px] flex-shrink-0">
      <div className="w-[8px] h-[8px] rounded-full bg-outline-variant"></div>
      </div>
      <div>
      <div className="font-label-md text-label-md text-on-surface">Configuration Update</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Schema validated and deployed by User_77.</div>
      <div className="font-mono-data text-label-sm text-tertiary mt-xs">13:45:01.005</div>
      </div>
      </div>
      {/* Activity Item */}
      <div className="flex gap-md">
      <div className="w-[24px] h-[24px] rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center mt-[2px] flex-shrink-0">
      <div className="w-[8px] h-[8px] rounded-full bg-primary"></div>
      </div>
      <div>
      <div className="font-label-md text-label-md text-on-surface">Latency Spike Resolved</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Auto-scaling recovered queue processing.</div>
      <div className="font-mono-data text-label-sm text-tertiary mt-xs">13:10:22.840</div>
      </div>
      </div>
      {/* Activity Item */}
      <div className="flex gap-md">
      <div className="w-[24px] h-[24px] rounded-full bg-surface-container-lowest border-2 border-outline-variant flex items-center justify-center mt-[2px] flex-shrink-0">
      <div className="w-[8px] h-[8px] rounded-full bg-outline-variant"></div>
      </div>
      <div>
      <div className="font-label-md text-label-md text-on-surface">System Backup</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Snapshot created successfully.</div>
      <div className="font-mono-data text-label-sm text-tertiary mt-xs">12:00:00.000</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
