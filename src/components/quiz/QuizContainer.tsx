import React, { useState, useCallback, useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
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

// ─── SUPABASE TRACKING ────────────────────────────────────────────────────────
const SUPABASE_URL = 'https://kglbkohmprsfwbltcaly.supabase.co';
const SUPABASE_KEY = 'sb_publishable_PXDKmJqTWih11oarHijLkQ_TLDma-ZI';
const QUIZ_ID = 'nexormen';

const getSessionId = (): string => {
  let sid = sessionStorage.getItem('quiz_session_id');
  if (!sid) {
    sid = Math.random().toString(36).substring(2) + Date.now().toString(36);
    sessionStorage.setItem('quiz_session_id', sid);
  }
  return sid;
};

let geoCache: { country: string; region: string; city: string; country_code: string } | null = null;

const getGeo = async (): Promise<{ country: string; region: string; city: string; country_code: string }> => {
  if (geoCache) return geoCache;
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    geoCache = {
      country: data.country_name || 'Unknown',
      region: data.region || 'Unknown',
      city: data.city || 'Unknown',
      country_code: data.country_code || 'XX'
    };
  } catch (_) {
    geoCache = { country: 'Unknown', region: 'Unknown', city: 'Unknown', country_code: 'XX' };
  }
  return geoCache;
};

const trackEtapa = async (
  etapa: number,
  etapaNome: string,
  acao: 'visualizou' | 'iniciou' | 'avancou' | 'completou'
) => {
  try {
    const geo = await getGeo();
    await fetch(`${SUPABASE_URL}/rest/v1/quiz_eventos`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        session_id: getSessionId(),
        quiz_id: QUIZ_ID,
        etapa,
        etapa_nome: etapaNome,
        acao,
        country: geo.country,
        country_code: geo.country_code,
        region: geo.region,
        city: geo.city,
        ultima_vista: new Date().toISOString()
      })
    });
  } catch (_) {}
};

const ETAPA_NOMES: Record<number, string> = {
  1: 'idade', 2: 'tipo-fisico', 3: 'video-apresentacao', 4: 'objetivos',
  5: 'beneficios-1', 6: 'duracao-sexo', 7: 'ejac-prematuro',
  8: 'escala-controle-sexo', 9: 'escala-controle-mastro', 10: 'duracao-desejada',
  11: 'treinamento-pelvico', 12: 'visao-geral-programa', 13: 'forca-erecao',
  14: 'periodo-dificuldade', 15: 'erecoes-matinais', 16: 'erecao-pre-sexual',
  17: 'sexo-duplo', 18: 'info-muscular', 19: 'historia-sucesso',
  20: 'atividade-diaria', 21: 'nivel-estresse', 22: 'atividade-fisica',
  23: 'tempo-tela', 24: 'frequencia-pornografia', 25: 'habitos',
  26: 'estado-civil', 27: 'preocupacao-sexual', 28: 'frequencia-mensal',
  29: 'escala-libido', 30: 'solucoes-rapidas', 31: 'nome-pessoal',
  32: 'resumo-final'
};
// ─────────────────────────────────────────────────────────────────────────────

const TOTAL_STEPS = 32;

const ProcessingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    const duration = 10000;
    const intervalTime = 50;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setProgress(Math.min(100, Math.floor((currentStep / steps) * 100)));
      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center space-y-8 animate-in fade-in duration-500">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-foreground">Analizando suas respostas...</h1>
        <p className="text-muted-foreground max-w-xs mx-auto">
          Estamos criando seu Plano de Treinamento de Ejercicios Kegel personalizado.
        </p>
      </div>

      <div className="relative w-48 h-48">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-muted/20" />
          <circle cx="50" cy="50" r="45" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-primary transition-all duration-75 ease-linear" strokeDasharray="283" strokeDashoffset={283 - (progress / 100) * 283} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-4xl font-bold text-foreground">{progress}%</span>
        </div>
      </div>

      <div className="space-y-3 text-sm text-muted-foreground w-full max-w-xs text-left mx-auto bg-card border-2 border-border p-4 rounded-xl shadow-sm">
        <p className="flex items-center gap-2">
          <Activity className={progress > 15 ? "text-primary transition-colors" : "text-muted transition-colors"} size={16} /> Verificando idade e biotipo...
        </p>
        <p className="flex items-center gap-2">
          <Activity className={progress > 45 ? "text-primary transition-colors" : "text-muted transition-colors"} size={16} /> Avaliando a força do músculo pélvico...
        </p>
        <p className="flex items-center gap-2">
          <Activity className={progress > 75 ? "text-primary transition-colors" : "text-muted transition-colors"} size={16} /> Estructurando rutina avanzada...
        </p>
      </div>
    </div>
  );
};

const QuizContainer: React.FC = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"enter" | "exit">("enter");
  const firedEvents = useRef<Set<string>>(new Set());

  const fireGa4 = useCallback((event: string, params?: Record<string, any>) => {
    const key = params ? `${event}_${JSON.stringify(params)}` : event;
    if (firedEvents.current.has(key)) return;
    firedEvents.current.add(key);
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", event, params);
    }
  }, []);

  // ─── TRACKING: register view when quiz opens ──────────────────────────────
  useEffect(() => {
    getSessionId();
    trackEtapa(1, 'idade', 'visualizou');
  }, []);

  // ─── TRACKING: register each step in Supabase ─────────────────────────────
  useEffect(() => {
    if (step === 1) return; // already registered as 'visualizou' on mount
    if (step > TOTAL_STEPS) return;
    const nome = ETAPA_NOMES[step] || `etapa-${step}`;
    const acao = step === TOTAL_STEPS ? 'completou' : 'avancou';
    trackEtapa(step, nome, acao);
  }, [step]);
  // ─────────────────────────────────────────────────────────────────────────

  const goNext = useCallback((value?: any) => {
    if (animating) return;
    if (value !== undefined) {
      setAnswers((prev) => ({ ...prev, [step]: value }));
    }
    if (step === TOTAL_STEPS) {
      trackEtapa(TOTAL_STEPS, ETAPA_NOMES[TOTAL_STEPS], 'completou');
    }
    setAnimating(true);
    setDirection("exit");
    setTimeout(() => {
      setStep((s) => Math.min(s + 1, TOTAL_STEPS + 2));
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

  if (step === TOTAL_STEPS + 1) {
    return <ProcessingScreen onComplete={() => setStep(TOTAL_STEPS + 2)} />;
  }

  if (step > TOTAL_STEPS + 1) {
    return <Navigate to="/oferta" state={{ nome: answers[31] || "Campeão" }} replace />;
  }

  const ageOptions = [
    { label: "18-30 anos", img: "/18.png" },
    { label: "31-45 anos", img: "/31.png" },
    { label: "46-55 anos", img: "/46.png" },
    { label: "+56 anos", img: "/56.png" },
  ];

  const bodyOptions = [
    { label: "Delgado", sub: "Metabolismo acelerado", img: "/Delgado.png" },
    { label: "Promedio", sub: "Composição equilibrada", img: "/Medio.png" },
    { label: "Sobrepeso", sub: "Tendência de acúmulo de gordura", img: "/acima_do_peso.png" },
  ];

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex justify-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" /> Questionário de 2 minutos
              </span>
            </div>
            <h2 className="text-lg font-bold text-foreground text-center leading-tight" style={{ animation: "fadeInUp 0.4s ease-out 100ms both" }}>
              Plano de exercícios para aumentar sua potência sexual de acordo com sua idade
            </h2>
            <p className="text-sm text-muted-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out 100ms both" }}>
              Selecione sua idade
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
              Ao escolher sua idade e continuar, aceite nossos <a href="#" className="underline hover:text-primary transition-colors">Términos de Serviço</a> | <a href="#" className="underline hover:text-primary transition-colors">Política de Privacidade</a>
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
              <img src="/etapa_3.png" alt="Resultados" className="w-full object-cover rounded-2xl drop-shadow-sm" loading="lazy" />
            </div>
            <p className="text-xl font-bold text-foreground leading-tight" style={{ animation: "fadeInUp 0.4s ease-out 150ms both" }}>
              Ajudamos mais de 150.000 homens a melhorar seu desempenho sexual
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
              Selecione todos os que você deseja aplicar
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
                Sua capacidade de durar mais tempo proporciona força e saúde aos músculos do solo pélvico.
              </p>
              <p className="font-bold text-foreground text-lg leading-snug">
                E quando mais envejece, mais débil se torna seu músculo masculino.
              </p>
              <p className="font-bold text-foreground text-lg leading-snug">
                Músculos fortes ajudam você a ter ereções duradouras, controlar a ejaculação e durar mais na cama.
              </p>
            </div>
            <div style={{ animation: "fadeInUp 0.4s ease-out 150ms both" }}>
              <img src="/etapa_5.png" alt="Músculo pélvico" className="w-full object-cover rounded-2xl drop-shadow-sm" loading="lazy" />
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
              Com que frequência você experimenta a ejaculação precoce?
            </h2>
            {["Nunca", "A veces", "La mayoría de las veces"].map((opt, i) => (
              <OptionCard key={opt} label={opt} selected={answers[7] === opt} onClick={() => selectOption(opt)} delay={i * 80} />
            ))}
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Qual é o seu nível de dificuldade para controlar durante o sexo?
            </h2>
            <ScaleSelector value={answers[8] || null} onChange={selectScale} lowLabel="Nenhuma dificuldade" highLabel="Muito difícil" />
          </div>
        );

      case 9:
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Qual é o seu nível de dificuldade para controlar durante a masturbação?
            </h2>
            <ScaleSelector value={answers[9] || null} onChange={selectScale} lowLabel="Nenhuma dificuldade" highLabel="Muito difícil" />
          </div>
        );

      case 10:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Quanto tempo você quer durar?
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
              Você já teve algum tipo de treinamento para o solo pélvico?
            </h2>
            {["Sí", "Não, mas já ouvi falar", "Nunca", "¿Qué é o solo pélvico?"].map((opt, i) => (
              <OptionCard key={opt} label={opt} selected={answers[11] === opt} onClick={() => selectOption(opt)} delay={i * 80} />
            ))}
          </div>
        );

      case 12:
        return (
          <div className="space-y-6 text-center">
            <div className="space-y-4" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              <p className="font-bold text-foreground text-xl leading-snug">
                O programa de exercícios de Nexor MEN ajuda a fortalecer os músculos do solo pélvico e pode aumentar o tempo de relacionamento até 7 vezes
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
              Como está a força da sua ereção?
            </h2>
            {["Todo bien", "A veces tenho dificuldades", "Tengo dificultades frecuentes"].map((opt, i) => (
              <OptionCard key={opt} label={opt} selected={answers[13] === opt} onClick={() => selectOption(opt)} delay={i * 80} />
            ))}
          </div>
        );

      case 14:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Há quanto tempo você tem essas dificuldades?
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
            {["Siempre", "Com frequência", "Raramente", "Nunca"].map((opt, i) => (
              <OptionCard key={opt} label={opt} selected={answers[15] === opt} onClick={() => selectOption(opt)} delay={i * 80} />
            ))}
          </div>
        );

      case 16:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Você tem dificuldades para conseguir uma ereção antes do sexo?
            </h2>
            {["Siempre", "Com frequência", "Raramente", "Nunca"].map((opt, i) => (
              <OptionCard key={opt} label={opt} selected={answers[16] === opt} onClick={() => selectOption(opt)} delay={i * 80} />
            ))}
          </div>
        );

      case 17:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Você consegue ter sexo várias vezes seguidas?
            </h2>
            {["Sí, sin dificultad", "Sí, pero con mucho esfuerzo", "No puedo"].map((opt, i) => (
              <OptionCard key={opt} label={opt} selected={answers[17] === opt} onClick={() => selectOption(opt)} delay={i * 80} />
            ))}
          </div>
        );

      case 18:
        return (
          <div className="space-y-6 text-center">
            <div className="space-y-4" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              <p className="font-bold text-foreground text-xl leading-snug">
                A qualidade da ereção está diretamente relacionada à força dos músculos do solo pélvico.
              </p>
            </div>
            <div style={{ animation: "fadeInUp 0.4s ease-out 150ms both" }}>
              <img src="/musculo.png" alt="Músculo pélvico" className="w-full object-cover rounded-2xl drop-shadow-sm" loading="lazy" />
            </div>
            <div className="space-y-3" style={{ animation: "fadeInUp 0.4s ease-out 250ms both" }}>
              <p className="text-sm text-foreground leading-relaxed">
                Um dos três músculos principais desta região, essencial para a saúde sexual masculina, <strong>é o músculo bulbocavernoso</strong>.
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                Ele permite que o pênis fique cheio de sangue e mantenha a firmeza.
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
                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-foreground italic">
                  "Depois de 3 semanas seguindo o plano, minha confiança mudou por completo. Puedo durar muito mais e minha pareja notou a diferença. Lo recomiendo a olhos cerrados."
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
              ¿Cómo es tu día a día?
            </h2>
            {[
              { label: "Trabalho de escritório", icon: <Briefcase className="w-5 h-5" /> },
              { label: "Caminhadas e atividades leves", icon: <Footprints className="w-5 h-5" /> },
              { label: "Trabalho físico pesado", icon: <HardHat className="w-5 h-5" /> },
              { label: "Me quedo en casa la mayor parte del tiempo", icon: <Home className="w-5 h-5" /> },
            ].map((opt, i) => (
              <OptionCard key={opt.label} label={opt.label} icon={opt.icon} selected={answers[20] === opt.label} onClick={() => selectOption(opt.label)} delay={i * 80} />
            ))}
          </div>
        );

      case 21:
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Qual é o seu nível de estresse diário?
            </h2>
            <ScaleSelector value={answers[21] || null} onChange={selectScale} lowLabel="Muito baixo" highLabel="Muito alto" />
          </div>
        );

      case 22:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Qual é o seu nível de atividade física?
            </h2>
            {["Hago exercício regularmente", "A veces faço exercícios", "Poco ativo", "Nunca hago exercício"].map((opt, i) => (
              <OptionCard key={opt} label={opt} icon={<Activity className="w-5 h-5" />} selected={answers[22] === opt} onClick={() => selectOption(opt)} delay={i * 80} />
            ))}
          </div>
        );

      case 23:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Quantas horas por dia em frente às telas?
            </h2>
            {["Menos de 1 hora", "1 a 2 horas", "2 a 4 horas", "4 a 8 horas", "Más de 8 horas"].map((opt, i) => (
              <OptionCard key={opt} label={opt} icon={<Monitor className="w-5 h-5" />} selected={answers[23] === opt} onClick={() => selectOption(opt)} delay={i * 60} />
            ))}
          </div>
        );

      case 24:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Qual é a sua frequência de consumo de pornografia?
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
              Selecione todos os que se aplicam
            </p>
            <MultiSelect
              options={["Fumar", "Consumo de álcool", "Consumo de doces", "Fast Food", "Ninguno de los anteriores"]}
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
              ¿Cuál es tu estado civil?
            </h2>
            {["Casado", "Em uma relação", "Soltero", "Prefiro não responder"].map((opt, i) => (
              <OptionCard key={opt} label={opt} selected={answers[26] === opt} onClick={() => selectOption(opt)} delay={i * 80} />
            ))}
          </div>
        );

      case 27:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Seu desejo sexual é motivo de preocupação em suas relações?
            </h2>
            {["Sim, grande preocupação", "Um pouco", "Não estou seguro", "Não"].map((opt, i) => (
              <OptionCard key={opt} label={opt} selected={answers[27] === opt} onClick={() => selectOption(opt)} delay={i * 80} />
            ))}
          </div>
        );

      case 28:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Qual é a sua frequência sexual mensal?
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
            <ScaleSelector value={answers[29] || null} onChange={selectScale} lowLabel="Muito baixo" highLabel="Muito alto" />
          </div>
        );

      case 30:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Você tentou soluções de efeito rápido (pastilhas, sprays, etc.)?
            </h2>
            {["Sí, com frequência", "Sí, algumas vezes", "Nunca tentei"].map((opt, i) => (
              <OptionCard key={opt} label={opt} selected={answers[30] === opt} onClick={() => selectOption(opt)} delay={i * 80} />
            ))}
          </div>
        );

      case 31:
        return (
          <div className="space-y-5">
            <h2 className="text-lg font-bold text-foreground text-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              Ingresa seu primeiro nome para personalizar seu plano
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
          <div className="space-y-6 text-center">
            <div className="flex justify-center" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
              <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-primary/20">
                <Shield className="w-3.5 h-3.5" /> Você está em boas mãos
              </span>
            </div>
            <div className="space-y-3" style={{ animation: "fadeInUp 0.4s ease-out 100ms both" }}>
              <h2 className="text-xl font-bold text-foreground leading-snug">
                Baseado em décadas de investigação científica
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nosso método é fundamentado em estudos das melhores universidades do mundo sobre saúde sexual masculina e fortalecimento do solo pélvico.
              </p>
            </div>
            <div style={{ animation: "fadeInUp 0.4s ease-out 200ms both" }}>
              <img src="/univercidade.png" alt="Universidades" className="w-full object-contain rounded-2xl drop-shadow-sm" loading="lazy" />
            </div>
            <button
              id="final-quiz-button"
              className="btn-finalizar-quiz w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base transition-all duration-300 hover:brightness-110 active:scale-[0.98] animate-pulse-slow"
              onClick={() => { goNext(); }}
              style={{ animation: "fadeInUp 0.4s ease-out 300ms both" }}
            >
              Continuar
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {step <= TOTAL_STEPS + 1 && (
        <QuizHeader currentStep={step} totalSteps={TOTAL_STEPS} isSticky={step <= TOTAL_STEPS + 1} />
      )}
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
