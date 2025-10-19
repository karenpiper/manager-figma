import { ArrowUpRight } from "lucide-react";

export function ProgressCard() {
  const days = [
    { label: "S", height: 20, value: "2h" },
    { label: "M", height: 60, value: "4h" },
    { label: "T", height: 45, value: "3h" },
    { label: "W", height: 75, value: "5h" },
    { label: "T", height: 55, value: "3.5h" },
    { label: "F", height: 95, value: "5h 25m", highlight: true },
    { label: "S", height: 30, value: "2.5h" },
  ];

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-black/5 relative">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-[15px] mb-2">Progress</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-[36px] leading-none">6.1</span>
            <span className="text-[24px] leading-none">h</span>
          </div>
          <div className="mt-1">
            <p className="text-[11px] text-black/50">Work Time</p>
            <p className="text-[11px] text-black/50">this week</p>
          </div>
        </div>
        <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Bar Chart */}
      <div className="relative h-32 flex items-end justify-between gap-4 px-2">
        {days.map((day, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-2">
            <div className="relative w-full flex items-end justify-center" style={{ height: '100px' }}>
              {day.highlight && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#f4d764] px-2 py-1 rounded-full text-[10px] whitespace-nowrap z-10">
                  {day.value}
                </div>
              )}
              <div 
                className={`w-full rounded-full transition-all ${
                  day.highlight ? 'bg-[#f4d764]' : 'bg-black/20'
                }`}
                style={{ height: `${day.height}%` }}
              />
            </div>
            <span className="text-[11px] text-black/40 mt-1">{day.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
