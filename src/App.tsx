import { Header } from "./components/Header";
import { EmployeeSummaryCard } from "./components/EmployeeSummaryCard";
import { GrowthMapCard } from "./components/GrowthMapCard";
import { GoalsProgressCard } from "./components/GoalsProgressCard";
import { FeedbackSummaryCard } from "./components/FeedbackSummaryCard";
import { OneOnOneNotesCard } from "./components/OneOnOneNotesCard";
import { PulseMoraleCard } from "./components/PulseMoraleCard";
import { ProjectsExposureCard } from "./components/ProjectsExposureCard";
import { SystemInsightsCard } from "./components/SystemInsightsCard";
import { QuickStatsCard } from "./components/QuickStatsCard";
import { TrendBadge } from "./components/TrendBadge";
import { AlertTriangle, TrendingUp, Activity, Target } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8dcc4] via-[#f0e8d8] to-[#f5f0c8]">
      <Header />
      
      <main className="max-w-[1400px] mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="mb-2">Sarah Chen</h1>
              <p className="text-black/60 text-[15px]">Senior Product Designer • Level 3 • Reports to Alex Martinez</p>
            </div>
            <div className="flex items-center gap-3">
              <TrendBadge icon={Activity} label="Mood" value="Stable" variant="success" />
              <TrendBadge icon={Target} label="Workload" value="Balanced" variant="neutral" />
              <TrendBadge icon={AlertTriangle} label="Status" value="Watch" variant="warning" />
              <TrendBadge icon={TrendingUp} label="Promo Ready" value="78%" variant="dark" />
            </div>
          </div>
          
          {/* Last 1:1 Info */}
          <div className="flex items-center gap-2 text-[13px] text-black/60">
            <span>Last 1:1:</span>
            <span className="text-black">October 12, 2024</span>
            <span className="mx-2">•</span>
            <span>Next Check-in: October 26, 2024</span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="col-span-3 space-y-6">
            <EmployeeSummaryCard />
            <PulseMoraleCard />
            <QuickStatsCard />
          </div>

          {/* Middle Column */}
          <div className="col-span-6 space-y-6">
            <GrowthMapCard />
            <GoalsProgressCard />
            <OneOnOneNotesCard />
          </div>

          {/* Right Column */}
          <div className="col-span-3 space-y-6">
            <SystemInsightsCard />
            <FeedbackSummaryCard />
            <ProjectsExposureCard />
          </div>
        </div>
      </main>
    </div>
  );
}
