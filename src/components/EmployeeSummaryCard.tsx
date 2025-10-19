import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Mail, Calendar, MapPin } from "lucide-react";

export function EmployeeSummaryCard() {
  return (
    <div className="relative rounded-3xl overflow-hidden h-[420px] bg-gradient-to-br from-gray-300 to-gray-400">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1758599543111-36ce5c34fceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA3ODE0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Sarah Chen"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
        <div className="mb-4">
          <h3 className="text-white text-[18px] mb-1">Sarah Chen</h3>
          <p className="text-white/80 text-[13px] mb-3">Senior Product Designer</p>
          
          <div className="space-y-2 text-white/70 text-[12px]">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              <span>sarah.chen@company.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Joined March 2022</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <div className="flex-1 px-3 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30">
            <p className="text-[10px] text-white/70 mb-0.5">Level</p>
            <p className="text-white text-[13px]">L3</p>
          </div>
          <div className="flex-1 px-3 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30">
            <p className="text-[10px] text-white/70 mb-0.5">Tenure</p>
            <p className="text-white text-[13px]">2.5y</p>
          </div>
        </div>
      </div>
    </div>
  );
}
