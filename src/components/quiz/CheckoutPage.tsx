import React, { useEffect } from "react";
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
  useEffect(() => {
    // Meta Pixel
    if (!(window as any).fbq) {
      const n = ((window as any).fbq = function (...args: any[]) {
        n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
      }) as any;
      (window as any)._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [] as any[];
      const t = document.createElement('script');
      t.async = true;
      t.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(t);
    }
    (window as any).fbq('init', '1505287261210886');
    (window as any).fbq('track', 'PageView');
  }, []);

  return (
    <div className="min-h-screen bg-white pb-16 font-sans">
      {/* Header Banner */}
      <div className="bg-white py-4 flex justify-center items-center relative z-10 border-b border-gray-100">
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
            Seu Treino Personalizado Para Elevar Sua Potência Sexual Está Pronto{name ? <span className="text-blue-600">, {name}</span> : ''}.
          </h1>
          <p className="text-gray-600 text-base max-w-lg mx-auto">
            Com base na sua análise, montamos o plano definitivo para recuperar sua masculinidade em semanas.
          </p>
        </div>

        {/* Imagem Antes e Depois */}
        <div className="rounded-2xl p-2 overflow-hidden" style={{ animation: "fadeInUp 0.5s ease-out 200ms both" }}>
           <img src="/antes-depois.jpg" alt="Transformação Esperada" className="w-full object-cover rounded-xl" />
        </div>

        {/* Progress Charts */}
        <div className="rounded-2xl p-6 sm:p-8 space-y-2 border border-gray-100" style={{ animation: "fadeInUp 0.5s ease-out 300ms both" }}>
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

          <div className="rounded-2xl overflow-hidden border border-gray-200">
            <div className="bg-green-600 py-3">
              <h3 className="text-white font-bold text-lg">Treino Personalizado Para Elevar Sua Potência</h3>
            </div>
            
            <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left w-full md:w-auto">
                 <h4 className="text-2xl font-bold text-gray-900">Plano Nexor Men</h4>
                 <p className="text-primary font-bold text-lg bg-primary/10 inline-block px-3 py-1 rounded-md mt-2">Exercícios Kegel</p>
              </div>

              <div className="bg-green-50 rounded-xl p-4 w-full md:w-auto text-right border border-green-100 flex flex-col justify-center items-end">
                 <div className="text-sm text-gray-500 line-through">De €24</div>
                 <div className="text-xs text-gray-500 mb-1">Por apenas</div>
                 <div className="flex items-baseline justify-end gap-0.5">
                    <span className="text-3xl font-bold text-green-700">€</span>
                    <span className="text-5xl font-black text-green-600 tracking-tighter">6,99</span>
                  </div>
                 <p className="text-xs text-green-700 font-semibold mt-1">💳 Pagamento único · Acesso vitalício</p>
              </div>
            </div>

            <div className="px-6 pb-8">
              <a 
                href="https://pay.hotmart.com/S105516336W?checkoutMode=10"
                className="hotmart-fb block w-full py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-extrabold text-xl uppercase transition-all shadow-[0_8px_20px_-6px_rgba(22,163,74,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(22,163,74,0.6)] hover:-translate-y-1 active:translate-y-0 active:shadow-none animate-pulse-slow text-center"
              >
                OBTER AGORA POR €6,99
              </a>
              
              {/* Security Badges under button */}
              <div className="flex items-center justify-center gap-4 mt-5">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-green-600" />
                  <span className="text-xs text-gray-600 font-medium">Checkout Seguro</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-gray-600 font-medium">Garantia 30 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Algorithm and Benefits Text */}
        <div className="space-y-6 py-6" style={{ animation: "fadeInUp 0.5s ease-out 450ms both" }}>
          <div className="rounded-2xl p-2 overflow-hidden max-h-[600px] flex items-end">
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
        <div className="rounded-2xl p-6 sm:p-8 border border-gray-100" style={{ animation: "fadeInUp 0.5s ease-out 500ms both" }}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">O que você vai ter acesso?</h3>
          <ul className="space-y-6">
            {[
              { 
                t: "Acesso a um programa avançado de exercícios de Kegel, com 3 sessões diárias estruturadas.", 
                d: "Recomendamos que você faça pelo menos 2 sessões por dia para acelerar os resultados." 
              },
              { 
                t: "Treinos específicos para fortalecer abdômen e pernas, regiões que aumentam seu desejo e melhoram diretamente seu desempenho sexual.", 
                d: "Você receberá exercícios intensos e direcionados para essas áreas." 
              },
              { 
                t: "Técnicas de respiração comprovadas, que reduzem tensão física e mental e aumentam seu controle e foco na hora H.", 
                d: "Essas técnicas foram adicionadas ao seu plano de forma simples e prática." 
              },
              { 
                t: "Um programa de bem-estar emocional, criado para melhorar sua autoconfiança e ajudar você a se sentir mais seguro e no controle.", 
                d: "" 
              },
              { 
                t: "Orientações personalizadas de especialistas em sexualidade, para melhorar seu desempenho, entender melhor sua parceira e trazer mais conexão e intensidade para sua vida sexual.", 
                d: "" 
              }
            ].map((ben, i) => (
              <li key={i} className="flex gap-3 items-start border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                <div className="mt-1 bg-green-100 p-1 rounded-full shrink-0">
                  <CheckIcon className="w-4 h-4 text-green-600" strokeWidth={3} />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-gray-900 leading-snug">
                    {ben.t}
                  </p>
                  {ben.d && (
                    <p className="text-xs text-gray-600 leading-relaxed italic">
                      {ben.d}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Secondary CTA Button */}
        <div className="pt-4" style={{ animation: "fadeInUp 0.5s ease-out 550ms both" }}>
           <a 
             href="https://pay.hotmart.com/S105516336W?checkoutMode=10"
             className="hotmart-fb block w-full py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-extrabold text-xl uppercase transition-all shadow-[0_8px_20px_-6px_rgba(22,163,74,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(22,163,74,0.6)] hover:-translate-y-1 active:translate-y-0 active:shadow-none text-center"
           >
              OBTER AGORA POR €6,99
            </a>
        </div>

        {/* New Guarantee Section */}
        <div className="space-y-6 pt-4 text-center" style={{ animation: "fadeInUp 0.5s ease-out 575ms both" }}>
          <div className="max-w-[400px] mx-auto overflow-hidden">
             <img src="/46.png" alt="Selo de Segurança" className="w-full object-contain" />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900">Garantia de 30 Dias</h3>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed max-w-md mx-auto">
              <p>Acreditamos que o nosso plano pode funcionar para si e obterá resultados visíveis dentro de 4 semanas!</p>
              <p>Estamos até prontos para devolver o seu dinheiro se não vir resultados visíveis e puder demonstrar que seguiu o nosso plano</p>
            </div>
          </div>
        </div>

        {/* Authority Logo with background */}
        <div className="pt-8 text-center" style={{ animation: "fadeInUp 0.5s ease-out 600ms both" }}>
          <div className="rounded-2xl p-4 max-w-sm mx-auto overflow-hidden">
             <img src="/logo-fundo.jpg" alt="Nexor MEN - Autoridade" className="w-full h-auto object-contain rounded-lg" />
          </div>
        </div>

        {/* Testimonials Marquee Section */}
        <div className="space-y-6 pt-6" style={{ animation: "fadeInUp 0.5s ease-out 625ms both" }}>
          <h3 className="text-lg font-bold text-gray-900 text-center px-4 leading-tight">
            Alguns dos nossos pacientes confirmam que escolher Nexor Men foi a melhor decisão de suas vidas:
          </h3>
          
          <div className="relative overflow-hidden py-6 -mx-4 sm:mx-0 border-y border-gray-100">
            {/* Gradient Overlays for smooth entry/exit */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 hidden sm:block"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 hidden sm:block"></div>
            
            <div className="flex animate-marquee-stop-go whitespace-nowrap gap-6">
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex gap-6 min-w-full items-center">
                  {[
                    { n: "Carlos M.", c: "Melhor decisão que tomei!" },
                    { n: "Ricardo Silva", c: "Resultados impressionantes em 2 semanas." },
                    { n: "João Paulo", c: "Minha confiança voltou, nota 10." },
                    { n: "André Santos", c: "Finalmente encontrei algo que funciona!" },
                    { n: "Luiz Ferreira", c: "Recomendo para todos, mudou meu casamento." },
                    { n: "Marcos Oliveira", c: "Estou muito satisfeito com o plano." },
                    { n: "Fernando Gomes", c: "As técnicas são fáceis e poderosas." },
                    { n: "Paulo Rocha", c: "Melhor investimento na minha saúde." },
                    { n: "Rodrigo Costa", c: "Não imaginava que seria tão rápido." },
                    { n: "Jorge Almeida", c: "Controle absoluto agora." },
                    { n: "Cláudio Ramos", c: "Sinto-me 10 anos mais jovem." },
                    { n: "Sérgio Lima", c: "Ótimo suporte e material de elite." },
                    { n: "Marcelo D.", c: "As sessões são curtas mas eficientes." },
                    { n: "Eduardo F.", c: "Vale cada centavo gasto!" }
                  ].map((item, i) => (
                    <div key={i} className="inline-block bg-white border border-gray-100 rounded-xl px-4 py-3 shrink-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                      </div>
                      <p className="text-xs font-bold text-gray-900 mb-0.5">{item.n}</p>
                      <p className="text-[11px] text-gray-600 whitespace-normal max-w-[200px] leading-tight">
                        "{item.c}"
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        

        {/* Closing Argument & Bonus Section */}
        <div className="space-y-10 py-8 px-4" style={{ animation: "fadeInUp 0.5s ease-out 675ms both" }}>
          <div className="space-y-6 text-center max-w-xl mx-auto">
            <p className="text-xl font-bold text-gray-900 leading-tight">
              Estamos ansiosos para você ser o próximo homem que foi transformado pelos nossos exercícios de Kegel.
            </p>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                Então faça a escolha certa. Se quiser continuar sem sua masculinidade, inseguro e esperando sua mulher terminar contigo, a escolha é sua.
              </p>
              <p className="font-medium text-gray-900">
                Mas, se quiser tomar a decisão que um homem tomaria, sem nenhum risco, clique no botão abaixo e venha fazer parte do grupo de homens que dá trabalho na cama para a mulher.
              </p>
            </div>
          </div>

          {/* Surprise Gift Box */}
          <div className="bg-orange-50 border-2 border-dashed border-orange-200 rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden">
            <h4 className="text-2xl font-black text-orange-600 mb-4 uppercase tracking-wider">
              🎁 Presente Surpresa:
            </h4>
            
            <div className="space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
              <p className="font-bold text-orange-900">
                Durante as próximas 24 horas, temos um bônus reservado para novos clientes.
              </p>
              <p>
                Os primeiros homens que aderirem ao programa vão receber um conteúdo extra, cuidadosamente selecionado para complementar os exercícios.
              </p>
              <p className="text-sm text-gray-600 italic">
                Não vamos revelar já o que é — você vai receber todos os detalhes por e-mail após a confirmação.
              </p>
              <p className="font-bold text-gray-900 pt-2 text-xl">
                Sem complicações.
              </p>
              <p className="text-orange-700 font-extrabold items-center justify-center gap-2 flex flex-col pt-4">
                <span className="animate-bounce text-3xl">↓</span>
                Clica no botão abaixo e finaliza o teu acesso por apenas €6,99
              </p>
            </div>
          </div>
          {/* Final CTA Button for Bonus */}
          <div className="pt-2">
             <a 
               href="https://pay.hotmart.com/S105516336W?checkoutMode=10"
               className="hotmart-fb block w-full py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-extrabold text-xl uppercase transition-all shadow-[0_8px_20px_-6px_rgba(22,163,74,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(22,163,74,0.6)] hover:-translate-y-1 active:translate-y-0 active:shadow-none animate-pulse-slow text-center"
             >
                OBTER AGORA POR €6,99
              </a>
          </div>
        </div>

        {/* 30 Day Guarantee */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 sm:p-8 text-center space-y-4" style={{ animation: "fadeInUp 0.5s ease-out 700ms both" }}>
          <h3 className="text-2xl font-extrabold text-blue-900">Garantia Incondicional de 30 Dias</h3>
          <p className="text-sm text-blue-800 max-w-md mx-auto leading-relaxed">
            Acreditamos tanto no nosso plano que oferecemos resultados visíveis ou seu dinheiro de volta. Você tem 30 dias para testar a rotina. Se não notar uma evolução clara na sua potência, devolvemos 100% do seu investimento. Sem perguntas.
          </p>
        </div>

        {/* FAQ Area */}
        <div className="rounded-2xl p-6 sm:p-8 border border-gray-100" style={{ animation: "fadeInUp 0.5s ease-out 800ms both" }}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Perguntas Frequentes</h3>
          <Accordion type="single" collapsible className="space-y-3 w-full border-none">
            {[
              { q: "O método é seguro? Meus dados estão protegidos?", a: "Sim, utilizamos criptografia de ponta a ponta e jamais venderemos suas informações para terceiros. O pagamento é 100% seguro." },
              { q: "Em quanto tempo verei resultados?", a: "A maior parte dos usuários relata melhorias claras de força e controle entre as primeiras semanas de prática consistente da nossa rotina de exercícios." },
              { q: "Vou precisar comprar algum equipamento?", a: "Não. Nosso método foca no corpo e nos exercícios de contração que podem ser realizados em qualquer lugar, de graça." },
              { q: "Depois de 7 dias fazendo os exercícios de Kegel, já consegui durar 20 minutos a mais. Isso é normal?", a: "Dr. Mark Tyler: Sim! Os exercícios são muito poderosos e seu corpo reagiu muito bem ao programa. Para resultados grandes e permanentes, recomendamos seguir o programa de 30 a 90 dias. Se nos primeiros dias você não sentir resultados incríveis, continue! O progresso constante é normal." },
              { q: "Eu também tinha problemas para urinar e, depois do programa Nexor MEN, isso sumiu. É comum?", a: "Dr. Mark Tyler: Sim, não se assuste! Um assoalho pélvico forte melhora a saúde geral da região, incluindo o sistema urinário. Por isso, é normal notar melhorias significativas em outras áreas também." },
              { q: "Não quero que minha esposa saiba do tratamento. O que devo fazer?", a: "Dr. Mark Tyler: Pode ficar tranquilo! Mantemos 100% de sigilo sobre seu tratamento. Na fatura do cartão, usamos um nome discreto e os exercícios são parecidos com treinos de academia — ninguém vai desconfiar que é para outra coisa." },
              { q: "E se não funcionar para mim?", a: "Dr. Mark Tyler: Entendemos que cada homem é único. Por isso o programa é personalizado para cada caso. Até agora, ninguém ficou insatisfeito, mas caso você não veja resultados, oferecemos 30 dias de garantia especial para pedir seu dinheiro de volta. Sem perguntas, sem complicações." },
              { q: "Como posso começar a recuperar minha performance sexual?", a: "Dr. Mark Tyler: O primeiro passo é simples: clique no botão abaixo e siga para começar. Assim como mais de 1 milhão de homens que já passaram pelo programa, você também terá resultados significativos e ficará satisfeito com sua nova performance." },
              { q: "Onde vou receber o acesso ao programa?", a: "Você vai receber o acesso completo diretamente no seu e-mail após confirmar o pagamento. Basta verificar sua caixa de entrada (e a pasta de spam, por precaução) e seguir as instruções para começar imediatamente." }
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
           <a 
             href="https://pay.hotmart.com/S105516336W?checkoutMode=10"
             className="hotmart-fb block w-full py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-extrabold text-xl uppercase transition-all shadow-[0_8px_20px_-6px_rgba(22,163,74,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(22,163,74,0.6)] hover:-translate-y-1 active:translate-y-0 active:shadow-none text-center"
           >
              OBTER AGORA POR €6,99
            </a>
           <p className="text-center text-xs text-gray-500 mt-4">
             Acesso imediato ao material pelo e-mail
           </p>
        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;
