import React, { useState, useCallback } from "react";
import QuizHeader from "./QuizHeader";
import OptionCard from "./OptionCard";
import ScaleSelector from "./ScaleSelector";
import MultiSelect from "./MultiSelect";
import EducativeSlide from "./EducativeSlide";
import ComparisonChart from "./ComparisonChart";
import CheckoutPage from "./CheckoutPage";
import { Timer, Heart, Zap, Shield, Dumbbell, Brain, Users, Clock, Activity, Eye, Coffee, Cigarette, Wine, Candy, Utensils, Briefcase, Home, Footprints, HardHat, Monitor, Star } from "lucide-react";

import bodySlim from "@/assets/body-slim.png";
import bodyMedium from "@/assets/body-medium.png";
import bodyOverweight from "@/assets/body-overweight.png";

const TOTAL_STEPS = 32;

const QuizContainer: React.FC = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"enter" | "exit">("enter");

  const goNext = useCallback((value?: any) => {
    if (animating) return;
    if (value !== undefined) {
      setAnswers((prev) => ({ ...prev, [step]: value }));
    }
    setAnimating(true);
    setDirection("exit");
    setTimeout(() => {
      setStep((s) => Math.min(s + 1, TOTAL_STEPS + 1));
      setDirection("enter");
      setTimeout(() => setAnimating(false), 400);
    }, 300);
  }, [step, animating]);

  const goBack = useCallback(() => {
    if (animating || step <= 1) return;
    setAnimating(true);
    setDirection("exit");
    setTimeout(() => {
      setStep((s) => s - 1);
      setDirection("enter");
      setTimeout(() => setAnimating(false), 400);
    }, 300);
  }, [step, animating]);

  const selectOption = (value: any) => {
    setAnswers((prev) => ({ ...prev, [step]: value }));
    setTimeout(() => goNext(), 400);
  };

  const selectScale = (value: number) => {
    setAnswers((prev) => ({ ...prev, [step]: value }));
    setTimeout(() => goNext(), 500);
  };

  if (step > TOTAL_STEPS) {
    return <CheckoutPage name={answers[31] || "Campeão"} />;
  }

  const ageOptions = [
    { label: "18-30 anos", img: "/18.png" },
    { label: "31-45 anos", img: "/31.png" },
    { label: "46-55 anos", img: "/46.png" },
    { label: "+56 anos", img: "/56.png" },
  ];

  const bodyOptions = [
    { label: "Magro", sub: "Metabolismo acelerado", img: "/Magro.png" },
    { label: "Médio", sub: "Composição equilibrada", img: "/Medio.png" },
    { label: "Acima do peso", sub: "Tendência a acumular gordura", img: "/Acima do peso.png" },
  ];

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex justify-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" /> Quiz de 2 minutos
              </span>
            </div>
            <h2 className="text-lg font-bold text-foreground text-center leading-tight" style={{ animation: "fadeInUp 0.4s ease-out 100ms both" }}>
              Plano de exercícios para elevar sua potência sexual de acordo com sua idade
            </h2>
            <p className="text-sm text-muted-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out 100ms both" }}>
              Selecione sua faixa etária
            </p>
            <div className="grid grid-cols-2 gap-3">
              {ageOptions.map((opt, i) => (
                <div
                  key={opt.label}
                  onClick={() => selectOption(opt.label)}
                  className={`relative overflow-hidden cursor-pointer rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-md active:scale-[0.98] flex flex-col ${
                    answers[1] === opt.label
                      ? "border-primary bg-accent shadow-sm"
                      : "border-border bg-card hover:border-primary/40"
                  }`}
                  style={{ animation: `fadeInUp 0.4s ease-out ${i * 80}ms both` }}
                >
                  <img src={opt.img} alt={opt.label} className="w-full aspect-square object-cover bg-muted/20" loading="lazy" />
                  <div className="p-3 text-center border-t border-border/50">
                    <p className="font-semibold text-sm text-foreground">{opt.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <div 
              className="mt-6 text-[10px] text-center text-muted-foreground/60 px-4" 
              style={{ animation: "fadeInUp 0.4s ease-out 300ms both" }}
            >
              Ao escolher sua idade e continuar, você concorda com nossos <a href="#" className="underline hover:text-primary transition-colors">Termos de Serviço</a> | <a href="#" className="underline hover:text-primary transition-colors">Política de Privacidade</a>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Escolha seu tipo de corpo
            </h2>
            <div className="space-y-3">
              {bodyOptions.map((opt, i) => (
                <div
                  key={opt.label}
                  onClick={() => selectOption(opt.label)}
                  className={`relative overflow-hidden cursor-pointer rounded-xl border-2 p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-md active:scale-[0.98] flex items-center gap-4 ${
                    answers[2] === opt.label
                      ? "border-primary bg-accent shadow-sm"
                      : "border-border bg-card hover:border-primary/40"
                  }`}
                  style={{ animation: `fadeInUp 0.4s ease-out ${i * 80}ms both` }}
                >
                  <img src={opt.img} alt={opt.label} className="w-28 h-28 sm:w-36 sm:h-36 object-contain flex-shrink-0 drop-shadow-sm transition-transform group-hover:scale-105" loading="lazy" width={512} height={512} />
                  <div className="flex-1">
                    <p className="font-semibold text-lg text-foreground">{opt.label}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{opt.sub}</p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                    answers[2] === opt.label ? "border-primary bg-primary" : "border-muted-foreground/30"
                  }`}>
                    {answers[2] === opt.label && (
                      <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 text-center">
            <div style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              <img src="/etapa 3.png" alt="Resultados" className="w-full object-cover rounded-2xl drop-shadow-sm" loading="lazy" />
            </div>
            <p className="text-xl font-bold text-foreground leading-tight" style={{ animation: "fadeInUp 0.4s ease-out 150ms both" }}>
              Nós ajudamos mais de 150.000 homens a melhorar seu desempenho sexual
            </p>
            <button
              onClick={() => goNext()}
              className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base transition-all duration-300 hover:brightness-110 active:scale-[0.98] animate-pulse-slow"
              style={{ animation: "fadeInUp 0.4s ease-out 300ms both" }}
            >
              Continuar
            </button>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Escolha seus objetivos
            </h2>
            <p className="text-xs text-muted-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out 100ms both" }}>
              Selecione todos que se aplicam
            </p>
            <MultiSelect
              options={["Durar mais na cama", "Orgasmos mais intensos", "Ereções mais firmes"]}
              selected={answers[4] || []}
              onChange={(v) => setAnswers((p) => ({ ...p, [4]: v }))}
            />
            {(answers[4]?.length > 0) && (
              <button onClick={() => goNext()} className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold transition-all hover:brightness-110 active:scale-[0.98]" style={{ animation: "fadeInUp 0.3s ease-out both" }}>
                Continuar
              </button>
            )}
          </div>
        );

      case 5:
        return (
          <div className="space-y-6 text-center">
            <div className="space-y-4" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              <p className="font-bold text-foreground text-lg leading-snug">
                Seu jeito de durar mais tempo vem da força e saúde dos músculos do assoalho pélvico.
              </p>
              <p className="font-bold text-foreground text-lg leading-snug">
                E quanto mais você envelhece, mais fraco fica seu músculo masculino.
              </p>
              <p className="font-bold text-foreground text-lg leading-snug">
                Músculos fortes ajudam você a ter ereções duras novamente, controlar a ejaculação e a durar mais na cama.
              </p>
            </div>
            <div style={{ animation: "fadeInUp 0.4s ease-out 150ms both" }}>
              <img src="/etapa 5.png" alt="Músculo pélvico" className="w-full object-cover rounded-2xl drop-shadow-sm" loading="lazy" />
            </div>
            <button
              onClick={() => goNext()}
              className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base transition-all duration-300 hover:brightness-110 active:scale-[0.98] animate-pulse-slow"
              style={{ animation: "fadeInUp 0.4s ease-out 300ms both" }}
            >
              Continuar
            </button>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Quanto tempo, em média, dura sua relação sexual?
            </h2>
            {["Menos de 2 minutos", "2 a 7 minutos", "7 a 15 minutos", "Mais de 15 minutos"].map((opt, i) => (
              <OptionCard key={opt} label={opt} icon={<Timer className="w-5 h-5" />} selected={answers[6] === opt} onClick={() => selectOption(opt)} delay={i * 80} />
            ))}
          </div>
        );

      case 7:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Com que frequência você experimenta ejaculação precoce?
            </h2>
            {["Nunca", "Às vezes", "Na maior parte das vezes"].map((opt, i) => (
              <OptionCard key={opt} label={opt} selected={answers[7] === opt} onClick={() => selectOption(opt)} delay={i * 80} />
            ))}
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Qual sua dificuldade de controle durante o sexo?
            </h2>
            <ScaleSelector value={answers[8] || null} onChange={selectScale} lowLabel="Nenhuma dificuldade" highLabel="Muito difícil" />
          </div>
        );

      case 9:
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Qual sua dificuldade de controle durante a masturbação?
            </h2>
            <ScaleSelector value={answers[9] || null} onChange={selectScale} lowLabel="Nenhuma dificuldade" highLabel="Muito difícil" />
          </div>
        );

      case 10:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Quanto tempo você gostaria de durar?
            </h2>
            {["10 a 15 minutos", "15 a 30 minutos", "30 a 60 minutos", "Mais de 60 minutos"].map((opt, i) => (
              <OptionCard key={opt} label={opt} icon={<Clock className="w-5 h-5" />} selected={answers[10] === opt} onClick={() => selectOption(opt)} delay={i * 80} />
            ))}
          </div>
        );

      case 11:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Já fez algum tipo de treino para assoalho pélvico?
            </h2>
            {["Sim", "Não, mas já ouvi falar", "Nunca", "O que é assoalho pélvico?"].map((opt, i) => (
              <OptionCard key={opt} label={opt} selected={answers[11] === opt} onClick={() => selectOption(opt)} delay={i * 80} />
            ))}
          </div>
        );

      case 12:
        return (
          <div className="space-y-6 text-center">
            <div className="space-y-4" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              <p className="font-bold text-foreground text-xl leading-snug">
                O programa de Exercícios da Viren ajuda a fortalecer os músculos do assoalho pélvico e pode aumentar o tempo médio de relação em até 7 vezes
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl drop-shadow-sm h-64 sm:h-72" style={{ animation: "fadeInUp 0.4s ease-out 150ms both" }}>
              <img src="/grafico.png" alt="Gráfico de desempenho" className="absolute bottom-0 left-0 w-full h-[125%] object-cover object-bottom" loading="lazy" />
            </div>
            <button
              onClick={() => goNext()}
              className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base transition-all duration-300 hover:brightness-110 active:scale-[0.98] animate-pulse-slow"
              style={{ animation: "fadeInUp 0.4s ease-out 300ms both" }}
            >
              Continuar
            </button>
          </div>
        );

      case 13:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Como anda a força da sua ereção?
            </h2>
            {["Tudo bem", "Às vezes tenho dificuldades", "Tenho dificuldades frequentes"].map((opt, i) => (
              <OptionCard key={opt} label={opt} selected={answers[13] === opt} onClick={() => selectOption(opt)} delay={i * 80} />
            ))}
          </div>
        );

      case 14:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Há quanto tempo tem essas dificuldades?
            </h2>
            {["Menos de 6 meses", "6 a 12 meses", "1 a 3 anos", "3 a 5 anos", "Mais de 5 anos"].map((opt, i) => (
              <OptionCard key={opt} label={opt} selected={answers[14] === opt} onClick={() => selectOption(opt)} delay={i * 60} />
            ))}
          </div>
        );

      case 15:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Com que frequência você tem ereções matinais?
            </h2>
            {["Sempre", "Com frequência", "Raramente", "Nunca"].map((opt, i) => (
              <OptionCard key={opt} label={opt} selected={answers[15] === opt} onClick={() => selectOption(opt)} delay={i * 80} />
            ))}
          </div>
        );

      case 16:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Você tem dificuldade para ter ereção antes do sexo?
            </h2>
            {["Sempre", "Com frequência", "Raramente", "Nunca"].map((opt, i) => (
              <OptionCard key={opt} label={opt} selected={answers[16] === opt} onClick={() => selectOption(opt)} delay={i * 80} />
            ))}
          </div>
        );

      case 17:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Consegue transar duas vezes seguidas?
            </h2>
            {["Sim, sem dificuldade", "Sim, mas com muito esforço", "Não consigo"].map((opt, i) => (
              <OptionCard key={opt} label={opt} selected={answers[17] === opt} onClick={() => selectOption(opt)} delay={i * 80} />
            ))}
          </div>
        );

      case 18:
        return (
          <div className="space-y-6 text-center">
            <div className="space-y-4" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              <p className="font-bold text-foreground text-xl leading-snug">
                A qualidade da ereção está diretamente ligada à força dos músculos do assoalho pélvico.
              </p>
            </div>
            <div style={{ animation: "fadeInUp 0.4s ease-out 150ms both" }}>
              <img src="/musculo.png" alt="Músculo pélvico" className="w-full object-cover rounded-2xl drop-shadow-sm" loading="lazy" />
            </div>
            <div className="space-y-3" style={{ animation: "fadeInUp 0.4s ease-out 250ms both" }}>
              <p className="text-sm text-foreground leading-relaxed">
                Um dos três principais músculos dessa região, essencial para a saúde sexual masculina, <strong>é o músculo bulbocavernoso</strong>.
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                Ele permite que o pênis se encha de sangue e mantenha a firmeza.
              </p>
            </div>
            <button
              onClick={() => goNext()}
              className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base transition-all duration-300 hover:brightness-110 active:scale-[0.98] animate-pulse-slow"
              style={{ animation: "fadeInUp 0.4s ease-out 350ms both" }}
            >
              Continuar
            </button>
          </div>
        );

      case 19:
        return (
          <EducativeSlide
            title="84% dos usuários melhoraram significativamente"
            description=""
            visual={
              <div className="bg-accent rounded-2xl p-5 text-left space-y-3">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-foreground italic">
                  "Depois de 3 semanas seguindo o plano, minha confiança mudou completamente. Consigo durar muito mais e minha parceira percebeu a diferença. Recomendo de olhos fechados."
                </p>
                <p className="text-xs font-bold text-foreground">— Rodrigo S., 34 anos</p>
              </div>
            }
            onContinue={() => goNext()}
          />
        );

      case 20:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Como é o seu dia a dia?
            </h2>
            {[
              { label: "Trabalho de escritório", icon: <Briefcase className="w-5 h-5" /> },
              { label: "Caminhadas e atividades leves", icon: <Footprints className="w-5 h-5" /> },
              { label: "Trabalho físico pesado", icon: <HardHat className="w-5 h-5" /> },
              { label: "Fico em casa a maior parte do tempo", icon: <Home className="w-5 h-5" /> },
            ].map((opt, i) => (
              <OptionCard key={opt.label} label={opt.label} icon={opt.icon} selected={answers[20] === opt.label} onClick={() => selectOption(opt.label)} delay={i * 80} />
            ))}
          </div>
        );

      case 21:
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Qual seu nível de estresse diário?
            </h2>
            <ScaleSelector value={answers[21] || null} onChange={selectScale} lowLabel="Muito baixo" highLabel="Muito alto" />
          </div>
        );

      case 22:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Qual seu nível de atividade física?
            </h2>
            {["Pratico exercícios regularmente", "Às vezes faço exercícios", "Pouco ativo", "Nunca faço exercícios"].map((opt, i) => (
              <OptionCard key={opt} label={opt} icon={<Activity className="w-5 h-5" />} selected={answers[22] === opt} onClick={() => selectOption(opt)} delay={i * 80} />
            ))}
          </div>
        );

      case 23:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Quantas horas por dia em frente a telas?
            </h2>
            {["Menos de 1 hora", "1 a 2 horas", "2 a 4 horas", "4 a 8 horas", "Mais de 8 horas"].map((opt, i) => (
              <OptionCard key={opt} label={opt} icon={<Monitor className="w-5 h-5" />} selected={answers[23] === opt} onClick={() => selectOption(opt)} delay={i * 60} />
            ))}
          </div>
        );

      case 24:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Qual sua frequência de consumo de pornografia?
            </h2>
            {["Diariamente", "3 a 4 vezes por semana", "1 vez por semana", "1 a 2 vezes por mês", "Nunca"].map((opt, i) => (
              <OptionCard key={opt} label={opt} icon={<Eye className="w-5 h-5" />} selected={answers[24] === opt} onClick={() => selectOption(opt)} delay={i * 60} />
            ))}
          </div>
        );

      case 25:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Quais desses hábitos fazem parte da sua rotina?
            </h2>
            <p className="text-xs text-muted-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out 100ms both" }}>
              Selecione todos que se aplicam
            </p>
            <MultiSelect
              options={["Fumar", "Consumo de álcool", "Consumo de doces", "Fast Food", "Nenhum dos anteriores"]}
              selected={answers[25] || []}
              onChange={(v) => setAnswers((p) => ({ ...p, [25]: v }))}
            />
            {(answers[25]?.length > 0) && (
              <button onClick={() => goNext()} className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold transition-all hover:brightness-110 active:scale-[0.98]" style={{ animation: "fadeInUp 0.3s ease-out both" }}>
                Continuar
              </button>
            )}
          </div>
        );

      case 26:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Qual é o seu estado civil?
            </h2>
            {["Casado", "Namorando", "Solteiro", "Prefiro não responder"].map((opt, i) => (
              <OptionCard key={opt} label={opt} selected={answers[26] === opt} onClick={() => selectOption(opt)} delay={i * 80} />
            ))}
          </div>
        );

      case 27:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Sua performance sexual é motivo de preocupação nos seus relacionamentos?
            </h2>
            {["Sim, grande preocupação", "Um pouco", "Não sei ao certo", "Não"].map((opt, i) => (
              <OptionCard key={opt} label={opt} selected={answers[27] === opt} onClick={() => selectOption(opt)} delay={i * 80} />
            ))}
          </div>
        );

      case 28:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Qual sua frequência sexual mensal?
            </h2>
            {["Menos de 3 vezes", "3 a 6 vezes", "7 a 15 vezes", "Mais de 15 vezes", "Prefiro não responder"].map((opt, i) => (
              <OptionCard key={opt} label={opt} selected={answers[28] === opt} onClick={() => selectOption(opt)} delay={i * 60} />
            ))}
          </div>
        );

      case 29:
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Como está sua libido nos últimos 3 meses?
            </h2>
            <ScaleSelector value={answers[29] || null} onChange={selectScale} lowLabel="Muito baixa" highLabel="Muito alta" />
          </div>
        );

      case 30:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Já tentou soluções de efeito rápido (remédios, sprays, etc.)?
            </h2>
            {["Sim, com frequência", "Sim, algumas vezes", "Nunca tentei"].map((opt, i) => (
              <OptionCard key={opt} label={opt} selected={answers[30] === opt} onClick={() => selectOption(opt)} delay={i * 80} />
            ))}
          </div>
        );

      case 31:
        return (
          <div className="space-y-5">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Digite seu primeiro nome para personalizar seu plano
            </h2>
            <p className="text-sm text-muted-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out 100ms both" }}>
              Seu plano será preparado exclusivamente para você
            </p>
            <div style={{ animation: "fadeInUp 0.4s ease-out 200ms both" }}>
              <input
                type="text"
                placeholder="Seu primeiro nome"
                value={answers[31] || ""}
                onChange={(e) => setAnswers((p) => ({ ...p, [31]: e.target.value }))}
                className="w-full rounded-xl border-2 border-border bg-card px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all"
                autoFocus
              />
            </div>
            {(answers[31]?.trim()?.length > 0) && (
              <button onClick={() => goNext()} className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold transition-all hover:brightness-110 active:scale-[0.98]" style={{ animation: "fadeInUp 0.3s ease-out both" }}>
                Continuar
              </button>
            )}
          </div>
        );

      case 32:
        return (
          <EducativeSlide
            title="Baseado em décadas de pesquisa científica"
            description="Nosso método é fundamentado em estudos das maiores universidades do mundo sobre saúde sexual masculina e fortalecimento do assoalho pélvico."
            visual={
              <div className="bg-accent rounded-2xl p-6 space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  {["Cambridge", "Harvard", "Oxford"].map((uni, i) => (
                    <div key={uni} className="flex flex-col items-center gap-2" style={{ animation: `bounceIn 0.4s ease-out ${i * 150}ms both` }}>
                      <div className="w-14 h-14 rounded-full bg-background border-2 border-border flex items-center justify-center">
                        <Brain className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-[10px] font-bold text-foreground">{uni}</span>
                    </div>
                  ))}
                </div>
              </div>
            }
            onContinue={() => goNext()}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader currentStep={step} totalSteps={TOTAL_STEPS} />
      <div className="flex-1 flex flex-col max-w-lg mx-auto w-full px-4 py-6">
        <div className={direction === "enter" ? "quiz-transition-enter" : "quiz-transition-exit"} key={step}>
          {renderStep()}
        </div>
      </div>
      {step > 1 && (
        <div className="max-w-lg mx-auto w-full px-4 pb-4">
          <button
            onClick={goBack}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Voltar
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizContainer;
