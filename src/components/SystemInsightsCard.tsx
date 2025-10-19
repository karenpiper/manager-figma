import { Sparkles, TrendingDown, AlertTriangle, CheckCircle, Zap, Target } from "lucide-react";

export function SystemInsightsCard() {
  const insights = [
    {
      type: "success",
      icon: "🌟",
      title: "Ready for stretch",
      text: "Collaboration exceeds L3 — consider L4 mentorship",
      color: "from-green-100 to-emerald-50",
      iconColor: "text-green-600",
    },
    {
      type: "warning",
      icon: "⚠️",
      title: "Goal at risk",
      text: "Design docs 40% with 11 days left",
      color: "from-amber-100 to-yellow-50",
      iconColor: "text-amber-600",
    },
    {
      type: "info",
      icon: "📊",
      title: "Mood dip detected",
      text: "W40-41 during client launch",
      color: "from-blue-100 to-cyan-50",
      iconColor: "text-blue-600",
    },
    {
      type: "action",
      icon: "🎯",
      title: "Promo path clear",
      text: "L4 ready if Client Lead hits 4+",
      color: "from-purple-100 to-violet-50",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] text-white rounded-3xl p-5 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#f4d764]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#f4d764]/5 rounded-full blur-2xl" />

      <div className="relative">
        <div className="flex items-center gap-2 mb-5">
          <Sparkles className="w-4 h-4 text-[#f4d764]" />
          <h3 className="text-[13px]">AI Insights</h3>
          <div className="ml-auto px-2 py-0.5 rounded-full bg-[#f4d764]/20 text-[9px] text-[#f4d764]">
            Updated 2h ago
          </div>
        </div>

        <div className="space-y-3">
          {insights.map((insight, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-2xl bg-gradient-to-br ${insight.color} border border-white/10`}
            >
              <div className="flex items-start gap-3">
                <div className="text-[28px] flex-shrink-0">
                  {insight.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[12px] text-black mb-1">{insight.title}</h4>
                  <p className="text-[11px] text-black/70 leading-relaxed">{insight.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Badge */}
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] text-white/60">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Live analysis active</span>
          </div>
          <button className="text-[10px] text-[#f4d764] hover:text-[#f4d764]/80 transition-colors">
            View all →
          </button>
        </div>
      </div>
    </div>
  );
}