interface MetricPillProps {
  label: string;
  value: string;
  variant: "dark" | "yellow" | "light";
}

export function MetricPill({ label, value, variant }: MetricPillProps) {
  const variantStyles = {
    dark: "bg-[#2d2d2d] text-white",
    yellow: "bg-[#f4d764] text-black",
    light: "bg-white/40 text-black/70 border border-black/10",
  };

  return (
    <div className="flex flex-col">
      <span className="text-[11px] text-black/60 mb-1">{label}</span>
      <div className={`px-4 py-2 rounded-full text-[13px] ${variantStyles[variant]}`}>
        {value}
      </div>
    </div>
  );
}
