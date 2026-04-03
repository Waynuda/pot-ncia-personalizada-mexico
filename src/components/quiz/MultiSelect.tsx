import React from "react";
import { cn } from "@/lib/utils";

interface MultiSelectProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, selected, onChange }) => {
  const toggle = (opt: string) => {
    if (selected.includes(opt)) {
      onChange(selected.filter((s) => s !== opt));
    } else {
      onChange([...selected, opt]);
    }
  };

  return (
    <div className="space-y-2.5">
      {options.map((opt, i) => (
        <div
          key={opt}
          onClick={() => toggle(opt)}
          className={cn(
            "cursor-pointer rounded-xl border-2 p-3.5 transition-all duration-300",
            "hover:scale-[1.01] active:scale-[0.99]",
            selected.includes(opt)
              ? "border-primary bg-accent"
              : "border-border bg-card hover:border-primary/40"
          )}
          style={{ animation: `fadeInUp 0.4s ease-out ${i * 60}ms both` }}
        >
          <div className="flex items-center gap-3">
            <div className={cn(
              "w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200",
              selected.includes(opt)
                ? "bg-primary border-primary"
                : "border-muted-foreground/30"
            )}>
              {selected.includes(opt) && (
                <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="font-medium text-sm text-foreground">{opt}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultiSelect;
