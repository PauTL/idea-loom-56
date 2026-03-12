import { ClipboardCheck, ChevronDown } from "lucide-react";
import { useState } from "react";

interface StepInstruction {
  title: string;
  steps: { n: string; text: React.ReactNode }[];
}

const stepInstructions: Record<number, StepInstruction> = {
  0: {
    title: "Le projet proposé est-il recevable ?",
    steps: [
      { n: "1", text: <>Examinez le projet et décidez de <strong>l'accepter</strong> ou de <strong>le refuser</strong>.</> },
      { n: "2", text: <>Besoin de modifications ? Cliquez sur <strong>"Demander des changements"</strong>.</> },
      { n: "3", text: <>L'auteur sera notifié des changements à apporter.</> },
    ],
  },
  1: {
    title: "Attribuez une catégorie et une étiquette aux propositions",
    steps: [
      { n: "1", text: <>Sélectionnez ou modifiez la <strong>catégorie</strong> associée à chaque proposition.</> },
      { n: "2", text: <>Attribuez une <strong>étiquette</strong> pour qualifier ou prioriser la proposition.</> },
      { n: "3", text: <>Enregistrez vos modifications avant de passer à l'étape suivante.</> },
    ],
  },
  2: {
    title: "Indiquer le ROI",
    steps: [
      { n: "1", text: <>Estimez le <strong>retour sur investissement</strong> attendu pour chaque projet.</> },
      { n: "2", text: <>Renseignez les <strong>coûts estimés</strong> et les <strong>bénéfices prévisionnels</strong>.</> },
      { n: "3", text: <>Validez vos estimations pour passer à l'étape suivante.</> },
    ],
  },
  3: {
    title: "Évaluez collectivement les projets",
    steps: [
      { n: "1", text: <>Chaque membre du comité attribue une <strong>note</strong> basée sur les critères d'évaluation définis.</> },
      { n: "2", text: <>Vérifiez que <strong>chaque membre a bien enregistré sa note</strong> avant de valider.</> },
      { n: "3", text: <>À l'étape suivante, vous pourrez voir la <strong>moyenne des notes</strong> attribuées.</> },
    ],
  },
  4: {
    title: "Définissez les objectifs du projet",
    steps: [
      { n: "1", text: <>Associez des <strong>objectifs stratégiques</strong> à chaque projet sélectionné.</> },
      { n: "2", text: <>Vous pouvez définir des <strong>indicateurs de suivi</strong> pour mesurer l'atteinte des objectifs.</> },
      { n: "3", text: <>Enregistrez vos objectifs avant de passer à la publication.</> },
    ],
  },
  5: {
    title: "Publiez les projets validés",
    steps: [
      { n: "1", text: <>Les projets listés ici sont <strong>prêts à être publiés</strong> et visibles par tous.</> },
      { n: "2", text: <>Vous pouvez choisir de <strong>publier</strong> un projet ou de le <strong>renvoyer</strong> aux étapes précédentes.</> },
      { n: "3", text: <>Une fois publié, le projet sera soumis au <strong>soutien des collaborateurs</strong>.</> },
    ],
  },
};

interface Props {
  activeStep: number;
}

const InstructionCard = ({ activeStep }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const instruction = stepInstructions[activeStep] || stepInstructions[0];

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
          {instruction.title}
        </span>
        <ChevronDown
          size={16}
          className={`text-muted-foreground transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      {expanded && (
        <div className="px-4 pb-3 flex gap-6 pl-14">
          {instruction.steps.map((s) => (
            <div key={s.n} className="flex items-start gap-2">
              <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-[9px] font-bold text-primary">{s.n}</span>
              <p className="text-[13px] text-foreground/70 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstructionCard;
