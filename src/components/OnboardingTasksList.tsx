import { Check, Zap, Circle, Edit3, Link2 } from "lucide-react";

export function OnboardingTasksList() {
  const tasks = [
    {
      id: 1,
      title: "Interview",
      date: "Sep 15, 08:30",
      completed: true,
      icon: Circle,
    },
    {
      id: 2,
      title: "Team Meeting",
      date: "Sep 14, 12:00",
      completed: true,
      icon: Zap,
    },
    {
      id: 3,
      title: "Project Update",
      date: "Sep 15, 15:00",
      completed: false,
      icon: Circle,
    },
    {
      id: 4,
      title: "Discuss Q3 Goals",
      date: "Sep 14, 16:45",
      completed: false,
      icon: Edit3,
    },
    {
      id: 5,
      title: "HR Policy Review",
      date: "Sep 13, 16:30",
      completed: false,
      icon: Link2,
    },
  ];

  return (
    <div className="bg-[#2d2d2d] text-white rounded-3xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[15px]">Onboarding Task</h3>
        <span className="text-[20px]">2/8</span>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
          >
            <div className="flex-shrink-0">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                task.completed ? "bg-transparent border-2 border-white/20" : "bg-white/10"
              }`}>
                {task.completed ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <task.icon className="w-3.5 h-3.5 text-white/60" />
                )}
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <p className={`text-[13px] ${task.completed ? "text-white/60" : "text-white"}`}>
                {task.title}
              </p>
              <p className="text-[11px] text-white/40">{task.date}</p>
            </div>

            {task.completed && (
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-[#f4d764] flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-black" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
