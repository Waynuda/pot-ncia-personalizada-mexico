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
    { label: "Magro", sub: "Metabolismo acelerado", img: bodySlim },
    { label: "Médio", sub: "Composição equilibrada", img: bodyMedium },
    { label: "Acima do peso", sub: "Tendência a acumular gordura", img: bodyOverweight },
  ];

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center leading-tight" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
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
                  <img src={opt.img} alt={opt.label} className="w-16 h-16 object-contain flex-shrink-0" loading="lazy" width={512} height={512} />
                  <div className="flex-1">
                    <p className="font-medium text-sm text-foreground">{opt.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{opt.sub}</p>
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
          <EducativeSlide
            title="Mais de 1 milhão de homens brasileiros escolheram o Plano Nexor MEN"
            description="Veja a transformação real: do Dia 1 ao Dia 24, nossos usuários relatam melhorias significativas em controle, resistência e confiança."
            visual={
              <div className="bg-accent rounded-2xl p-6 space-y-3">
                <div className="flex justify-between items-end h-32 gap-2">
                  {[
                    { day: "Dia 1", h: 20 },
                    { day: "Dia 7", h: 40 },
                    { day: "Dia 14", h: 65 },
                    { day: "Dia 24", h: 95 },
                  ].map((bar, i) => (
                    <div key={bar.day} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full bg-primary rounded-t-lg transition-all duration-1000 ease-out"
                        style={{ height: `${bar.h}%`, animation: `growBar 1s ease-out ${i * 200}ms both`, "--bar-width": `${bar.h}%` } as any}
                      />
                      <span className="text-[10px] font-medium text-muted-foreground">{bar.day}</span>
                    </div>
                  ))}
                </div>
              </div>
            }
            onContinue={() => goNext()}
          />
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
          <EducativeSlide
            title="A força vem dos músculos do assoalho pélvico"
            description="O assoalho pélvico é o grupo muscular responsável pelo controle ejaculatório e pela firmeza da ereção. Quando fortalecido corretamente, você ganha controle total sobre seu desempenho."
            visual={
              <div className="bg-accent rounded-2xl p-6">
                <div className="relative mx-auto w-48 h-48">
                  <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
                  <div className="absolute inset-4 rounded-full border-4 border-primary/40" />
                  <div className="absolute inset-8 rounded-full border-4 border-primary/60" />
                  <div className="absolute inset-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full">
                    Assoalho Pélvico
                  </div>
                </div>
              </div>
            }
            onContinue={() => goNext()}
          />
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
          <EducativeSlide
            title="Aumento de até 7x no tempo médio com o Plano Nexor MEN"
            description="Nosso método exclusivo, baseado em ciência, entrega resultados muito superiores aos concorrentes."
            visual={
              <ComparisonChart
                data={[
                  { label: "Tempo de duração", before: 15, after: 85 },
                  { label: "Controle ejaculatório", before: 20, after: 90 },
                  { label: "Firmeza da ereção", before: 30, after: 88 },
                ]}
              />
            }
            onContinue={() => goNext()}
          />
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
          <EducativeSlide
            title="O Músculo Bulbocavernoso: a chave da sua performance"
            description="Este músculo envolve a base do pênis e é diretamente responsável pela rigidez da ereção e pelo controle ejaculatório. Treinar ele é como treinar qualquer outro músculo do corpo."
            visual={
              <div className="bg-accent rounded-2xl p-6">
                <div className="relative mx-auto w-56 h-40">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-28 bg-primary/10 rounded-t-full border-2 border-primary/30" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-primary/30 rounded-full flex items-center justify-center">
                    <span className="text-[9px] font-bold text-primary">BULBOCAVERNOSO</span>
                  </div>
                  <div className="absolute bottom-14 left-1/2 -translate-x-1/2">
                    <Dumbbell className="w-6 h-6 text-primary animate-bounce" />
                  </div>
                </div>
              </div>
            }
            onContinue={() => goNext()}
          />
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
