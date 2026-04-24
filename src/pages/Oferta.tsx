import { useLocation } from "react-router-dom";
import CheckoutPage from "@/components/quiz/CheckoutPage";

const Oferta = () => {
  const location = useLocation();
  const name = location.state?.name || "Campeão";

  return <CheckoutPage name={name} />;
};

export default Oferta;
