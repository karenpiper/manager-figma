import { LucideIcon } from "lucide-react";

interface TrendBadgeProps {
  icon: LucideIcon;
  label: string;
  value: string;
  variant: "success" | "warning" | "neutral" | "dark";
}

export function TrendBadge({ icon: Icon, label, value, variant }: TrendBadgeProps) {
  const variantStyles = {
    success: "bg-green-100 text-green-800 border-green-200",
    warning: "bg-amber-100 text-amber-800 border-amber-200",
    neutral: "bg-white/60 text-black/70 border-black/10",
    dark: "bg-[#2d2d2d] text-white border-black/20",
  };

  return (
    <div className={`px-4 py-2 rounded-full border backdrop-blur-sm ${variantStyles[variant]} flex items-center gap-2`}>
      <Icon className="w-3.5 h-3.5" />
      <div className="flex flex-col">
        <span className="text-[9px] opacity-70 uppercase tracking-wide">{label}</span>
        <span className="text-[13px]">{value}</span>
      </div>
    </div>
  );
}
