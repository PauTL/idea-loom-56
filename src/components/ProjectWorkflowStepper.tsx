import { Check } from "lucide-react";

interface Step {
  label: string;
}

const steps: Step[] = [
  { label: "Brouillon" },
  { label: "Approbation" },
  { label: "Modération des attributs" },
  { label: "ROI" },
  { label: "Objectifs de soutien" },
  { label: "Évaluation" },
  { label: "À publier" },
];

interface Props {
  currentStep: number;
}

const ProjectWorkflowStepper = ({ currentStep }: Props) => {
  return (
    <div className="w-full px-8 py-4">
      <div
        className="grid w-full"
        style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
      >
        {steps.map((step, i) => (
          <div key={step.label} className="relative flex flex-col items-center gap-1.5">
            {i < steps.length - 1 && (
              <div className="absolute left-1/2 top-[14px] w-full px-3" style={{ zIndex: 0 }}>
                <div className={`h-0.5 rounded-full ${i < currentStep ? "bg-step-active/40" : "bg-step-pending/30"}`} />
              </div>
            )}

            <div
              className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                i < currentStep
                  ? "bg-step-active text-primary-foreground"
                  : i === currentStep
                  ? "bg-step-active text-primary-foreground shadow-lg shadow-primary/25 scale-110"
                  : "bg-step-pending/30 text-muted-foreground"
              }`}
            >
              {i < currentStep ? <Check size={14} strokeWidth={3} /> : null}
            </div>

            <span
              className={`text-[10px] font-medium whitespace-nowrap transition-colors ${
                i <= currentStep ? "text-foreground font-semibold" : "text-muted-foreground"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectWorkflowStepper;
