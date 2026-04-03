import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface OptionCardProps {
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
  selected?: boolean;
  onClick: () => void;
  delay?: number;
}

const OptionCard: React.FC<OptionCardProps> = ({ label, sublabel, icon, selected, onClick, delay = 0 }) => {
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setTimeout(() => setRipple(null), 600);
    onClick();
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "relative overflow-hidden cursor-pointer rounded-xl border-2 p-4 transition-all duration-300",
        "hover:scale-[1.02] hover:shadow-md active:scale-[0.98]",
        selected
          ? "border-primary bg-accent shadow-sm"
          : "border-border bg-card hover:border-primary/40"
      )}
      style={{ animationDelay: `${delay}ms`, animation: `fadeInUp 0.4s ease-out ${delay}ms both` }}
    >
      <div className="flex items-center gap-3">
        {icon && <div className="text-primary text-2xl flex-shrink-0">{icon}</div>}
        <div className="flex-1">
          <p className={cn("font-medium text-sm", selected ? "text-accent-foreground" : "text-foreground")}>
            {label}
          </p>
          {sublabel && (
            <p className="text-xs text-muted-foreground mt-0.5">{sublabel}</p>
          )}
        </div>
        <div className={cn(
          "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0",
          selected ? "border-primary bg-primary" : "border-muted-foreground/30"
        )}>
          {selected && (
            <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      {ripple && (
        <span
          className="absolute rounded-full bg-primary/20 pointer-events-none"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            animation: "ripple 0.6s ease-out forwards",
          }}
        />
      )}
    </div>
  );
};

export default OptionCard;
