import { TrendingUp, Smile, Briefcase } from "lucide-react";

export function PulseMoraleCard() {
  const weeks = [
    { week: "W38", mood: 4, workload: 3, emoji: "😊" },
    { week: "W39", mood: 4, workload: 4, emoji: "😊" },
    { week: "W40", mood: 3, workload: 4, emoji: "😐" },
    { week: "W41", mood: 3, workload: 3, emoji: "😐" },
    { week: "W42", mood: 4, workload: 3, emoji: "😊" },
  ];

  const maxValue = 5;
  const avgMood = weeks.reduce((sum, w) => sum + w.mood, 0) / weeks.length;

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-black/5">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-[13px] mb-1">Pulse & Morale</h3>
          <p className="text-[11px] text-black/50">Last 5 weeks</p>
        </div>
        <div className="text-right">
          <div className="text-[24px] leading-none mb-0.5">
            {avgMood >= 4 ? "😊" : avgMood >= 3 ? "🙂" : "😐"}
          </div>
          <div className="text-[10px] text-black/50">{avgMood.toFixed(1)}/5</div>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-40 mb-3 bg-gradient-to-t from-black/5 to-transparent rounded-2xl p-3">
        <div className="absolute inset-3 flex items-end justify-between gap-2">
          {weeks.map((week, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              {/* Emoji indicator */}
              <div className="text-[16px] mb-1">
                {week.emoji}
              </div>
              
              {/* Stacked bars */}
              <div className="relative w-full h-full flex flex-col justify-end gap-1">
                {/* Mood bar */}
                <div 
                  className="w-full bg-gradient-to-t from-[#f4d764] to-[#f4e794] rounded-t-lg transition-all relative group"
                  style={{ height: `${(week.mood / maxValue) * 100}%` }}
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-[9px] px-2 py-1 rounded whitespace-nowrap">
                    Mood: {week.mood}
                  </div>
                </div>
                
                {/* Workload bar */}
                <div 
                  className="w-full bg-gradient-to-t from-black/20 to-black/10 rounded-t-lg transition-all relative group"
                  style={{ height: `${(week.workload / maxValue) * 100}%` }}
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-[9px] px-2 py-1 rounded whitespace-nowrap">
                    Load: {week.workload}
                  </div>
                </div>
              </div>
              
              {/* Week label */}
              <span className="text-[9px] text-black/40 mt-1">{week.week}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-4 text-[10px]">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-gradient-to-br from-[#f4d764] to-[#f4e794]" />
          <span className="text-black/60">Mood</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-gradient-to-br from-black/20 to-black/10" />
          <span className="text-black/60">Workload</span>
        </div>
      </div>
    </div>
  );
}