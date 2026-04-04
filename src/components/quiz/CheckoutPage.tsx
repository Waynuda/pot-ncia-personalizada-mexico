import React from "react";
import CountdownTimer from "./CountdownTimer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Lock, CheckCircle, Star, CheckIcon, ShieldCheck } from "lucide-react";

interface CheckoutPageProps {
  name: string;
}

const ProgressBar = ({ label, before, after, colorClass }: { label: string, before: number, after: number, colorClass: string }) => (
  <div className="space-y-1 mb-4">
    <div className="flex justify-between items-end text-sm">
      <span className="font-semibold text-foreground">{label}</span>
    </div>
    <div className="flex items-center gap-3">
      <span className="text-xs text-muted-foreground w-12 shrink-0">Antes</span>
      <div className="flex-1 h-3.5 bg-muted rounded-full overflow-hidden flex">
        <div className={`h-full ${colorClass} opacity-40 rounded-full`} style={{ width: `${before}%` }}></div>
      </div>
      <span className="text-xs font-bold text-muted-foreground shrink-0 w-8">{before}%</span>
    </div>
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold text-primary w-12 shrink-0">Depois</span>
      <div className="flex-1 h-3.5 bg-muted rounded-full overflow-hidden flex relative">
        <div className={`h-full ${colorClass} rounded-full transition-all duration-1000 ease-out`} style={{ width: `${after}%` }}></div>
      </div>
      <span className="text-xs font-bold text-foreground shrink-0 w-8">{after}%</span>
    </div>
  </div>
);

const CheckoutPage: React.FC<CheckoutPageProps> = ({ name }) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16 font-sans">
      {/* Header Banner */}
      <div className="bg-white py-4 shadow-sm flex justify-center items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Nexor MEN" className="h-8" />
          <span className="text-xl font-black text-gray-900 tracking-tight"><span className="text-primary">NEXOR</span> MEN</span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-6 pb-12 space-y-8">
        {/* Timer Banner */}
        <div className="bg-green-100 text-green-800 py-3 px-4 text-center rounded-lg border border-green-200 flex items-center justify-center gap-2" style={{ animation: "fadeInUp 0.4s ease-out both" }}>
          <span className="text-sm font-medium">Oferta por tempo limitado!</span>
          <span className="text-sm font-bold bg-green-200 px-2 py-0.5 rounded text-green-900 border border-green-300 scale-75 origin-left">
             <CountdownTimer minutes={10} />
          </span>
        </div>

        {/* Headline */}
        <div className="text-center space-y-4" style={{ animation: "fadeInUp 0.5s ease-out 100ms both" }}>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Seu Treino Personalizado Para Elevar Sua Potência Sexual Está Pronto{name ? `, ${name}` : ''}.
          </h1>
          <p className="text-gray-600 text-base max-w-lg mx-auto">
            Com base na sua análise, montamos o plano definitivo para recuperar sua masculinidade em semanas.
          </p>
        </div>

        {/* Imagem Antes e Depois */}
        <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100 overflow-hidden" style={{ animation: "fadeInUp 0.5s ease-out 200ms both" }}>
           <img src="/antes-depois.jpg" alt="Transformação Esperada" className="w-full object-cover rounded-xl" />
        </div>

        {/* Progress Charts */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 sm:p-8 space-y-2" style={{ animation: "fadeInUp 0.5s ease-out 300ms both" }}>
          <h3 className="text-xl font-bold text-gray-900 text-center mb-6">Projeção da sua evolução:</h3>
          <ProgressBar label="Desempenho Sexual" before={20} after={90} colorClass="bg-blue-600" />
          <ProgressBar label="Autoconfiança" before={15} after={94} colorClass="bg-green-500" />
          <ProgressBar label="Controle da Ejaculação" before={37} after={89} colorClass="bg-orange-500" />
        </div>

        {/* Offer Box */}
        <div className="text-center" style={{ animation: "fadeInUp 0.5s ease-out 400ms both" }}>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            Adquira agora o seu plano e tenha sua masculinidade de volta em semanas
          </h2>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-green-600 py-3">
              <h3 className="text-white font-bold text-lg">Treino Personalizado Para Elevar Sua Potência</h3>
            </div>
            
            <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left w-full md:w-auto">
                 <h4 className="text-2xl font-bold text-gray-900">Plano Nexor Men</h4>
                 <p className="text-primary font-bold text-lg bg-primary/10 inline-block px-3 py-1 rounded-md mt-2">Exercícios Kegel</p>
              </div>

              <div className="bg-green-50 rounded-xl p-4 w-full md:w-auto text-right border border-green-100 flex flex-col justify-center items-end">
                 <div className="text-sm text-gray-500 line-through">De R$ 194</div>
                 <div className="text-xs text-gray-500 mb-1">Por apenas</div>
                 <div className="flex items-baseline justify-end gap-1">
                   <span className="text-2xl font-bold text-green-700">R$</span>
                   <span className="text-5xl font-black text-green-600 tracking-tighter">97</span>
                 </div>
                 <div className="text-xs text-gray-500 mt-1">ou 12x de R$ 9,74</div>
              </div>
            </div>

            <div className="px-6 pb-8">
              <button className="w-full py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-extrabold text-xl uppercase transition-all shadow-[0_8px_20px_-6px_rgba(22,163,74,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(22,163,74,0.6)] hover:-translate-y-1 active:translate-y-0 active:shadow-none animate-pulse-slow">
                Comprar Agora
              </button>
              
              {/* Security Badges under button */}
              <div className="flex items-center justify-center gap-4 mt-5">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-green-600" />
                  <span className="text-xs text-gray-600 font-medium">Checkout Seguro</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-green-600" />
                  <span className="text-xs text-gray-600 font-medium">Garantia 30 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Algorithm and Benefits Text */}
        <div className="space-y-6 py-6" style={{ animation: "fadeInUp 0.5s ease-out 450ms both" }}>
          <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100 overflow-hidden max-h-[320px] flex items-end">
             <img src="/etapa_3_opt.jpg" alt="Plano de Ação" className="w-full object-cover rounded-xl object-bottom" />
          </div>
          
          <div className="text-center">
            <p className="text-xl font-bold text-gray-900 leading-tight">
              Aqui está seu plano para aumentar a potência sexual
            </p>
          </div>
          
          <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed text-center sm:text-left">
            <p>
              Nosso algoritmo inteligente gerou um plano totalmente personalizado com base nos seus objetivos.
            </p>
            <p>
              Com os exercícios personalizados de Kegel você melhora as cinco áreas essenciais da saúde sexual para conseguir durar mais, ter melhores ereções e mais controle na hora do sexo.
            </p>
            <p>
              Cobertura completa das cinco áreas essenciais da saúde sexual para ajudar você a durar mais, melhorar ereções e ter mais controle.
            </p>
            <p>
              Todos os métodos são aprovados e apoiados pela <strong>Universidade de Harvard</strong>, junto aos principais Médicos de todo o mundo.
            </p>
            <p>
              Tudo porque Nexor Men te entrega as ferramentas práticas e o suporte contínuo com os principais especialistas na área sexual masculina para fortalecer sua confiança e evoluir dia após dia.
            </p>
            <p>
              Tudo para fazer em casa, no seu ritmo, sem constrangimento e sem usar nenhum remédio.
            </p>
          </div>
        </div>

        {/* Benefits List */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100" style={{ animation: "fadeInUp 0.5s ease-out 500ms both" }}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">O que você vai ter acesso?</h3>
          <ul className="space-y-4">
            {[
              { t: "Acesso a um programa avançado de exercícios de Kegel,", d: "com rotinas diárias estruturadas passo a passo." },
              { t: "Treinos específicos para fortalecer abdômen e pernas,", d: "regiões que aumentam seu desejo e melhoram diretamente seu desempenho." },
              { t: "Técnicas de controle comprovadas,", d: "que reduzem tensão física e mental e aumentam seu foco." },
              { t: "Um programa de bem-estar integrado,", d: "criado para melhorar sua autoconfiança e te devolver o domínio da situação." }
            ].map((ben, i) => (
              <li key={i} className="flex gap-3 items-start">
                <div className="mt-1 bg-green-100 p-1 rounded-full shrink-0">
                  <CheckIcon className="w-4 h-4 text-green-600" strokeWidth={3} />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">{ben.t}</strong> {ben.d}
                </p>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Testimonials */}
        <div className="space-y-5" style={{ animation: "fadeInUp 0.5s ease-out 600ms both" }}>
          <h3 className="text-2xl font-bold text-gray-900 text-center">Resultados de quem já testou</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Carlos M.", age: 42, t: "Minha confiança mudou completamente. Consigo durar muito mais e minha esposa percebeu a diferença logo nas primeiras semanas." },
              { name: "André L.", age: 38, t: "Esse foi o único método que realmente funcionou para mim sem nenhum efeito colateral indesejado. Vale cada centavo." }
            ].map(t => (
              <div key={t.name} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-sm text-gray-700 italic mb-4">"{t.t}"</p>
                </div>
                <p className="text-xs font-bold text-gray-900">— {t.name}, {t.age} anos</p>
              </div>
            ))}
          </div>
        </div>

        {/* 30 Day Guarantee */}
        <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-sm relative overflow-hidden" style={{ animation: "fadeInUp 0.5s ease-out 700ms both" }}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -mr-10 -mt-10 opacity-50 pointer-events-none"></div>
          
          <ShieldCheck className="w-16 h-16 text-blue-600 mx-auto" />
          <h3 className="text-2xl font-extrabold text-blue-900">Garantia Incondicional de 30 Dias</h3>
          <p className="text-sm text-blue-800 max-w-md mx-auto leading-relaxed">
            Acreditamos tanto no nosso plano que oferecemos resultados visíveis ou seu dinheiro de volta. Você tem 30 dias para testar a rotina. Se não notar uma evolução clara na sua potência, devolvemos 100% do seu investimento. Sem perguntas.
          </p>
        </div>

        {/* FAQ Area */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100" style={{ animation: "fadeInUp 0.5s ease-out 800ms both" }}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Perguntas Frequentes</h3>
          <Accordion type="single" collapsible className="space-y-3 w-full border-none">
            {[
              { q: "O método é seguro? Meus dados estão protegidos?", a: "Sim, utilizamos criptografia de ponta a ponta e jamais venderemos suas informações para terceiros. O pagamento é 100% seguro." },
              { q: "Em quanto tempo verei resultados?", a: "A maior parte dos usuários relata melhorias claras de força e controle entre as primeiras semanas de prática consistente da nossa rotina de exercícios." },
              { q: "Vou precisar comprar algum equipamento?", a: "Não. Nosso método foca no corpo e nos exercícios de contração que podem ser realizados em qualquer lugar, de graça." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-gray-200 rounded-xl px-5 bg-gray-50/50">
                <AccordionTrigger className="text-sm font-bold text-gray-900 hover:no-underline py-4 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700 leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA Block */}
        <div className="pb-10 pt-4" style={{ animation: "fadeInUp 0.5s ease-out 900ms both" }}>
           <button className="w-full py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-extrabold text-xl uppercase transition-all shadow-[0_8px_20px_-6px_rgba(22,163,74,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(22,163,74,0.6)] hover:-translate-y-1 active:translate-y-0 active:shadow-none">
             Quero Fazer Minha Inscrição
           </button>
           <p className="text-center text-xs text-gray-500 mt-4">
             Acesso imediato ao material pelo e-mail
           </p>
        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;
