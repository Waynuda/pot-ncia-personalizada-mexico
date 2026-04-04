import QuizContainer from "@/components/quiz/QuizContainer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <QuizContainer />
      </div>
      <footer className="py-6 text-center text-xs text-muted-foreground bg-background">
        &copy; 2026 - Nexor Men
      </footer>
    </div>
  );
};

export default Index;
