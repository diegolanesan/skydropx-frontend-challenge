import Container from '../ui/Container';
import H1 from '../ui/H1';
import NewShipment from '../components/NewShipment';

const Index = () => {
  return (
    <Container>
      <H1> Datos de envío </H1>
      <p className="mt-4 font-inter text-center">
        Ingresa los datos de tu envío para obtener las tarifas disponibles.
      </p>
      <NewShipment />
    </Container>
  );
};

export default Index;
