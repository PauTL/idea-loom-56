import { Search, Moon, MessageCircle, Bookmark, Bell, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TopBar = () => {
  return (
    <header className="h-14 border-b border-border bg-card flex items-center px-6 gap-4 shrink-0">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Rechercher un contenu"
            className="w-full h-9 pl-9 pr-4 rounded-lg bg-secondary text-sm text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        {[Moon, MessageCircle, Bookmark].map((Icon, i) => (
          <button key={i} className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary transition-colors">
            <Icon size={18} />
          </button>
        ))}
        <button className="relative w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary transition-colors">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-badge-count text-[10px] font-bold text-primary-foreground flex items-center justify-center">2</span>
        </button>
      </div>

      <div className="h-6 w-px bg-border mx-1" />

      <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <Avatar className="w-8 h-8">
          <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">JD</AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium text-foreground">Julie Dupont</span>
        <ChevronDown size={14} className="text-muted-foreground" />
      </button>
    </header>
  );
};

export default TopBar;
