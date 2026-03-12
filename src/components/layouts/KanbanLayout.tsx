import { useState } from "react";
import { ClipboardCheck, Tag, TrendingUp, Star, Target, Rocket, Info, Plus } from "lucide-react";

const steps = [
  { label: "Approbation", icon: ClipboardCheck, count: 1, color: "bg-primary" },
  { label: "Attributs", icon: Tag, count: 0, color: "bg-amber-500" },
  { label: "ROI", icon: TrendingUp, count: 0, color: "bg-emerald-500" },
  { label: "Évaluation", icon: Star, count: 0, color: "bg-violet-500" },
  { label: "Objectifs", icon: Target, count: 0, color: "bg-sky-500" },
  { label: "À publier", icon: Rocket, count: 0, color: "bg-teal-500" },
];

const stepHints: Record<number, string> = {
  0: "Glissez les projets vers Attributs une fois approuvés",
  1: "Associez des catégories puis déplacez vers ROI",
  2: "Estimez le retour sur investissement",
  3: "Chaque membre du comité attribue une note",
  4: "Définissez les objectifs stratégiques",
  5: "Publiez les projets validés",
};

const KanbanLayout = () => {
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);

  return (
    <div className="flex-1 p-4 overflow-auto">
      <div className="flex gap-3 h-full min-h-[500px]">
        {steps.map((step, i) => (
          <div
            key={step.label}
            className="flex-1 min-w-[180px] flex flex-col rounded-xl border border-border bg-card"
            onMouseEnter={() => setHoveredCol(i)}
            onMouseLeave={() => setHoveredCol(null)}
          >
            {/* Column header */}
            <div className="p-3 border-b border-border">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-md ${step.color} flex items-center justify-center`}>
                    <step.icon size={13} className="text-primary-foreground" />
                  </div>
                  <span className="text-xs font-semibold text-foreground">{step.label}</span>
                </div>
                <span className="text-[10px] font-bold text-muted-foreground bg-secondary rounded-full w-5 h-5 flex items-center justify-center">
                  {step.count}
                </span>
              </div>

              {/* Tooltip hint on hover */}
              {hoveredCol === i && (
                <div className="flex items-start gap-1.5 mt-2 p-2 rounded-lg bg-instruction-bg border border-instruction-border animate-in fade-in duration-200">
                  <Info size={12} className="text-instruction-icon shrink-0 mt-0.5" />
                  <p className="text-[10px] text-muted-foreground leading-relaxed">{stepHints[i]}</p>
                </div>
              )}
            </div>

            {/* Cards area */}
            <div className="flex-1 p-2 space-y-2">
              {i === 0 && (
                <div className="rounded-lg border border-border bg-background p-3 space-y-2 hover:border-primary/30 transition-colors cursor-grab">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-muted-foreground">#1042</span>
                    <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${step.color} text-primary-foreground`}>En attente</span>
                  </div>
                  <p className="text-xs font-medium text-foreground leading-snug">Réduction des coûts logistiques via IA</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-[9px] font-bold text-primary">JD</div>
                    <span className="text-[10px] text-muted-foreground">Jean Dupont</span>
                  </div>
                </div>
              )}

              {step.count === 0 && (
                <div className="flex flex-col items-center justify-center py-8 text-muted-foreground/50">
                  <div className="w-8 h-8 rounded-full border-2 border-dashed border-current flex items-center justify-center mb-2">
                    <Plus size={14} />
                  </div>
                  <p className="text-[10px]">Aucun projet</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanLayout;
