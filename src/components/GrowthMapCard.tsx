import { ArrowUpRight, AlertCircle, CheckCircle, TrendingUp, Zap } from "lucide-react";

export function GrowthMapCard() {
  const skills = [
    {
      name: "Strategic Thinking",
      current: 4,
      target: 4,
      status: "on-track",
      color: "#6366f1",
      icon: "🎯",
    },
    {
      name: "Client Leadership",
      current: 3,
      target: 4,
      status: "below",
      color: "#f59e0b",
      icon: "👥",
    },
    {
      name: "Collaboration",
      current: 5,
      target: 4,
      status: "exceeds",
      color: "#10b981",
      icon: "🤝",
    },
    {
      name: "Execution",
      current: 4,
      target: 4,
      status: "on-track",
      color: "#8b5cf6",
      icon: "⚡",
    },
  ];

  // Calculate radar chart points
  const centerX = 120;
  const centerY = 120;
  const maxRadius = 100;
  const angleStep = (Math.PI * 2) / skills.length;

  const getPoint = (value: number, index: number) => {
    const angle = index * angleStep - Math.PI / 2;
    const radius = (value / 5) * maxRadius;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  };

  const currentPoints = skills.map((skill, i) => getPoint(skill.current, i));
  const targetPoints = skills.map((skill, i) => getPoint(skill.target, i));

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-black/5">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-[15px] mb-1">Growth Map</h3>
          <p className="text-[12px] text-black/50">Skills radar • Level 3</p>
        </div>
        <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center gap-8">
        {/* Radar Chart */}
        <div className="relative flex-shrink-0">
          <svg width="240" height="240" viewBox="0 0 240 240">
            {/* Background grid circles */}
            {[1, 2, 3, 4, 5].map((level) => (
              <circle
                key={level}
                cx={centerX}
                cy={centerY}
                r={(level / 5) * maxRadius}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="1"
              />
            ))}

            {/* Grid lines */}
            {skills.map((_, i) => {
              const point = getPoint(5, i);
              return (
                <line
                  key={i}
                  x1={centerX}
                  y1={centerY}
                  x2={point.x}
                  y2={point.y}
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
              );
            })}

            {/* Target polygon (dashed) */}
            <polygon
              points={targetPoints.map((p) => `${p.x},${p.y}`).join(" ")}
              fill="none"
              stroke="#cbd5e0"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Current polygon (filled) */}
            <polygon
              points={currentPoints.map((p) => `${p.x},${p.y}`).join(" ")}
              fill="#f4d764"
              fillOpacity="0.3"
              stroke="#f4d764"
              strokeWidth="2"
            />

            {/* Current points */}
            {currentPoints.map((point, i) => (
              <circle
                key={i}
                cx={point.x}
                cy={point.y}
                r="5"
                fill={skills[i].color}
                stroke="white"
                strokeWidth="2"
              />
            ))}

            {/* Skill labels */}
            {skills.map((skill, i) => {
              const labelPoint = getPoint(5.5, i);
              return (
                <text
                  key={i}
                  x={labelPoint.x}
                  y={labelPoint.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-[11px] fill-current text-black/70"
                >
                  {skill.icon}
                </text>
              );
            })}
          </svg>
        </div>

        {/* Skill Legend */}
        <div className="flex-1 space-y-3">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center text-[20px]"
                style={{ backgroundColor: `${skill.color}20` }}
              >
                {skill.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[13px]">{skill.name}</span>
                  {skill.status === "below" && (
                    <AlertCircle className="w-3 h-3 text-amber-600" />
                  )}
                  {skill.status === "exceeds" && (
                    <TrendingUp className="w-3 h-3 text-green-600" />
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {/* Rating dots */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <div
                        key={dot}
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: dot <= skill.current ? skill.color : "#e5e7eb",
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-black/50">
                    {skill.current}/5
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-6 pt-4 border-t border-black/5 flex gap-4">
        <div className="flex-1 text-center p-3 rounded-xl bg-green-50">
          <div className="text-[20px] text-green-700 mb-0.5">1</div>
          <div className="text-[10px] text-green-600">Above Target</div>
        </div>
        <div className="flex-1 text-center p-3 rounded-xl bg-blue-50">
          <div className="text-[20px] text-blue-700 mb-0.5">2</div>
          <div className="text-[10px] text-blue-600">On Track</div>
        </div>
        <div className="flex-1 text-center p-3 rounded-xl bg-amber-50">
          <div className="text-[20px] text-amber-700 mb-0.5">1</div>
          <div className="text-[10px] text-amber-600">Needs Focus</div>
        </div>
      </div>
    </div>
  );
}