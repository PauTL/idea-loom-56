import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import ProjectWorkflowStepper from "@/components/ProjectWorkflowStepper";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronRight, FileDown, Archive, Pencil } from "lucide-react";
import { useState } from "react";

const ProjectDetail = () => {
  const [activeTab, setActiveTab] = useState<"description" | "roadmap">("description");
  // Simulate the project being at step 1 (Approbation completed, currently at step 1)
  const currentStep = 1;

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />

        {/* Breadcrumb + Workflow Stepper (same white block) */}
        <div className="bg-card">
          <div className="px-6 pt-3 pb-2">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <button className="hover:text-foreground transition-colors">Vos solutions</button>
              <ChevronRight size={12} />
              <span className="text-foreground font-medium">Nom du projet de test</span>
            </div>
          </div>
          <ProjectWorkflowStepper currentStep={currentStep} />
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-end gap-2 px-6 py-4 bg-background border-t border-border">
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity">
            <FileDown size={14} />
            Exporter en PDF
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-primary text-primary text-xs font-semibold hover:bg-accent transition-colors">
            <Archive size={14} />
            Archiver ce projet
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity">
            <Pencil size={14} />
            Editer
          </button>
        </div>

        {/* Project content */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex gap-6">
              {/* Main content */}
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-foreground mb-6">Nom du projet de test</h1>

                <div className="flex gap-6 mb-6">
                  <div className="w-80 h-48 rounded-lg bg-muted overflow-hidden shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center text-muted-foreground text-sm">
                      Image du projet
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Description du projet de test
                    </p>
                    <p className="text-xs text-muted-foreground">12 mars 2026</p>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-2 mb-6">
                  <button
                    onClick={() => setActiveTab("description")}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                      activeTab === "description"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setActiveTab("roadmap")}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                      activeTab === "roadmap"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Roadmap
                    <span className="w-5 h-5 rounded-full bg-muted-foreground/20 text-[10px] font-bold flex items-center justify-center">0</span>
                  </button>
                </div>

                {/* Description content */}
                {activeTab === "description" && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-base font-bold text-primary mb-3">Intérêt, bénéfice ou problème résolu</h2>
                      <p className="text-sm text-foreground/70 leading-relaxed mb-3">
                        Ipsum tempor et sit consectetur. Labore adipiscing tempor dolor adipiscing incididunt. Dolor labore sed et eiusmod. Do incididunt Lorem dolor et. Sed dolore adipiscing dolore labore.
                      </p>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Et elit Lorem sed. Sed consectetur sed consectetur Lorem eiusmod. Dolore sit tempor elit magna. Dolore consectetur labore ipsum. Tempor dolor ut adipiscing tempor Lorem do.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-base font-bold text-primary mb-3">Prompt à copier-coller</h2>
                      <p className="text-sm text-foreground/70 leading-relaxed mb-3">
                        Ipsum tempor et sit consectetur. Labore adipiscing tempor dolor adipiscing incididunt. Dolor labore sed et eiusmod. Do incididunt Lorem dolor et. Sed dolore adipiscing dolore labore.
                      </p>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Et elit Lorem sed. Sed consectetur sed consectetur Lorem eiusmod. Dolore sit tempor elit magna. Dolore consectetur labore ipsum. Tempor dolor ut adipiscing tempor Lorem do.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "roadmap" && (
                  <div className="text-sm text-muted-foreground py-8 text-center">
                    Aucune étape de roadmap pour le moment.
                  </div>
                )}
              </div>

              {/* Team sidebar */}
              <div className="w-72 shrink-0">
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-sm font-bold text-foreground mb-4">Équipe</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground font-medium">1</span>
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">JD</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-foreground">Julie Dupont</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-muted text-muted-foreground">Auteur</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
