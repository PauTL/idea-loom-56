import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import WorkflowStepper from "@/components/WorkflowStepper";
import InstructionCard from "@/components/InstructionCard";
import SidebarFilters from "@/components/SidebarFilters";
import ModerationTable from "@/components/ModerationTable";
import VersionSwitcher, { type LayoutVersion } from "@/components/VersionSwitcher";
import KanbanLayout from "@/components/layouts/KanbanLayout";
import FocusLayout from "@/components/layouts/FocusLayout";
import WizardLayout from "@/components/layouts/WizardLayout";
import { Lightbulb, Settings, Shield } from "lucide-react";

const tabs = [
  { label: "VUE D'ENSEMBLE", count: 6 },
  { label: "LA SÉLECTION", count: 1 },
  { label: "MON ESPACE", count: 10 },
  { label: "MODÉRATION", icon: Settings, active: true },
  { label: "ADMINISTRATION", icon: Shield },
];

const Index = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [layoutVersion, setLayoutVersion] = useState<LayoutVersion>("kanban");

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />

        {/* Page header */}
        <div className="border-b border-border bg-card">
          <div className="px-6 pt-5 pb-0">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Lightbulb size={20} className="text-primary" />
                <h1 className="text-xl font-bold text-foreground">Vos Solutions</h1>
              </div>
              <VersionSwitcher version={layoutVersion} onChange={setLayoutVersion} />
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.label}
                  className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold tracking-wide border-b-2 transition-colors ${
                    tab.active
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                  }`}
                >
                  {tab.icon && <tab.icon size={14} />}
                  <span>{tab.label}</span>
                  {tab.count !== undefined && (
                    <span className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center ${
                      tab.active
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex">
          {layoutVersion === "kanban" && <KanbanLayout />}
          {layoutVersion === "focus" && <FocusLayout />}
          {layoutVersion === "wizard" && (
            <>
              <div className="border-r border-border bg-card p-4">
                <SidebarFilters />
              </div>
              <WizardLayout />
            </>
          )}
          {layoutVersion !== "kanban" && layoutVersion !== "focus" && layoutVersion !== "wizard" && (
            <>
              <div className="border-r border-border bg-card p-4">
                <SidebarFilters />
              </div>
              <div className="flex-1 p-6 space-y-6 overflow-auto">
                <WorkflowStepper activeStep={activeStep} onStepChange={setActiveStep} />
                <InstructionCard activeStep={activeStep} />
                <ModerationTable activeStep={activeStep} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
