import { MainContainer } from './styles';
import CheckoutFormPanel from './CheckoutFormPanel';
import OrderSummaryPanel from './OrderSummaryPanel';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCoreData } from '@/context/coreDataContext';

export default function Checkout() {
  const location = useLocation();
  const { setFormStep, setFormData, setCoupons } = useCoreData(); 
  
  useEffect(() => {
    // sempre que mudar de página:
    setCoupons([]);
    setFormData({});
    setFormStep(0);
  }, [location.pathname]);

  return (
    <MainContainer>
      <CheckoutFormPanel/>
      <OrderSummaryPanel/>
    </MainContainer>
  );
}
