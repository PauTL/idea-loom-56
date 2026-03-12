import { useState } from "react";
import { Search, Download, FileText, Filter, ChevronDown, CheckCircle2, XCircle, MessageSquare, ClipboardCheck, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const steps = [
  { label: "Approbation", count: 1 },
  { label: "Attributs", count: 0 },
  { label: "ROI", count: 0 },
  { label: "Évaluation", count: 0 },
  { label: "Objectifs", count: 0 },
  { label: "À publier", count: 0 },
];

const stepInstructions: Record<number, { title: string; desc: string; tips: string[] }> = {
  0: {
    title: "Approbation des projets",
    desc: "Examinez chaque projet et décidez de l'accepter ou de le refuser.",
    tips: ["Cliquez sur ✓ pour approuver", "Cliquez sur ✕ pour refuser", "💬 pour demander des modifications"],
  },
  1: {
    title: "Attribution des catégories",
    desc: "Associez les catégories appropriées à chaque projet.",
    tips: ["Choisissez une catégorie existante ou créez-en une", "Enregistrez avant de passer à l'étape suivante"],
  },
  2: {
    title: "Estimation du ROI",
    desc: "Renseignez les coûts et bénéfices prévisionnels.",
    tips: ["Estimez le retour sur investissement", "Validez vos estimations"],
  },
  3: {
    title: "Évaluation collective",
    desc: "Chaque membre attribue une note selon les critères définis.",
    tips: ["Vérifiez que chaque membre a noté", "La moyenne sera calculée automatiquement"],
  },
  4: {
    title: "Définition des objectifs",
    desc: "Associez des objectifs stratégiques à chaque projet.",
    tips: ["Définissez des indicateurs de suivi", "Enregistrez avant publication"],
  },
  5: {
    title: "Publication",
    desc: "Les projets sont prêts à être publiés et visibles par tous.",
    tips: ["Publiez ou renvoyez aux étapes précédentes"],
  },
};

const columns = ["ID", "Création", "Auteur", "Titre", "Statut", "Actions"];

const FocusLayout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const instruction = stepInstructions[activeStep];
  const totalProjects = steps.reduce((sum, s) => sum + s.count, 0);
  const completedBefore = steps.slice(0, activeStep).reduce((sum, s) => sum + s.count, 0);
  const progress = totalProjects > 0 ? Math.round(((completedBefore) / totalProjects) * 100) : 0;

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Main content */}
      <div className="flex-1 p-6 space-y-4 overflow-auto">
        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Progression globale</span>
            <span className="text-xs font-bold text-primary">{progress}%</span>
          </div>
          <div className="h-2 rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Step tabs - compact */}
        <div className="flex gap-1 p-1 rounded-lg bg-secondary border border-border">
          {steps.map((step, i) => (
            <button
              key={step.label}
              onClick={() => setActiveStep(i)}
              className={`flex-1 flex items-center justify-center gap-1.5 px-2 py-2 rounded-md text-xs font-medium transition-all ${
                i === activeStep
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>{step.label}</span>
              <span className={`w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center ${
                i === activeStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>{step.count}</span>
            </button>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button className="h-8 px-3 rounded-lg border border-border bg-card text-xs text-muted-foreground flex items-center gap-1.5 hover:border-primary/30">
              <Filter size={12} />
              Filtrer
              <ChevronDown size={12} />
            </button>
            <button className="h-8 px-3 rounded-lg border border-border bg-card text-xs text-muted-foreground flex items-center gap-1.5 hover:border-primary/30">
              Action en masse
              <ChevronDown size={12} />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Recherche..."
                className="h-8 pl-7 pr-3 w-44 rounded-lg border border-border bg-card text-xs outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
              />
            </div>
            <Button size="sm" variant="outline" className="gap-1 h-8 text-xs">
              <Download size={12} />
              CSV
            </Button>
            <Button size="sm" className="gap-1 h-8 text-xs">
              <FileText size={12} />
              PDF
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="w-10 px-3 py-2.5"><Checkbox /></th>
                {columns.map((col) => (
                  <th key={col} className="px-3 py-2.5 text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {activeStep === 0 ? (
                <tr className="border-b border-border hover:bg-secondary/30 transition-colors">
                  <td className="px-3 py-3"><Checkbox /></td>
                  <td className="px-3 py-3 text-xs font-mono text-muted-foreground">#1042</td>
                  <td className="px-3 py-3 text-xs text-muted-foreground">12/03/2026</td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[9px] font-bold text-primary">JD</div>
                      <span className="text-xs text-foreground">Jean Dupont</span>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-xs font-medium text-foreground">Réduction des coûts logistiques via IA</td>
                  <td className="px-3 py-3">
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">En attente</span>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-1">
                      <button className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 flex items-center justify-center transition-colors">
                        <CheckCircle2 size={14} />
                      </button>
                      <button className="w-7 h-7 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 flex items-center justify-center transition-colors">
                        <XCircle size={14} />
                      </button>
                      <button className="w-7 h-7 rounded-lg bg-secondary text-muted-foreground hover:bg-secondary/80 flex items-center justify-center transition-colors">
                        <MessageSquare size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                <tr>
                  <td colSpan={columns.length + 1} className="py-12 text-center">
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <Search size={15} />
                      </div>
                      <p className="text-xs">Aucun projet à traiter</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right side panel - contextual instructions */}
      <div className="w-64 border-l border-border bg-card p-4 space-y-4 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
            <ClipboardCheck size={14} className="text-instruction-icon" />
          </div>
          <span className="text-sm font-semibold text-foreground">Guide</span>
        </div>

        <div className="space-y-3">
          <div>
            <h3 className="text-xs font-semibold text-foreground mb-1">{instruction.title}</h3>
            <p className="text-[11px] text-muted-foreground leading-relaxed">{instruction.desc}</p>
          </div>

          <div className="space-y-2">
            {instruction.tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-instruction-bg border border-instruction-border">
                <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-[9px] font-bold text-primary">{i + 1}</span>
                <p className="text-[10px] text-muted-foreground leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-border">
          <div className="flex items-start gap-2 p-2 rounded-lg bg-secondary">
            <Info size={12} className="text-muted-foreground shrink-0 mt-0.5" />
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              Étape {activeStep + 1} sur 6
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusLayout;
