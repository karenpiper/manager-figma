import { Settings, Bell, User } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const navItems = [
    { name: "Dashboard", active: true },
    { name: "Team", active: false },
    { name: "Reviews", active: false },
    { name: "Goals", active: false },
    { name: "1:1s", active: false },
    { name: "Feedback", active: false },
    { name: "Reports", active: false },
    { name: "Settings", active: false },
  ];

  return (
    <header className="border-b border-black/5 bg-white/20 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="px-5 py-2 border border-black/20 rounded-full">
            <span className="text-[15px]">PeopleOS</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`px-4 py-2 rounded-full text-[13px] transition-colors ${
                item.active
                  ? "bg-[#2d2d2d] text-white"
                  : "text-black/70 hover:text-black"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Settings className="w-4 h-4" />
          </button>
          <span className="text-[13px]">Manager View</span>
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Bell className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <User className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}