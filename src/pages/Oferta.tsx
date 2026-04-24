import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CheckoutPage from "@/components/quiz/CheckoutPage";

const Oferta = () => {
  const location = useLocation();
  const name = location.state?.name || "Campeão";

  useEffect(() => {
    // Meta Pixel Code
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
    <>
      <CheckoutPage name={name} />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1505287261210886&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
};

export default Oferta;
