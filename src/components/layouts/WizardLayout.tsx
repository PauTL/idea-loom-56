import { useState } from "react";
import { ChevronLeft, ChevronRight, Search, CheckCircle2, XCircle, MessageSquare, Download, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const steps = [
  { label: "Approbation", emoji: "✅" },
  { label: "Attributs", emoji: "🏷️" },
  { label: "ROI", emoji: "📊" },
  { label: "Évaluation", emoji: "⭐" },
  { label: "Objectifs", emoji: "🎯" },
  { label: "À publier", emoji: "🚀" },
];

const stepBanners: Record<number, { title: string; subtitle: string; action: string }> = {
  0: {
    title: "Approuvez ou refusez les projets proposés",
    subtitle: "Examinez chaque projet ci-dessous et utilisez les boutons d'action pour statuer.",
    action: "Approuver la sélection",
  },
  1: {
    title: "Catégorisez les projets approuvés",
    subtitle: "Associez une ou plusieurs catégories à chaque projet pour faciliter le tri.",
    action: "Enregistrer les catégories",
  },
  2: {
    title: "Estimez le retour sur investissement",
    subtitle: "Renseignez les coûts estimés et bénéfices prévisionnels pour chaque projet.",
    action: "Valider les estimations",
  },
  3: {
    title: "Évaluez collectivement les projets",
    subtitle: "Attribuez une note à chaque projet selon les critères d'évaluation définis.",
    action: "Soumettre les évaluations",
  },
  4: {
    title: "Définissez les objectifs stratégiques",
    subtitle: "Associez des objectifs et indicateurs de suivi aux projets sélectionnés.",
    action: "Enregistrer les objectifs",
  },
  5: {
    title: "Publiez les projets finalisés",
    subtitle: "Les projets listés sont prêts à être rendus visibles par tous les collaborateurs.",
    action: "Publier les projets",
  },
};

const columns = ["ID", "Auteur", "Titre", "Actions rapides"];

const WizardLayout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const banner = stepBanners[activeStep];

  return (
    <div className="flex-1 p-6 space-y-5 overflow-auto">
      {/* Thin progress bar */}
      <div className="flex items-center gap-2">
        {steps.map((_, i) => (
          <div key={i} className="flex-1">
            <div className={`h-1.5 rounded-full transition-all duration-300 ${
              i < activeStep ? "bg-step-completed" : i === activeStep ? "bg-primary" : "bg-secondary"
            }`} />
          </div>
        ))}
      </div>

      {/* Navigation header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
        >
          <ChevronLeft size={16} />
          Précédent
        </button>
        <div className="flex items-center gap-2">
          <span className="text-lg">{steps[activeStep].emoji}</span>
          <span className="text-sm font-bold text-foreground">{steps[activeStep].label}</span>
          <span className="text-xs text-muted-foreground">— Étape {activeStep + 1}/6</span>
        </div>
        <button
          onClick={() => setActiveStep(Math.min(5, activeStep + 1))}
          disabled={activeStep === 5}
          className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
        >
          Suivant
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Prominent banner */}
      <div className="rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 p-5">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-base font-bold text-foreground">{banner.title}</h2>
            <p className="text-sm text-muted-foreground">{banner.subtitle}</p>
          </div>
          <Button size="sm" className="gap-1.5 shrink-0">
            {banner.action}
            <ArrowRight size={14} />
          </Button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative">
          <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Rechercher un projet..."
            className="h-9 pl-8 pr-4 w-56 rounded-lg border border-border bg-card text-sm outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" className="gap-1.5 h-8 text-xs">
            <Download size={12} />
            Export
          </Button>
          <Button size="sm" variant="outline" className="gap-1.5 h-8 text-xs">
            <FileText size={12} />
            PDF
          </Button>
        </div>
      </div>

      {/* Table with inline actions */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-secondary/50">
              <th className="w-10 px-4 py-3"><Checkbox /></th>
              {columns.map((col) => (
                <th key={col} className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {activeStep === 0 ? (
              <tr className="border-b border-border group hover:bg-secondary/20 transition-colors">
                <td className="px-4 py-4"><Checkbox /></td>
                <td className="px-4 py-4 text-xs font-mono text-muted-foreground">#1042</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">JD</div>
                    <div>
                      <p className="text-xs font-medium text-foreground">Jean Dupont</p>
                      <p className="text-[10px] text-muted-foreground">12 mars 2026</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <p className="text-sm font-medium text-foreground">Réduction des coûts logistiques via IA</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Utiliser l'intelligence artificielle pour optimiser les routes de livraison...</p>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" className="gap-1 h-8 text-xs bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800">
                      <CheckCircle2 size={13} />
                      Approuver
                    </Button>
                    <Button size="sm" variant="outline" className="gap-1 h-8 text-xs bg-red-50 border-red-200 text-red-600 hover:bg-red-100 hover:text-red-700">
                      <XCircle size={13} />
                      Refuser
                    </Button>
                    <Button size="sm" variant="ghost" className="gap-1 h-8 text-xs text-muted-foreground">
                      <MessageSquare size={13} />
                      Modifier
                    </Button>
                  </div>
                </td>
              </tr>
            ) : (
              <tr>
                <td colSpan={columns.length + 1} className="py-16 text-center">
                  <div className="flex flex-col items-center gap-3 text-muted-foreground">
                    <span className="text-3xl">{steps[activeStep].emoji}</span>
                    <p className="text-sm">Aucun projet dans cette étape</p>
                    <p className="text-xs text-muted-foreground/60">Les projets apparaîtront ici une fois transférés depuis l'étape précédente</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Bottom navigation */}
      <div className="flex items-center justify-between pt-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          className="gap-1.5"
        >
          <ChevronLeft size={14} />
          Étape précédente
        </Button>
        <div className="flex items-center gap-1.5">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === activeStep ? "bg-primary w-6" : "bg-secondary hover:bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
        <Button
          size="sm"
          onClick={() => setActiveStep(Math.min(5, activeStep + 1))}
          disabled={activeStep === 5}
          className="gap-1.5"
        >
          Étape suivante
          <ChevronRight size={14} />
        </Button>
      </div>
    </div>
  );
};

export default WizardLayout;
