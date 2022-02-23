import {useRouter} from 'next/router';
import {useSelector} from 'react-redux';
import Container from '../ui/Container';
import H1 from '../ui/H1';
import Button from '../ui/Button';

const Guia = () => {
  const router = useRouter();
  const label = useSelector((state) => state.shipments.label);

  return (
    <Container>
      <H1> Tu guía </H1>
      <div className="my-12 w-full text-center sm:w-4/5">
        <a
          className="font-inter text-lg text-center underline"
          href={label && label.data.attributes.label_url}
          target="_blank" rel="noreferrer"
        >
          Ver guía
        </a>
      </div>
      <div className="w-4/5 sm:w-1/5">
        <Button type="button" onClick={() => router.push('/')}>
          Realizar una nueva cotización
        </Button>
      </div>
    </Container>
  );
};

export default Guia;
