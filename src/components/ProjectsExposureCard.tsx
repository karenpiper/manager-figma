import { Briefcase, Eye, TrendingUp, Sparkles } from "lucide-react";

export function ProjectsExposureCard() {
  const projects = [
    {
      name: "Mobile App Redesign",
      emoji: "📱",
      visibility: "High",
      duration: "4 mo",
      skills: ["Strategic", "Execution"],
      color: "#8b5cf6",
      gradient: "from-purple-100 to-purple-50",
    },
    {
      name: "Client Portal UX",
      emoji: "🏢",
      visibility: "External",
      duration: "2 mo",
      skills: ["Leadership", "Collab"],
      color: "#3b82f6",
      gradient: "from-blue-100 to-blue-50",
    },
  ];

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-5 border border-black/5">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-[13px] mb-1">Active Projects</h3>
          <p className="text-[11px] text-black/50">Current assignments</p>
        </div>
        <Briefcase className="w-4 h-4 text-black/40" />
      </div>

      <div className="space-y-3 mb-4">
        {projects.map((project, index) => (
          <div key={index} className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} border border-black/5`}>
            <div className="flex items-start gap-3 mb-3">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-[24px] shadow-sm bg-white"
              >
                {project.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[12px] mb-1">{project.name}</h4>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] bg-white/60">
                    <Eye className="w-2.5 h-2.5" />
                    {project.visibility}
                  </span>
                  <span className="text-[10px] text-black/50">{project.duration}</span>
                </div>
              </div>
            </div>

            {/* Skills tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="px-2 py-1 rounded-lg text-[9px] bg-white/70 text-black/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-2">
        <div className="p-3 rounded-xl bg-green-50 text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <TrendingUp className="w-3 h-3 text-green-600" />
            <span className="text-[16px] text-green-700">75%</span>
          </div>
          <span className="text-[9px] text-green-600">Visibility Score</span>
        </div>
        <div className="p-3 rounded-xl bg-blue-50 text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Sparkles className="w-3 h-3 text-blue-600" />
            <span className="text-[16px] text-blue-700">3/4</span>
          </div>
          <span className="text-[9px] text-blue-600">Skill Match</span>
        </div>
      </div>
    </div>
  );
}