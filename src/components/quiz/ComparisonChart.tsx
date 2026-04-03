import React, { useEffect, useState } from "react";

interface BarData {
  label: string;
  before: number;
  after: number;
}

interface ComparisonChartProps {
  data: BarData[];
}

const ComparisonChart: React.FC<ComparisonChartProps> = ({ data }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-4">
      {data.map((item, i) => (
        <div key={item.label} className="space-y-1.5" style={{ animation: `fadeInUp 0.4s ease-out ${i * 100}ms both` }}>
          <p className="text-xs font-medium text-foreground">{item.label}</p>
          <div className="flex gap-2 items-center">
            <div className="flex-1 h-6 bg-secondary rounded-full overflow-hidden relative">
              <div
                className="h-full bg-muted-foreground/30 rounded-full transition-all duration-1000 ease-out"
                style={{ width: animate ? `${item.before}%` : "0%" }}
              />
              <span className="absolute inset-0 flex items-center px-2 text-[10px] font-medium text-foreground">
                Antes
              </span>
            </div>
            <div className="flex-1 h-6 bg-secondary rounded-full overflow-hidden relative">
              <div
                className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                style={{ width: animate ? `${item.after}%` : "0%", transitionDelay: `${300 + i * 150}ms` }}
              />
              <span className="absolute inset-0 flex items-center px-2 text-[10px] font-medium text-primary-foreground mix-blend-difference">
                Depois
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComparisonChart;
