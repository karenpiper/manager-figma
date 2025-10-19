import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="w-4 h-4 text-black/40" />
      <div className="flex flex-col">
        <span className="text-[11px] text-black/60">{label}</span>
        <span className="text-[32px] leading-none">{value}</span>
      </div>
    </div>
  );
}
