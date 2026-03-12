import { Home, Lightbulb, Trophy, BookOpen, Compass, Users, Building2, HelpCircle } from "lucide-react";

const navItems = [
  { icon: Home, label: "ACCUEIL" },
  { icon: Lightbulb, label: "VOS SOLUTIONS", active: true },
  { icon: Trophy, label: "CHALLENGES" },
  { icon: BookOpen, label: "MOOC" },
  { icon: Compass, label: "INSPIRATIONS" },
  { icon: Users, label: "MEMBRES" },
  { icon: Building2, label: "COMMUNAUTÉS MÉTIERS" },
];

const Sidebar = () => {
  return (
    <aside className="w-56 min-h-screen bg-sidebar text-sidebar-foreground flex flex-col shrink-0">
      <div className="p-6 flex items-center justify-center">
        <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-xs leading-tight text-center">mon<br/>logo</span>
        </div>
      </div>
      
      <nav className="flex-1 px-3 space-y-0.5">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
              item.active
                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }`}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <button className="text-[10px] text-sidebar-muted hover:text-sidebar-foreground transition-colors uppercase tracking-wider">
          Changer de compte utilisateur
        </button>
      </div>

      <div className="p-4">
        <button className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:opacity-90 transition-opacity">
          <HelpCircle size={18} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
