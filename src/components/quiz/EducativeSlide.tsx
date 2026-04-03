import React from "react";

interface EducativeSlideProps {
  title: string;
  description: string;
  visual?: React.ReactNode;
  onContinue: () => void;
}

const EducativeSlide: React.FC<EducativeSlideProps> = ({ title, description, visual, onContinue }) => {
  return (
    <div className="space-y-6 text-center">
      <h2
        className="text-xl font-bold text-foreground leading-tight"
        style={{ animation: "fadeInUp 0.4s ease-out both" }}
      >
        {title}
      </h2>
      {visual && (
        <div style={{ animation: "fadeInUp 0.4s ease-out 150ms both" }}>
          {visual}
        </div>
      )}
      <p
        className="text-sm text-muted-foreground leading-relaxed"
        style={{ animation: "fadeInUp 0.4s ease-out 300ms both" }}
      >
        {description}
      </p>
      <button
        onClick={onContinue}
        className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base transition-all duration-300 hover:brightness-110 active:scale-[0.98] animate-pulse-slow"
        style={{ animation: "fadeInUp 0.4s ease-out 450ms both" }}
      >
        Continuar
      </button>
    </div>
  );
};

export default EducativeSlide;
