import { Search, Download, FileText, Filter, CalendarDays, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const stepColumns: Record<number, string[]> = {
  0: ["ID", "Création", "Auteur", "Titre", "Statut", "Actions"],
  1: ["ID", "Création", "Auteur", "Titre", "Catégorie", "Étape", "Actions"],
  2: ["ID", "Auteur", "Création", "Titre", "ROI", "Actions"],
  3: ["ID", "Création", "Auteur", "Titre", "Statut", "Évalué par", "Actions"],
  4: ["ID", "Création", "Auteur", "Titre", "Objectifs", "Actions"],
  5: ["ID", "Création", "Auteur", "Titre", "Statut", "Actions"],
};

const stepFilters: Record<number, string[]> = {
  0: ["Catégories"],
  1: ["Catégories"],
  2: ["Catégories"],
  3: ["Statut d'évaluation", "Catégories"],
  4: ["Catégories"],
  5: ["Catégories"],
};

interface Props {
  activeStep: number;
}

const ModerationTable = ({ activeStep }: Props) => {
  const columns = stepColumns[activeStep] || stepColumns[0];
  const filters = stepFilters[activeStep] || stepFilters[0];

  return (
    <div className="space-y-4">
      {/* Filters row */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter size={14} />
            <span>Filtrer par</span>
          </div>
          {filters.map((f) => (
            <button key={f} className="h-9 px-3 rounded-lg border border-border bg-card text-sm text-muted-foreground flex items-center gap-2 hover:border-primary/30 transition-colors">
              {f}
              <ChevronDown size={14} />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button className="h-9 px-3 rounded-lg border border-border bg-card text-sm text-muted-foreground flex items-center gap-2 hover:border-primary/30 transition-colors">
            <CalendarDays size={14} />
            06-03-2026 - 12-03-2026
            <ChevronDown size={14} />
          </button>
          <Button size="sm" variant="outline" className="gap-1.5">
            <Download size={14} />
            Export CSV
          </Button>
          <Button size="sm" className="gap-1.5">
            <FileText size={14} />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Action bar */}
      <div className="flex items-center justify-between gap-4">
        <button className="h-9 px-3 rounded-lg border border-border bg-card text-sm text-muted-foreground flex items-center gap-2 hover:border-primary/30 transition-colors">
          Action en masse
          <ChevronDown size={14} />
        </button>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Recherche"
              className="h-9 pl-8 pr-4 w-52 rounded-lg border border-border bg-card text-sm outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
            />
          </div>
          <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1.5 rounded-lg">
            0 Résultat(s)
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-secondary/50">
              <th className="w-12 px-4 py-3">
                <Checkbox />
              </th>
              {columns.map((col) => (
                <th key={col} className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={columns.length + 1} className="py-16 text-center">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Search size={18} />
                  </div>
                  <p className="text-sm">Aucun projet à afficher pour cette étape</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModerationTable;
