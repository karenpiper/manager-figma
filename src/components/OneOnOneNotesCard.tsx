import { Calendar, CheckCircle, Circle, Plus } from "lucide-react";

export function OneOnOneNotesCard() {
  const meetings = [
    {
      date: "Oct 12",
      emoji: "🎯",
      topic: "Promotion planning",
      actionsDone: 0,
      actionsTotal: 2,
      color: "#8b5cf6",
      recent: true,
    },
    {
      date: "Sep 28",
      emoji: "⚖️",
      topic: "Workload balance",
      actionsDone: 2,
      actionsTotal: 2,
      color: "#10b981",
    },
    {
      date: "Sep 14",
      emoji: "📊",
      topic: "Q4 goals planning",
      actionsDone: 2,
      actionsTotal: 2,
      color: "#3b82f6",
    },
    {
      date: "Aug 31",
      emoji: "🎨",
      topic: "Design system review",
      actionsDone: 3,
      actionsTotal: 3,
      color: "#f59e0b",
    },
  ];

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-black/5">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-[15px] mb-1">1:1 Timeline</h3>
          <p className="text-[12px] text-black/50">Meeting history & actions</p>
        </div>
        <button className="px-3 py-1.5 rounded-full bg-[#2d2d2d] text-white text-[11px] hover:bg-[#3d3d3d] transition-colors flex items-center gap-1">
          <Plus className="w-3 h-3" />
          Log
        </button>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[30px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#2d2d2d] via-black/10 to-transparent" />

        <div className="space-y-3">
          {meetings.map((meeting, index) => (
            <div key={index} className="relative flex items-start gap-4">
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0">
                <div 
                  className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-[28px] shadow-md border-4 border-white"
                  style={{ backgroundColor: meeting.color }}
                >
                  {meeting.emoji}
                </div>
                {meeting.recent && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#f4d764] rounded-full flex items-center justify-center border-2 border-white">
                    <span className="text-[10px]">✨</span>
                  </div>
                )}
              </div>

              {/* Content card */}
              <div className="flex-1 p-4 rounded-2xl bg-white/80 border border-black/5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-3 h-3 text-black/40" />
                      <span className="text-[11px] text-black/50">{meeting.date}</span>
                    </div>
                    <h4 className="text-[13px]">{meeting.topic}</h4>
                  </div>
                </div>

                {/* Action completion */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {Array.from({ length: meeting.actionsTotal }).map((_, i) => (
                      i < meeting.actionsDone ? (
                        <CheckCircle key={i} className="w-3.5 h-3.5 text-green-600" />
                      ) : (
                        <Circle key={i} className="w-3.5 h-3.5 text-black/20" />
                      )
                    ))}
                  </div>
                  <span className="text-[10px] text-black/50">
                    {meeting.actionsDone}/{meeting.actionsTotal} actions
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}