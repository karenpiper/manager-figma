import { Target, CheckCircle2, MessageSquare, Briefcase } from "lucide-react";

export function QuickStatsCard() {
  const stats = [
    { icon: "🎯", label: "Active Goals", value: "4", color: "from-blue-100 to-blue-50", textColor: "text-blue-700" },
    { icon: "✅", label: "Completed", value: "12", color: "from-green-100 to-green-50", textColor: "text-green-700" },
    { icon: "💬", label: "1:1s This Q", value: "6", color: "from-purple-100 to-purple-50", textColor: "text-purple-700" },
    { icon: "💼", label: "Active Projects", value: "2", color: "from-orange-100 to-orange-50", textColor: "text-orange-700" },
  ];

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-black/5">
      <h3 className="text-[13px] mb-4 text-black/60">Quick Stats</h3>
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} text-center`}
          >
            <div className="text-[32px] mb-1">{stat.icon}</div>
            <div className={`text-[24px] leading-none mb-1 ${stat.textColor}`}>
              {stat.value}
            </div>
            <div className="text-[10px] text-black/60">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}