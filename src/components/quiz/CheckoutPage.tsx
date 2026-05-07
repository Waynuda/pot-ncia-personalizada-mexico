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
      <span className="text-xs font-semibold text-primary w-12 shrink-0">Después</span>
      <div className="flex-1 h-3.5 bg-muted rounded-full overflow-hidden flex relative">
        <div className={`h-full ${colorClass} rounded-full transition-all duration-1000 ease-out`} style={{ width: `${after}%` }}></div>
      </div>
      <span className="text-xs font-bold text-foreground shrink-0 w-8">{after}%</span>
    </div>
  </div>
);

const CheckoutPage: React.FC<CheckoutPageProps> = ({ name }) => {

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
          <span className="text-sm font-medium">¡Oferta por tiempo limitado!</span>
          <span className="text-sm font-bold bg-green-200 px-2 py-0.5 rounded text-green-900 border border-green-300 scale-75 origin-left">
             <CountdownTimer minutes={10} />
          </span>
        </div>

        {/* Headline */}
        <div className="text-center space-y-4" style={{ animation: "fadeInUp 0.5s ease-out 100ms both" }}>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Tu Entrenamiento Personalizado Para Elevar Tu Potencia Sexual Está Listo{name ? <span className="text-blue-600">, {name}</span> : ''}.
          </h1>
          <p className="text-gray-600 text-base max-w-lg mx-auto">
            Con base en tu análisis, hemos creado el plan definitivo para recuperar tu masculinidad en semanas.
          </p>
        </div>

        {/* Imagem Antes e Después */}
        <div className="rounded-2xl p-2 overflow-hidden" style={{ animation: "fadeInUp 0.5s ease-out 200ms both" }}>
           <img src="/antes-depois.jpg" alt="Transformação Esperada" className="w-full object-cover rounded-xl" />
        </div>

        {/* Progress Charts */}
        <div className="rounded-2xl p-6 sm:p-8 space-y-2 border border-gray-100" style={{ animation: "fadeInUp 0.5s ease-out 300ms both" }}>
          <h3 className="text-xl font-bold text-gray-900 text-center mb-6">Proyección de tu evolución:</h3>
          <ProgressBar label="Desempeño Sexual" before={20} after={90} colorClass="bg-blue-600" />
          <ProgressBar label="Autoconfianza" before={15} after={94} colorClass="bg-green-500" />
          <ProgressBar label="Control de la Eyaculación" before={37} after={89} colorClass="bg-orange-500" />
        </div>

        {/* Offer Box */}
        <div className="text-center" style={{ animation: "fadeInUp 0.5s ease-out 400ms both" }}>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            Adquiere ahora tu plan y recupera tu masculinidad en semanas
          </h2>

          <div className="rounded-2xl overflow-hidden border border-gray-200">
            <div className="bg-green-600 py-3">
              <h3 className="text-white font-bold text-lg">Entrenamiento Personalizado Para Elevar Tu Potencia</h3>
            </div>
            
            <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left w-full md:w-auto">
                 <h4 className="text-2xl font-bold text-gray-900">Plan Nexor Men</h4>
                 <p className="text-primary font-bold text-lg bg-primary/10 inline-block px-3 py-1 rounded-md mt-2">Ejercicios Kegel</p>
              </div>

              <div className="bg-green-50 rounded-xl p-4 w-full md:w-auto text-right border border-green-100 flex flex-col justify-center items-end">
                 <div className="text-sm text-gray-500 line-through">De $2</div>
                 <div className="text-xs text-gray-500 mb-1">Por solo</div>
                 <div className="flex items-baseline justify-end gap-0.5">
                    <span className="text-3xl font-bold text-green-700">$</span>
                    <span className="text-5xl font-black text-green-600 tracking-tighter">6.99</span>
                  </div>
                 <p className="text-xs text-green-700 font-semibold mt-1">💳 Pago único · Acceso vitalicio</p>
              </div>
            </div>

            <div className="px-6 pb-8">
              <a 
                href="https://pay.hotmart.com/S105516336W?checkoutMode=10"
                className="hotmart-fb block w-full py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-extrabold text-xl uppercase transition-all shadow-[0_8px_20px_-6px_rgba(22,163,74,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(22,163,74,0.6)] hover:-translate-y-1 active:translate-y-0 active:shadow-none animate-pulse-slow text-center"
              >
                OBTENER AHORA POR $6.99 USD
              </a>
              
              {/* Security Badges under button */}
              <div className="flex items-center justify-center gap-4 mt-5">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-green-600" />
                  <span className="text-xs text-gray-600 font-medium">Checkout Seguro</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-gray-600 font-medium">Garantía de 30 días</span>
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
              Aquí tienes tu plan para aumentar la potencia sexual
            </p>
          </div>
          
          <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed text-center sm:text-left">
            <p>
              Nuestro algoritmo inteligente ha generado un plan totalmente personalizado basado en tus objetivos.
            </p>
            <p>
              Con los ejercicios personalizados de Kegel mejoras las cinco áreas esenciales de la salud sexual para lograr durar más, tener mejores erecciones y más control en el sexo.
            </p>
            <p>
              Cobertura completa de las cinco áreas esenciales de la salud sexual para ayudarte a durar más, mejorar las erecciones y tener más control.
            </p>
            <p>
              Todos los métodos están aprobados y respaldados por la <strong>Universidad de Harvard</strong>, junto a los principales médicos de todo el mundo.
            </p>
            <p>
              Todo porque Nexor Men te entrega las herramientas prácticas y el soporte continuo con los principales especialistas en el área sexual masculina para fortalecer tu confianza y evolucionar día a día.
            </p>
            <p>
              Todo para hacer en casa, a tu ritmo, sin vergüenza y sin usar ningún medicamento.
            </p>
          </div>
        </div>

        {/* Benefits List */}
        <div className="rounded-2xl p-6 sm:p-8 border border-gray-100" style={{ animation: "fadeInUp 0.5s ease-out 500ms both" }}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">¿A qué tendrás acceso?</h3>
          <ul className="space-y-6">
            {[
              { 
                t: "Acceso a un programa avanzado de ejercicios de Kegel, con 3 sesiones diarias estructuradas.", 
                d: "Te recomendamos que hagas al menos 2 sesiones al día para acelerar los resultados." 
              },
              { 
                t: "Entrenamientos específicos para fortalecer abdomen y piernas, zonas que aumentan tu deseo y mejoran directamente tu desempeño sexual.", 
                d: "Recibirás ejercicios intensos y dirigidos a estas áreas." 
              },
              { 
                t: "Técnicas de respiración comprobadas, que reducen la tensión física y mental y aumentan tu control y enfoque en el momento clave.", 
                d: "Estas técnicas se han añadido a tu plan de forma sencilla y práctica." 
              },
              { 
                t: "Un programa de bienestar emocional, diseñado para mejorar tu autoconfianza y ayudarte a sentirte más seguro y en control.", 
                d: "" 
              },
              { 
                t: "Orientaciones personalizadas de especialistas en sexualidad, para mejorar tu desempeño, entender mejor a tu pareja y aportar más conexión e intensidad a tu vida sexual.", 
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
              OBTENER AHORA POR $149
            </a>
        </div>

        {/* New Guarantee Section */}
        <div className="space-y-6 pt-4 text-center" style={{ animation: "fadeInUp 0.5s ease-out 575ms both" }}>
          <div className="max-w-[400px] mx-auto overflow-hidden">
             <img src="/46.png" alt="Selo de Segurança" className="w-full object-contain" />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-900">Garantía de 30 Días</h3>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed max-w-md mx-auto">
              <p>¡Creemos que nuestro plan puede funcionar para ti y obtendrás resultados visibles en 4 semanas!</p>
              <p>Incluso estamos dispuestos a devolverte tu dinero si no ves resultados visibles y puedes demostrar que seguiste nuestro plan</p>
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
            Algunos de nuestros pacientes confirman que elegir Nexor Men fue la mejor decisión de sus vidas:
          </h3>
          
          <div className="relative overflow-hidden py-6 -mx-4 sm:mx-0 border-y border-gray-100">
            {/* Gradient Overlays for smooth entry/exit */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 hidden sm:block"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 hidden sm:block"></div>
            
            <div className="flex animate-marquee-stop-go whitespace-nowrap gap-6">
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex gap-6 min-w-full items-center">
                  {[
                    { n: "Carlos M.", c: "¡La mejor decisión que he tomado!" },
                    { n: "Ricardo Silva", c: "Resultados impresionantes en 2 semanas." },
                    { n: "João Paulo", c: "Mi confianza volvió, de 10." },
                    { n: "André Santos", c: "¡Finalmente encontré algo que funciona!" },
                    { n: "Luiz Ferreira", c: "Lo recomiendo a todos, cambió mi matrimonio." },
                    { n: "Marcos Oliveira", c: "Estoy muy satisfecho con el plan." },
                    { n: "Fernando Gomes", c: "Las técnicas son fáciles y poderosas." },
                    { n: "Paulo Rocha", c: "La mejor inversión en mi salud." },
                    { n: "Rodrigo Costa", c: "No imaginaba que sería tan rápido." },
                    { n: "Jorge Almeida", c: "Control absoluto ahora." },
                    { n: "Cláudio Ramos", c: "Me siento 10 años más joven." },
                    { n: "Sérgio Lima", c: "Excelente soporte y material de élite." },
                    { n: "Marcelo D.", c: "Las sesiones son cortas pero eficientes." },
                    { n: "Eduardo F.", c: "¡Vale cada centavo gastado!" }
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
              Estamos ansiosos de que seas el próximo hombre transformado por nuestros ejercicios de Kegel.
            </p>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                Así que toma la decisión correcta. Si quieres continuar sin tu masculinidad, inseguro y esperando a que tu mujer te deje, la elección es tuya.
              </p>
              <p className="font-medium text-gray-900">
                Pero si quieres tomar la decisión que un hombre tomaría, sin ningún riesgo, haz clic en el botón de abajo y únete al grupo de hombres que dan la talla en la cama.
              </p>
            </div>
          </div>

          {/* Surprise Gift Box */}
          <div className="bg-orange-50 border-2 border-dashed border-orange-200 rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden">
            <h4 className="text-2xl font-black text-orange-600 mb-4 uppercase tracking-wider">
              🎁 Regalo Sorpresa:
            </h4>
            
            <div className="space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
              <p className="font-bold text-orange-900">
                Durante las próximas 24 horas, tenemos un bono reservado para nuevos clientes.
              </p>
              <p>
                Los primeros hombres que se unan al programa recibirán contenido extra, cuidadosamente seleccionado para complementar los ejercicios.
              </p>
              <p className="text-sm text-gray-600 italic">
                No revelaremos todavía qué es; recibirás todos los detalles por correo electrónico después de la confirmación.
              </p>
              <p className="font-bold text-gray-900 pt-2 text-xl">
                Sin complicaciones.
              </p>
              <p className="text-orange-700 font-extrabold items-center justify-center gap-2 flex flex-col pt-4">
                <span className="animate-bounce text-3xl">↓</span>
                Haz clic en el botón de abajo y finaliza tu acceso por solo $6.99 USD
              </p>
            </div>
          </div>
          {/* Final CTA Button for Bonus */}
          <div className="pt-2">
             <a 
               href="https://pay.hotmart.com/S105516336W?checkoutMode=10"
               className="hotmart-fb block w-full py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-extrabold text-xl uppercase transition-all shadow-[0_8px_20px_-6px_rgba(22,163,74,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(22,163,74,0.6)] hover:-translate-y-1 active:translate-y-0 active:shadow-none animate-pulse-slow text-center"
             >
                OBTENER AHORA POR $6.99 USD
              </a>
          </div>
        </div>

        {/* 30 Day Guarantee */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 sm:p-8 text-center space-y-4" style={{ animation: "fadeInUp 0.5s ease-out 700ms both" }}>
          <h3 className="text-2xl font-extrabold text-blue-900">Garantía Incondicional de 30 Días</h3>
          <p className="text-sm text-blue-800 max-w-md mx-auto leading-relaxed">
            Creemos tanto en nuestro plan que ofrecemos resultados visibles o te devolvemos tu dinero. Tienes 30 días para probar la rutina. Si no notas una evolución clara en tu potencia, te devolvemos el 100% de tu inversión. Sin preguntas.
          </p>
        </div>

        {/* FAQ Area */}
        <div className="rounded-2xl p-6 sm:p-8 border border-gray-100" style={{ animation: "fadeInUp 0.5s ease-out 800ms both" }}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Preguntas Frecuentes</h3>
          <Accordion type="single" collapsible className="space-y-3 w-full border-none">
            {[
              { q: "¿El método es seguro? ¿Mis datos están protegidos?", a: "Sí, usamos encriptación de extremo a extremo y nunca venderemos tu información a terceros. El pago es 100% seguro." },
              { q: "¿En cuánto tiempo veré resultados?", a: "La mayoría de los usuarios reporta mejoras claras de fuerza y control en las primeras semanas de práctica constante de nuestra rutina de ejercicios." },
              { q: "¿Necesitaré comprar algún equipo?", a: "No. Nuestro método se enfoca en el cuerpo y en ejercicios de contracción que se pueden hacer en cualquier lugar, de forma gratuita." },
              { q: "Después de 7 dias fazendo os exercícios de Kegel, já consegui durar 20 minutos a mais. Isso é normal?", a: "Dr. Mark Tyler: ¡Sí! Los ejercicios son muy poderosos y tu cuerpo ha reaccionado muy bien al programa. Para resultados grandes y permanentes, recomendamos seguir el programa de 30 a 90 días. Si en los primeros días no sientes resultados increíbles, ¡continúa! El progreso constante es normal." },
              { q: "Yo también tenía problemas para orinar y, después del programa Nexor MEN, eso desapareció. ¿Es común?", a: "Dr. Mark Tyler: Sí, ¡no te asustes! Un suelo pélvico fuerte mejora la salud general de la región, incluyendo el sistema urinario. Por eso, es normal notar mejoras significativas en otras áreas también." },
              { q: "No quiero que mi esposa sepa del tratamiento. ¿Qué debo hacer?", a: "Dr. Mark Tyler: ¡Puedes estar tranquilo! Mantenemos 100% de confidencialidad sobre tu tratamiento. En la factura de la tarjeta, usamos un nombre discreto y los ejercicios se parecen a los entrenamientos de gimnasio: nadie sospechará que es para otra cosa." },
              { q: "¿Y si no funciona para mí?", a: "Dr. Mark Tyler: Entendemos que cada hombre es único. Por eso el programa está personalizado para cada caso. Hasta ahora, nadie ha quedado insatisfecho, pero en caso de que no veas resultados, ofrecemos 30 días de garantía especial para pedir la devolución de tu dinero. Sin preguntas, sin complicaciones." },
              { q: "¿Cómo puedo empezar a recuperar mi desempeño sexual?", a: "Dr. Mark Tyler: El primer paso es simple: haz clic en el botón de abajo y sigue para comenzar. Al igual que más de 1 millón de hombres que ya han pasado por el programa, también tendrás resultados significativos y quedarás satisfecho con tu nuevo desempeño." },
              { q: "¿Dónde recibiré el acceso al programa?", a: "Recibirás el acceso completo directamente en tu correo electrónico después de confirmar el pago. Solo revisa tu bandeja de entrada (y la carpeta de spam, por precaución) y sigue las instrucciones para comenzar de inmediato." }
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
              OBTENER AHORA POR $6.99 USD
            </a>
           <p className="text-center text-xs text-gray-500 mt-4">
             Acceso inmediato al material por correo electrónico
           </p>
        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;
