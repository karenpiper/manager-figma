import { Play, Pause, RotateCcw, ArrowUpRight } from "lucide-react";

export function TimeTrackerCard() {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-black/5 relative">
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-[15px]">Time tracker</h3>
        <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Circular Progress */}
      <div className="relative w-40 h-40 mx-auto mb-6">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
          {/* Background circle */}
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
          {/* Progress arc */}
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#f4d764"
            strokeWidth="8"
            strokeDasharray={`${2 * Math.PI * 70}`}
            strokeDashoffset={`${2 * Math.PI * 70 * 0.4}`}
            strokeLinecap="round"
          />
          {/* Tick marks */}
          {Array.from({ length: 60 }).map((_, i) => {
            const angle = (i * 6 * Math.PI) / 180;
            const isMainTick = i % 5 === 0;
            const innerRadius = isMainTick ? 60 : 65;
            const outerRadius = 68;
            const x1 = 80 + innerRadius * Math.cos(angle);
            const y1 = 80 + innerRadius * Math.sin(angle);
            const x2 = 80 + outerRadius * Math.cos(angle);
            const y2 = 80 + outerRadius * Math.sin(angle);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#d1d5db"
                strokeWidth={isMainTick ? "1.5" : "1"}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[28px] leading-none">02:35</span>
          <span className="text-[11px] text-black/50 mt-1">Work Time</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3">
        <button className="p-3 hover:bg-black/5 rounded-full transition-colors">
          <Play className="w-4 h-4" fill="currentColor" />
        </button>
        <button className="p-3 hover:bg-black/5 rounded-full transition-colors">
          <Pause className="w-4 h-4" />
        </button>
        <button className="p-3 bg-[#2d2d2d] text-white rounded-full hover:bg-[#3d3d3d] transition-colors">
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
