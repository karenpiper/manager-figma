import { Target, AlertCircle, CheckCircle, Clock, TrendingUp } from "lucide-react";

export function GoalsProgressCard() {
  const goals = [
    {
      title: "Ship redesigned onboarding",
      icon: "🚀",
      status: "on-track",
      confidence: 4,
      dueDate: "Nov 15",
      progress: 65,
      color: "#10b981",
    },
    {
      title: "Mentor junior designers",
      icon: "👨‍🏫",
      status: "on-track",
      confidence: 5,
      dueDate: "Dec 31",
      progress: 80,
      color: "#6366f1",
    },
    {
      title: "Design system docs",
      icon: "📚",
      status: "at-risk",
      confidence: 2,
      dueDate: "Oct 30",
      progress: 40,
      color: "#ef4444",
      stale: true,
    },
    {
      title: "Design summit workshop",
      icon: "🎤",
      status: "on-track",
      confidence: 4,
      dueDate: "Nov 8",
      progress: 90,
      color: "#8b5cf6",
    },
  ];

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-black/5">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-[15px] mb-1">Goals & Progress</h3>
          <p className="text-[12px] text-black/50">Q4 2024 objectives</p>
        </div>
        <div className="text-right">
          <div className="text-[24px] leading-none mb-0.5">75%</div>
          <div className="text-[10px] text-black/50">Avg Progress</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {goals.map((goal, index) => (
          <div key={index} className="relative p-5 rounded-2xl bg-white/80 border border-black/5 hover:shadow-lg transition-shadow">
            {/* Circular Progress */}
            <div className="relative w-20 h-20 mx-auto mb-4">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                {/* Background circle */}
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="6"
                />
                {/* Progress arc */}
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  fill="none"
                  stroke={goal.color}
                  strokeWidth="6"
                  strokeDasharray={`${2 * Math.PI * 34}`}
                  strokeDashoffset={`${2 * Math.PI * 34 * (1 - goal.progress / 100)}`}
                  strokeLinecap="round"
                />
              </svg>
              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[28px] mb-1">{goal.icon}</span>
              </div>
              {/* Progress percentage badge */}
              <div 
                className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-[11px] text-white shadow-lg"
                style={{ backgroundColor: goal.color }}
              >
                {goal.progress}%
              </div>
            </div>

            {/* Goal info */}
            <div className="text-center">
              <h4 className="text-[12px] mb-2 line-clamp-2 min-h-[2.5rem]">{goal.title}</h4>
              
              {/* Stats row */}
              <div className="flex items-center justify-center gap-3 text-[10px] text-black/50 mb-2">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{goal.dueDate}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Target className="w-3 h-3" />
                  <span>{goal.confidence}/5</span>
                </div>
              </div>

              {/* Status badge */}
              <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[9px] ${
                goal.status === "at-risk" 
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}>
                {goal.stale && <AlertCircle className="w-2.5 h-2.5" />}
                {goal.status === "at-risk" ? "At Risk" : "On Track"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}