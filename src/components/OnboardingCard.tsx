import { ArrowUpRight } from "lucide-react";

export function OnboardingCard() {
  const segments = [
    { percentage: 30, color: "#f4d764", label: "30%" },
    { percentage: 25, color: "#2d2d2d", label: "25%" },
    { percentage: 45, color: "#d1d5db", label: "0%" },
  ];

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-black/5">
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-[15px]">Onboarding</h3>
        <span className="text-[32px] leading-none">18%</span>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex gap-1 mb-2">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="h-8 rounded-lg"
              style={{
                width: `${segment.percentage}%`,
                backgroundColor: segment.color,
              }}
            />
          ))}
        </div>
        <div className="flex justify-between text-[11px] text-black/50 px-1">
          {segments.map((segment, index) => (
            <span key={index} style={{ width: `${segment.percentage}%` }}>
              {segment.label}
            </span>
          ))}
        </div>
      </div>

      {/* Task Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f4d764] rounded-full text-[12px]">
        Task
      </div>
    </div>
  );
}
