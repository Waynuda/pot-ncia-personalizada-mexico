import React from "react";
import CountdownTimer from "./CountdownTimer";
import ComparisonChart from "./ComparisonChart";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Lock, CheckCircle, Star, Zap } from "lucide-react";

interface CheckoutPageProps {
  name: string;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ name }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-3 text-center">
        <p className="text-sm font-medium">⏰ Oferta exclusiva expira em:</p>
        <CountdownTimer minutes={10} />
      </div>

      <div className="max-w-lg mx-auto px-4 py-8 space-y-8">
        {/* Headline */}
        <div className="text-center space-y-3" style={{ animation: "fadeInUp 0.5s ease-out both" }}>
          <h1 className="text-2xl font-bold text-foreground leading-tight">
            Seu Treino Personalizado Para Elevar Sua Potência Sexual Está Pronto, <span className="text-primary">{name}</span>.
          </h1>
          <p className="text-sm text-muted-foreground">
            Com base nas suas respostas, preparamos um plano específico para as suas necessidades.
          </p>
        </div>

        {/* Transformation Chart */}
        <div className="bg-card border border-border rounded-2xl p-5 space-y-4" style={{ animation: "fadeInUp 0.5s ease-out 200ms both" }}>
          <h3 className="text-base font-bold text-foreground text-center">Sua Transformação Esperada</h3>
          <ComparisonChart
            data={[
              { label: "Desempenho", before: 20, after: 90 },
              { label: "Confiança", before: 25, after: 85 },
              { label: "Controle", before: 15, after: 92 },
            ]}
          />
        </div>

        {/* Pricing Cards */}
        <div className="space-y-4" style={{ animation: "fadeInUp 0.5s ease-out 400ms both" }}>
          <h3 className="text-base font-bold text-foreground text-center">Escolha seu plano</h3>

          {/* Basic Plan */}
          <div className="border-2 border-border rounded-2xl p-5 space-y-3 hover:border-primary/50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-foreground">Plano Básico</h4>
              <span className="bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-1 rounded-full">POPULAR</span>
            </div>
            <p className="text-xs text-muted-foreground">Acesso ao treino completo de fortalecimento pélvico</p>
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-muted-foreground line-through">R$ 194</span>
              <span className="text-3xl font-bold text-primary">R$ 97</span>
            </div>
            <ul className="space-y-1.5">
              {["Plano de 28 dias", "Vídeos explicativos", "Suporte por e-mail"].map(f => (
                <li key={f} className="flex items-center gap-2 text-xs text-foreground">
                  <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold transition-all hover:brightness-110 active:scale-[0.98]">
              Quero Este Plano
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border-2 border-primary rounded-2xl p-5 space-y-3 relative overflow-hidden cursor-pointer shadow-lg">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-bl-xl">
              MELHOR VALOR
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <h4 className="font-bold text-foreground">Plano Premium (Combo)</h4>
            </div>
            <p className="text-xs text-muted-foreground">Treino completo + Mente Blindada + Bônus exclusivos</p>
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-muted-foreground line-through">R$ 294</span>
              <span className="text-3xl font-bold text-primary">R$ 147</span>
            </div>
            <ul className="space-y-1.5">
              {[
                "Tudo do Plano Básico",
                "Módulo Mente Blindada",
                "Bônus: Guia de Alimentação",
                "Bônus: Técnicas Avançadas",
                "Suporte prioritário",
              ].map(f => (
                <li key={f} className="flex items-center gap-2 text-xs text-foreground">
                  <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-base transition-all hover:brightness-110 active:scale-[0.98] animate-pulse-slow">
              Quero o Combo Premium
            </button>
          </div>
        </div>

        {/* Security Badges */}
        <div className="flex items-center justify-center gap-6 py-4" style={{ animation: "fadeInUp 0.5s ease-out 600ms both" }}>
          <div className="flex flex-col items-center gap-1">
            <Lock className="w-6 h-6 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground font-medium">Checkout Seguro</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Shield className="w-6 h-6 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground font-medium">Dados Protegidos</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <CheckCircle className="w-6 h-6 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground font-medium">Garantia 7 dias</span>
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-3" style={{ animation: "fadeInUp 0.5s ease-out 700ms both" }}>
          <h3 className="text-base font-bold text-foreground text-center">O que dizem nossos alunos</h3>
          {[
            { name: "Carlos M.", age: 42, text: "Em 2 semanas já senti uma diferença enorme. Minha esposa está mais feliz do que nunca." },
            { name: "André L.", age: 38, text: "Já tentei de tudo. Esse foi o único método que realmente funcionou sem efeitos colaterais." },
            { name: "Felipe R.", age: 29, text: "Achei que era papo, mas decidi testar. Melhor decisão que tomei. Recomendo!" },
          ].map((t, i) => (
            <div key={t.name} className="bg-accent rounded-xl p-4 space-y-2" style={{ animation: `fadeInUp 0.4s ease-out ${700 + i * 100}ms both` }}>
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-primary text-primary" />)}
              </div>
              <p className="text-sm text-foreground italic">"{t.text}"</p>
              <p className="text-xs font-bold text-muted-foreground">— {t.name}, {t.age} anos</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="space-y-3" style={{ animation: "fadeInUp 0.5s ease-out 900ms both" }}>
          <h3 className="text-base font-bold text-foreground text-center">Perguntas Frequentes</h3>
          <Accordion type="single" collapsible className="space-y-2">
            {[
              { q: "É seguro? Meus dados estão protegidos?", a: "Sim! Utilizamos criptografia de ponta e seus dados jamais são compartilhados com terceiros." },
              { q: "Em quanto tempo vou ver resultados?", a: "A maioria dos usuários relata melhorias perceptíveis entre 7 e 14 dias de treino consistente." },
              { q: "Preciso de equipamento?", a: "Não! Todos os exercícios são feitos apenas com o corpo, sem necessidade de nenhum equipamento." },
              { q: "Funciona para qualquer idade?", a: "Sim. O plano é adaptado para a sua faixa etária e nível de condicionamento." },
              { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Se não estiver satisfeito, devolvemos 100% do seu investimento." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-3">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Final CTA */}
        <div className="text-center space-y-3 pb-8" style={{ animation: "fadeInUp 0.5s ease-out 1000ms both" }}>
          <button className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg transition-all hover:brightness-110 active:scale-[0.98] animate-pulse-slow shadow-lg">
            Começar Meu Treino Agora
          </button>
          <p className="text-xs text-muted-foreground">
            🔒 Checkout 100% seguro · Garantia de 7 dias
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
