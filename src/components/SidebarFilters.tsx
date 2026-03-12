interface FilterItem {
  label: string;
  count: number;
  active?: boolean;
}

const filters: FilterItem[] = [
  { label: "PROJETS À TRAITER", count: 1, active: true },
  { label: "PROJETS PUBLIÉS", count: 6 },
  { label: "PROJETS REFUSÉS", count: 0 },
  { label: "PROJETS ARCHIVÉS", count: 4 },
];

const SidebarFilters = () => {
  return (
    <div className="w-56 shrink-0 space-y-1">
      {filters.map((item) => (
        <button
          key={item.label}
          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
            item.active
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
          }`}
        >
          <span>{item.label}</span>
          <span
            className={`w-6 h-6 rounded-full text-[11px] font-bold flex items-center justify-center ${
              item.active
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground"
            }`}
          >
            {item.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default SidebarFilters;
