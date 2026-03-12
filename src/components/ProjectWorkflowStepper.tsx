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
    <div className="w-full px-8 py-4 relative">
      {/* Connector line behind dots */}
      <div className="absolute left-8 right-8 top-[calc(1rem+14px)]" style={{ zIndex: 0 }}>
        <div className="flex">
          {steps.slice(0, -1).map((_, i) => (
            <div key={i} className="flex-1">
              <div className={`h-0.5 rounded-full ${i < currentStep ? "bg-step-active" : "bg-step-pending"}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="flex justify-between relative" style={{ zIndex: 1 }}>
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-col items-center gap-1.5">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                i < currentStep
                  ? "bg-step-active text-primary-foreground"
                  : i === currentStep
                  ? "bg-step-active text-primary-foreground shadow-lg shadow-primary/25 scale-110"
                  : "bg-muted text-muted-foreground"
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
