import React from "react";
import nexorLogo from "@/assets/nexor-logo.png";

interface QuizHeaderProps {
  currentStep: number;
  totalSteps: number;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border pb-3 pt-4 px-4">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-center mb-3 gap-2">
          <img src={nexorLogo} alt="Nexor MEN" className="w-8 h-8 object-contain" />
          <h1 className="text-xl font-bold tracking-tight">
            <span className="text-primary">NEXOR</span>
            <span className="text-foreground ml-1">MEN</span>
          </h1>
        </div>
        <div className="relative w-full h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground text-center mt-1.5">
          {currentStep} de {totalSteps}
        </p>
      </div>
    </div>
  );
};

export default QuizHeader;
