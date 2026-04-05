import React from "react";
interface QuizHeaderProps {
  currentStep: number;
  totalSteps: number;
  isSticky?: boolean;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({ currentStep, totalSteps, isSticky = true }) => {
  const progress = Math.min(100, (currentStep / totalSteps) * 100);

  return (
    <div className={`${isSticky ? 'sticky top-0 z-50 bg-background/95 backdrop-blur-sm' : 'relative bg-background'} border-b border-border pb-3 pt-4 px-4 transition-all duration-300`}>
      <div className="max-w-lg mx-auto">
        <div className="flex flex-col items-center justify-center mb-3 gap-1">
          <img src="/logo.png" alt="Nexor MEN logo" className="w-16 h-16 object-contain" />
          <h1 className="text-xl font-bold tracking-tight">
            <span className="text-primary">NEXOR</span>
            <span className="text-foreground ml-1">MEN</span>
          </h1>
        </div>
        <div className="relative w-full h-2 bg-secondary rounded-full overflow-hidden mt-1.5">
          <div
            className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizHeader;
