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
      <div className="flex items-center w-full">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center flex-1 last:flex-initial">
            <div className="flex flex-col items-center gap-1.5 relative">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  i < currentStep
                    ? "bg-step-active text-primary-foreground"
                    : i === currentStep
                    ? "bg-step-active text-primary-foreground shadow-lg shadow-primary/25 scale-110"
                    : "bg-step-pending/40 text-muted-foreground"
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
            {i < steps.length - 1 && (
              <div className="flex-1 mx-2 mt-[-18px]">
                <div className={`h-0.5 rounded-full ${i < currentStep ? "bg-step-active" : "bg-step-pending/30"}`} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectWorkflowStepper;
