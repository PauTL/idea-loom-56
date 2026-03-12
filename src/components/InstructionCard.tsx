import { ClipboardCheck, ChevronDown } from "lucide-react";
import { useState } from "react";

const InstructionCard = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-lg border border-instruction-border bg-instruction-bg">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left"
      >
        <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <ClipboardCheck size={15} className="text-instruction-icon" />
        </div>
        <span className="text-sm font-semibold text-foreground flex-1">
          Le projet proposé est-il recevable ?
        </span>
        <ChevronDown
          size={16}
          className={`text-muted-foreground transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      {expanded && (
        <div className="px-4 pb-3 flex gap-6 pl-14">
          {[
            { n: "1", text: <>Examinez le projet et décidez de <strong className="text-foreground font-medium">l'accepter</strong> ou de <strong className="text-foreground font-medium">le refuser</strong>.</> },
            { n: "2", text: <>Besoin de modifications ? Cliquez sur <strong className="text-foreground font-medium">"Demander des changements"</strong>.</> },
            { n: "3", text: <>L'auteur sera notifié des changements à apporter.</> },
          ].map((s) => (
            <div key={s.n} className="flex items-start gap-2">
              <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-[9px] font-bold text-primary">{s.n}</span>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstructionCard;
