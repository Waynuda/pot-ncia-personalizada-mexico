import React from "react";
import { cn } from "@/lib/utils";

interface ScaleSelectorProps {
  value: number | null;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  lowLabel?: string;
  highLabel?: string;
}

const ScaleSelector: React.FC<ScaleSelectorProps> = ({
  value,
  onChange,
  min = 1,
  max = 5,
  lowLabel = "Pouco",
  highLabel = "Muito",
}) => {
  const items = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  return (
    <div className="space-y-3">
      <div className="flex justify-center gap-3">
        {items.map((num, i) => (
          <button
            key={num}
            onClick={() => onChange(num)}
            className={cn(
              "w-12 h-12 rounded-xl font-bold text-lg transition-all duration-300",
              "hover:scale-110 active:scale-95",
              value === num
                ? "bg-primary text-primary-foreground shadow-lg scale-110"
                : "bg-secondary text-foreground hover:bg-primary/20"
            )}
            style={{ animation: `bounceIn 0.3s ease-out ${i * 60}ms both` }}
          >
            {num}
          </button>
        ))}
      </div>
      <div className="flex justify-between px-1">
        <span className="text-xs text-muted-foreground">{lowLabel}</span>
        <span className="text-xs text-muted-foreground">{highLabel}</span>
      </div>
    </div>
  );
};

export default ScaleSelector;
