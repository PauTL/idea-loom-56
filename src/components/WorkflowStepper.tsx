interface Step {
  label: string;
  count: number;
  active?: boolean;
}

const steps: Step[] = [
  { label: "Approbation", count: 1, active: true },
  { label: "Attributs", count: 0 },
  { label: "ROI", count: 0 },
  { label: "Évaluation", count: 0 },
  { label: "À publier", count: 0 },
];

const WorkflowStepper = () => {
  return (
    <div className="flex items-center w-full">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center flex-1 last:flex-initial">
          <button
            className={`flex flex-col items-center gap-1.5 group relative ${
              step.active ? "cursor-default" : "cursor-pointer"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                step.active
                  ? "bg-step-active text-primary-foreground shadow-lg shadow-primary/25 scale-110"
                  : "bg-step-pending/30 text-muted-foreground group-hover:bg-step-pending/50"
              }`}
            >
              {step.count}
            </div>
            <span
              className={`text-xs font-medium whitespace-nowrap transition-colors ${
                step.active ? "text-primary font-semibold" : "text-muted-foreground group-hover:text-foreground"
              }`}
            >
              {step.label}
            </span>
          </button>
          {i < steps.length - 1 && (
            <div className="flex-1 mx-3 mt-[-18px]">
              <div className={`h-0.5 rounded-full ${i === 0 ? "bg-step-active/40" : "bg-step-pending/30"}`} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkflowStepper;
