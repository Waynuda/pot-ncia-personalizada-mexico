import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CheckoutPage from "@/components/quiz/CheckoutPage";

const Oferta = () => {
  const location = useLocation();
  const name = location.state?.name || "Campeão";

  useEffect(() => {
    if (typeof (window as any).fbq === "function") {
      (window as any).fbq("track", "PageView");
    }
  }, []);

  return <CheckoutPage name={name} />;
};

export default Oferta;
