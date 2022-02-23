import {useRouter} from 'next/router';
import {useDispatch} from 'react-redux';
import {createLabel, createError} from '../redux/actions';
import Button from './Button';

const Rate = ({rate, bestRate}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleOption = () => {
    dispatch(createLabel(rate.id))
        .then((label) => {
          if (label.data.attributes.status === 'ERROR') {
            dispatch(createError(label.data.attributes));
            router.push('/error');
          } else {
            router.push('/guia');
          }
        })
        .catch((error) => {
          router.push('/error');
        });
  };

  return (
    <div className="flex flex-col justify-between p-4 w-52 font-inter rounded-sm shadow-md">
      <div className="grid gap-4 justify-items-center">
        {bestRate?.id === rate.id && (
          <div className="p-1 w-28 text-xs text-center text-white uppercase bg-yellow-500 rounded-sm">
            Mejor opción
          </div>
        )}
        <p className="mt-2 font-semibold text-center"> {rate.attributes.provider}</p>
        <p className="text-xl font-bold">
          {rate.attributes.amount_local} {rate.attributes.currency_local}
        </p>
        <p>
          Llega en <span className="font-semibold">{rate.attributes.days} días</span>
        </p>
      </div>

      <Button type="button" onClick={handleOption}>
        Elegir
      </Button>
    </div>
  );
};

export default Rate;
