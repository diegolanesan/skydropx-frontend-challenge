import {useRouter} from 'next/router';
import useBestRate from '../hooks/useBestRate';
import {useSelector} from 'react-redux';
import Container from '../ui/Container';
import Rate from '../ui/Rate';
import H1 from '../ui/H1';
import Button from '../ui/Button';

const Service = () => {
  const router = useRouter();
  const rates = useSelector((state) => state.shipments.rates);
  const bestRate = useBestRate(rates);

  return (
    <Container>
      {rates && rates.data.relationships.rates.data.length === 0 ? (
        <>
          <H1> Lo sentimos, no encontramos tarifas para tu envío </H1>
          <p className="mt-8 mb-4 font-inter">
            Por favor, reintenta con otros datos de envío
          </p>
          <div className="w-28">
            <Button onClick={() => router.push('/')}> Volver </Button>
          </div>
        </>
      ) : (
        <>
          <H1> Elige tu servicio de paquetería </H1>
          <div className="flex flex-col flex-wrap gap-4 justify-center mt-12 sm:flex-row sm:w-4/5">
            {rates &&
              rates.included
                  .filter((element) => element.type === 'rates')
                  .map((rate, index) => {
                    return <Rate rate={rate} key={index} bestRate={bestRate} />;
                  })}
          </div>
        </>
      )}
    </Container>
  );
};

export default Service;
