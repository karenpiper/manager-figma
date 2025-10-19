import { ThumbsUp, MessageSquare, Sparkles } from "lucide-react";

export function FeedbackSummaryCard() {
  const themes = [
    {
      name: "Communication",
      positive: 8,
      constructive: 2,
      sentiment: 0.8,
      emoji: "💬",
      color: "#3b82f6",
    },
    {
      name: "Initiative",
      positive: 6,
      constructive: 1,
      sentiment: 0.85,
      emoji: "⚡",
      color: "#f59e0b",
    },
    {
      name: "Collaboration",
      positive: 10,
      constructive: 0,
      sentiment: 1.0,
      emoji: "🤝",
      color: "#10b981",
    },
    {
      name: "Time Mgmt",
      positive: 3,
      constructive: 4,
      sentiment: 0.4,
      emoji: "⏰",
      color: "#ef4444",
    },
  ];

  const totalFeedback = themes.reduce((sum, t) => sum + t.positive + t.constructive, 0);
  const avgSentiment = themes.reduce((sum, t) => sum + t.sentiment, 0) / themes.length;

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-5 border border-black/5">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-[13px] mb-1">Feedback Summary</h3>
          <p className="text-[11px] text-black/50">{totalFeedback} pieces • Last 90 days</p>
        </div>
        <MessageSquare className="w-4 h-4 text-black/40" />
      </div>

      {/* Overall sentiment */}
      <div className="mb-5 p-4 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 border border-green-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] text-black/60">Overall Sentiment</span>
          <span className="text-[20px]">
            {avgSentiment >= 0.8 ? "😊" : avgSentiment >= 0.6 ? "🙂" : avgSentiment >= 0.4 ? "😐" : "😕"}
          </span>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 h-2 rounded-full"
              style={{
                backgroundColor: i < avgSentiment * 10 ? "#10b981" : "#e5e7eb",
              }}
            />
          ))}
        </div>
      </div>

      {/* Feedback themes */}
      <div className="space-y-3">
        {themes.map((theme, index) => (
          <div key={index} className="group">
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/60 transition-colors">
              {/* Icon */}
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-[24px] flex-shrink-0"
                style={{ backgroundColor: `${theme.color}15` }}
              >
                {theme.emoji}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[12px]">{theme.name}</span>
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="text-green-600">+{theme.positive}</span>
                    {theme.constructive > 0 && (
                      <span className="text-amber-600">△{theme.constructive}</span>
                    )}
                  </div>
                </div>

                {/* Mini sentiment bar */}
                <div className="h-1.5 bg-black/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all"
                    style={{ 
                      width: `${theme.sentiment * 100}%`,
                      backgroundColor: theme.color,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Insight */}
      <div className="mt-4 p-3 rounded-xl bg-[#f4d764]/20 border border-[#f4d764]/30 flex items-start gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#d4a02c] flex-shrink-0 mt-0.5" />
        <p className="text-[10px] text-black/70">
          <span className="font-medium">Top strength:</span> Collaboration 🏆 • 
          <span className="font-medium"> Growth area:</span> Time management
        </p>
      </div>
    </div>
  );
}