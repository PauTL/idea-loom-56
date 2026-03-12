import { ClipboardCheck, ArrowRight, MessageSquarePlus } from "lucide-react";

const InstructionCard = () => {
  return (
    <div className="rounded-xl border border-instruction-border bg-instruction-bg overflow-hidden">
      {/* Header with icon and title */}
      <div className="flex items-center gap-3 px-5 pt-5 pb-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <ClipboardCheck size={20} className="text-instruction-icon" />
        </div>
        <h3 className="text-base font-semibold text-foreground">
          Le projet proposé est-il recevable ?
        </h3>
      </div>

      {/* Steps */}
      <div className="px-5 pb-5 space-y-2.5">
        <div className="flex items-start gap-3 pl-1">
          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-[10px] font-bold text-primary">1</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Examinez le projet et décidez de <strong className="text-foreground font-medium">l'accepter</strong> ou de <strong className="text-foreground font-medium">le refuser</strong>.
          </p>
        </div>

        <div className="flex items-start gap-3 pl-1">
          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-[10px] font-bold text-primary">2</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Vous pensez que le projet doit être modifié par son auteur ? Rédigez un commentaire, puis cliquez sur <strong className="text-foreground font-medium">"Demander des changements"</strong>.
          </p>
        </div>

        <div className="flex items-start gap-3 pl-1">
          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-[10px] font-bold text-primary">3</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Le porteur du projet sera alors notifié des changements qu'il doit apporter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstructionCard;
