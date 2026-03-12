import { LayoutGrid, Focus, Wand2 } from "lucide-react";

export type LayoutVersion = "kanban" | "focus" | "wizard";

interface Props {
  version: LayoutVersion;
  onChange: (v: LayoutVersion) => void;
}

const versions: { id: LayoutVersion; label: string; icon: typeof LayoutGrid }[] = [
  { id: "kanban", label: "Kanban", icon: LayoutGrid },
  { id: "focus", label: "Focus", icon: Focus },
  { id: "wizard", label: "Wizard", icon: Wand2 },
];

const VersionSwitcher = ({ version, onChange }: Props) => (
  <div className="flex items-center gap-1 p-1 rounded-lg bg-secondary border border-border">
    {versions.map((v) => (
      <button
        key={v.id}
        onClick={() => onChange(v.id)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
          version === v.id
            ? "bg-card text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <v.icon size={13} />
        {v.label}
      </button>
    ))}
  </div>
);

export default VersionSwitcher;
