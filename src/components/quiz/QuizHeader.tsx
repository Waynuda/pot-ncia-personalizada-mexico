import React from "react";

interface QuizHeaderProps {
  currentStep: number;
  totalSteps: number;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border pb-3 pt-4 px-4">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-center mb-3">
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-primary">V</span>
            <span className="text-foreground">IREN</span>
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
