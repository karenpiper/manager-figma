import { ChevronDown, ChevronUp, MoreVertical } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SidebarMenu() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="space-y-4">
      {/* Pension Contributions */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-black/5">
        <button 
          onClick={() => toggleSection("pension")}
          className="w-full flex items-center justify-between"
        >
          <span className="text-[13px]">Pension contributions</span>
          {expandedSections["pension"] ? (
            <ChevronUp className="w-4 h-4 text-black/40" />
          ) : (
            <ChevronDown className="w-4 h-4 text-black/40" />
          )}
        </button>
      </div>

      {/* Devices */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-black/5">
        <button 
          onClick={() => toggleSection("devices")}
          className="w-full flex items-center justify-between mb-3"
        >
          <span className="text-[13px]">Devices</span>
          {expandedSections["devices"] ? (
            <ChevronUp className="w-4 h-4 text-black/40" />
          ) : (
            <ChevronDown className="w-4 h-4 text-black/40" />
          )}
        </button>
        
        {/* Device Item */}
        <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-black/5 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <ImageWithFallback
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16v10H4V6z'/%3E%3C/svg%3E"
              alt="MacBook"
              className="w-6 h-6"
            />
          </div>
          <div className="flex-1">
            <p className="text-[13px]">MacBook Air</p>
            <p className="text-[11px] text-black/50">Version M1</p>
          </div>
          <button className="p-1 hover:bg-black/10 rounded transition-colors">
            <MoreVertical className="w-4 h-4 text-black/40" />
          </button>
        </div>
      </div>

      {/* Compensation Summary */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-black/5">
        <button 
          onClick={() => toggleSection("compensation")}
          className="w-full flex items-center justify-between"
        >
          <span className="text-[13px]">Compensation Summary</span>
          {expandedSections["compensation"] ? (
            <ChevronUp className="w-4 h-4 text-black/40" />
          ) : (
            <ChevronDown className="w-4 h-4 text-black/40" />
          )}
        </button>
      </div>

      {/* Employee Benefits */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-black/5">
        <button 
          onClick={() => toggleSection("benefits")}
          className="w-full flex items-center justify-between"
        >
          <span className="text-[13px]">Employee Benefits</span>
          {expandedSections["benefits"] ? (
            <ChevronUp className="w-4 h-4 text-black/40" />
          ) : (
            <ChevronDown className="w-4 h-4 text-black/40" />
          )}
        </button>
      </div>
    </div>
  );
}
