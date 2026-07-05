// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Editor - Skill Wiring Probe Fixed
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, Bell, ChevronDown, CircleHelp, Cpu, Factory, Info, Pencil, Plus, Save, Search, Settings, ToggleRight, TriangleAlert } from "lucide-react";


export type RecordEditorSkillWiringProbeFixedActionId = "toggle-on-1" | "notifications-2" | "settings-3" | "new-probe-4" | "discard-5" | "save-now-6" | "format-json-7" | "cancel-8" | "save-record-9" | "operations-1" | "editor-2" | "insights-3" | "settings-4" | "support-5";

export interface RecordEditorSkillWiringProbeFixedProps {
  actions?: Partial<Record<RecordEditorSkillWiringProbeFixedActionId, () => void>>;

}

export function RecordEditorSkillWiringProbeFixed({ actions }: RecordEditorSkillWiringProbeFixedProps) {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full h-[48px] flex justify-between items-center px-lg z-50 bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline">
      <div className="flex items-center gap-md">
      <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">Skill Wiring Probe Fixed</span>
      </div>
      <div className="flex items-center gap-sm">
      <div className="relative hidden md:flex items-center mr-md">
      <Search className="absolute left-2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="pl-[28px] pr-sm h-[32px] w-[200px] bg-surface border border-outline-variant rounded-DEFAULT font-body-sm text-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="Search..." type="text" />
      </div>
      <button className="p-xs text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-low dark:hover:bg-tertiary-container transition-colors rounded-full cursor-pointer active:opacity-80" type="button" aria-label="Toggle On" data-action-id="toggle-on-1" onClick={actions?.["toggle-on-1"]}>
      <ToggleRight className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="p-xs text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-low dark:hover:bg-tertiary-container transition-colors rounded-full cursor-pointer active:opacity-80" type="button" aria-label="Notifications" data-action-id="notifications-2" onClick={actions?.["notifications-2"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="p-xs text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-low dark:hover:bg-tertiary-container transition-colors rounded-full cursor-pointer active:opacity-80" type="button" aria-label="Settings" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <div className="ml-sm w-[32px] h-[32px] rounded-full overflow-hidden border border-outline-variant ml-xs">
      <img alt="User Avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a user avatar for a high-tech application. The lighting is clean and modern, set against a neutral gray background. The subject wears dark, tailored clothing fitting a modern corporate environment. The image is crisp, high-resolution, and perfectly centered." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtqrAr4k8WT8UbgPG3TYGPro4fZGDlkbI6pKDz4_AbHn01PR0lsTAkgBM856Ah0m5nlCJTSYNKy2yK4BeMpAFT84a0ekhe6peU7y7tqr1iZAvRpPRm6R_gZLEd0IXjfcj4pO3uR42_IOC5SQ72T0mgJbw_pFYyuxBqJCLjkRwmPDvp-xQn1uMdpP8pIF-tnZ-Pz3gJ1nu_Rl-SzMdtlJioDTUEOxdW36kunIUVQzMnz33yzDmPfQwumbNgl-PR1VTpinsMjPx3K6v2" />
      </div>
      </div>
      </nav>
      <div className="flex flex-1 pt-[48px] h-screen w-full">
      {/* SideNavBar */}
      <aside className="hidden md:flex fixed left-0 top-[48px] h-[calc(100vh-48px)] w-[240px] flex-col py-xl bg-inverse-surface dark:bg-on-surface border-r border-outline-variant/20 z-40">
      <div className="px-lg mb-xl flex items-center gap-md">
      <div className="w-[40px] h-[40px] bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30">
      <Cpu className="text-primary-fixed-dim icon-fill" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h2 className="font-headline-sm text-headline-sm text-primary-fixed-dim">Wiring Probe</h2>
      <p className="font-label-sm text-label-sm text-surface-variant/70">Fixed Node v4.2</p>
      </div>
      </div>
      <div className="px-md mb-lg">
      <button className="w-full flex items-center justify-center gap-sm bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md py-sm rounded-DEFAULT transition-colors" type="button" data-action-id="new-probe-4" onClick={actions?.["new-probe-4"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                          New Probe
                      </button>
      </div>
      <nav className="flex-1 flex flex-col gap-xs px-sm overflow-y-auto">
      <a className="flex items-center gap-md px-md py-sm rounded-DEFAULT text-surface-variant/70 hover:text-surface-variant hover:bg-surface-variant/10 transition-colors duration-200 ease-in-out" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <Factory className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Operations</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-DEFAULT bg-primary/10 text-primary-fixed-dim border-l-[3px] border-primary-fixed-dim transition-colors duration-200 ease-in-out" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil className="text-[18px] icon-fill" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Editor</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-DEFAULT text-surface-variant/70 hover:text-surface-variant hover:bg-surface-variant/10 transition-colors duration-200 ease-in-out" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3 className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      </nav>
      <div className="mt-auto px-sm flex flex-col gap-xs border-t border-outline-variant/10 pt-md">
      <a className="flex items-center gap-md px-md py-sm rounded-DEFAULT text-surface-variant/70 hover:text-surface-variant hover:bg-surface-variant/10 transition-colors duration-200 ease-in-out" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-DEFAULT text-surface-variant/70 hover:text-surface-variant hover:bg-surface-variant/10 transition-colors duration-200 ease-in-out" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>
      <CircleHelp className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Support</span>
      </a>
      </div>
      </aside>
      {/* Main Canvas */}
      <main className="flex-1 md:ml-[240px] p-lg md:p-xl overflow-y-auto bg-background flex flex-col gap-lg">
      {/* Unsaved Changes Banner */}
      <div className="bg-error-container/20 border border-error/20 rounded-DEFAULT p-md flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-sm text-error">
      <TriangleAlert className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">You have unsaved changes.</span>
      </div>
      <div className="flex gap-sm">
      <button className="font-label-md text-label-md text-secondary hover:text-on-surface transition-colors" type="button" data-action-id="discard-5" onClick={actions?.["discard-5"]}>Discard</button>
      <button className="font-label-md text-label-md text-primary hover:text-primary/80 transition-colors" type="button" data-action-id="save-now-6" onClick={actions?.["save-now-6"]}>Save Now</button>
      </div>
      </div>
      {/* Editor Header */}
      <div className="flex items-center justify-between border-b border-outline-variant pb-md">
      <div>
      <h1 className="font-headline-md text-headline-md text-on-surface">Record Editor</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Configure routing rules and execution parameters.</p>
      </div>
      </div>
      {/* Form Container */}
      <div className="bg-surface border border-outline-variant rounded-lg p-xl shadow-sm flex flex-col gap-xl w-full max-w-4xl mx-auto">
      <form className="flex flex-col gap-xl">
      {/* General Information Section */}
      <div className="flex flex-col gap-md">
      <h3 className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider border-b border-outline-variant/50 pb-xs">General Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
      <div className="flex flex-col gap-xs">
      <label className="font-label-md text-label-md text-on-surface flex items-center gap-xs">
                                          Record Name <span className="text-error">*</span>
      </label>
      <input className="h-[32px] px-sm border border-error bg-error-container/10 rounded-DEFAULT font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-error transition-colors" type="text" defaultValue="RoutingNode_Alpha" />
      <span className="font-label-sm text-label-sm text-error mt-xs">Name must contain only alphanumeric characters and underscores.</span>
      </div>
      <div className="flex flex-col gap-xs">
      <label className="font-label-md text-label-md text-on-surface">
                                          Status
                                      </label>
      <div className="relative h-[32px]">
      <select className="w-full h-full pl-sm pr-lg border border-outline-variant bg-surface rounded-DEFAULT font-body-sm text-body-sm text-on-surface appearance-none focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer">
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
      <option value="maintenance">Maintenance</option>
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      <div className="flex flex-col gap-xs">
      <label className="font-label-md text-label-md text-on-surface">
                                      Description <span className="text-on-surface-variant font-normal">(Optional)</span>
      </label>
      <textarea className="p-sm border border-outline-variant bg-surface rounded-DEFAULT font-body-sm text-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none transition-colors" rows={2}>Handles primary routing for incoming telemetry data streams.</textarea>
      </div>
      </div>
      {/* Configuration Section */}
      <div className="flex flex-col gap-md">
      <h3 className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider border-b border-outline-variant/50 pb-xs">Execution Parameters</h3>
      <div className="flex flex-col gap-xs mb-md">
      <label className="font-label-md text-label-md text-on-surface mb-xs">Priority Level</label>
      <div className="flex items-center gap-xl">
      <label className="flex items-center gap-sm cursor-pointer group">
      <input className="w-4 h-4 text-primary bg-surface border-outline-variant focus:ring-primary focus:ring-offset-surface" name="priority" type="radio" />
      <span className="font-body-sm text-body-sm text-on-surface group-hover:text-primary transition-colors">Low</span>
      </label>
      <label className="flex items-center gap-sm cursor-pointer group">
      <input defaultChecked={true} className="w-4 h-4 text-primary bg-surface border-outline-variant focus:ring-primary focus:ring-offset-surface" name="priority" type="radio" />
      <span className="font-body-sm text-body-sm text-on-surface group-hover:text-primary transition-colors">Standard</span>
      </label>
      <label className="flex items-center gap-sm cursor-pointer group">
      <input className="w-4 h-4 text-primary bg-surface border-outline-variant focus:ring-primary focus:ring-offset-surface" name="priority" type="radio" />
      <span className="font-body-sm text-body-sm text-on-surface group-hover:text-primary transition-colors text-error">Critical</span>
      </label>
      </div>
      </div>
      <div className="flex flex-col gap-xs">
      <div className="flex justify-between items-center">
      <label className="font-label-md text-label-md text-on-surface flex items-center gap-xs">
                                          JSON Payload <Info className="text-[14px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </label>
      <button className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-xs" type="button" data-action-id="format-json-7" onClick={actions?.["format-json-7"]}>
      <BadgeHelp className="text-[14px]" aria-hidden={true} focusable="false" /> Format JSON
                                      </button>
      </div>
      <div className="relative rounded-DEFAULT border border-outline-variant overflow-hidden bg-[#1e1e1e]">
      {/* Line numbers simulation */}
      <div className="absolute left-0 top-0 bottom-0 w-[40px] bg-[#2d2d2d] border-r border-[#404040] py-sm flex flex-col items-end pr-sm text-[#858585] font-mono-data text-mono-data select-none">
      <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span>
      </div>
      <textarea className="w-full pl-[48px] pr-sm py-sm bg-transparent text-[#d4d4d4] font-mono-data text-mono-data border-none focus:ring-0 resize-y min-h-[120px] focus:outline-none" rows={6}>&#123;
        "retry_count": 3,
        "timeout_ms": 5000,
        "endpoint": "/api/v1/telemetry",
        "log_level": "verbose"
      &#125;</textarea>
      </div>
      </div>
      </div>
      </form>
      {/* Action Footer */}
      <div className="flex items-center justify-end gap-md pt-lg border-t border-outline-variant mt-auto">
      <button className="px-lg h-[32px] bg-surface border border-outline-variant text-on-surface font-label-md text-label-md rounded-DEFAULT hover:bg-surface-container-low transition-colors" type="button" data-action-id="cancel-8" onClick={actions?.["cancel-8"]}>
                              Cancel
                          </button>
      <button className="px-lg h-[32px] bg-primary text-on-primary font-label-md text-label-md rounded-DEFAULT hover:bg-primary/90 transition-colors flex items-center gap-sm shadow-sm" type="button" data-action-id="save-record-9" onClick={actions?.["save-record-9"]}>
      <Save className="text-[16px]" aria-hidden={true} focusable="false" />
                              Save Record
                          </button>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
