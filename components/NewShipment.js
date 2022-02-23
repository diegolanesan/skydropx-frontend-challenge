import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useRouter} from 'next/router';
import {Formik, Form} from 'formik';
import {createShipment} from '../redux/actions';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Title from '../ui/Title';
import Spinner from '../ui/Spinner';

const NewShipment = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className="flex justify-center mt-8 text-center">
      <Formik
        initialValues={{
          zip_origin: '',
          zip_destination: '',
          heigth: '',
          width: '',
          length: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.zip_origin) errors.zip_origin = 'Requerido';
          if (!values.zip_destination) errors.zip_destination = 'Requerido';
          if (!values.heigth) {
            errors.heigth = 'Requerido';
          } else if ( !/^\d+$/.test(values.heigth) ) {
            errors.heigth = 'Formato inválido';
          }
          if (!values.width) {
            errors.width = 'Requerido';
          } else if ( !/^\d+$/.test(values.width) ) {
            errors.width = 'Formato inválido';
          }
          if (!values.length) {
            errors.length = 'Requerido';
          } else if ( !/^\d+$/.test(values.length) ) {
            errors.length = 'Formato inválido';
          }
          return errors;
        }}
        onSubmit={(values, {setSubmitting}) => {
          setLoading(true);
          dispatch(createShipment(values)).then(() => {
            setLoading(false);
            router.push('/elegir-servicio');
          });
          setSubmitting(false);
        }}
      >
        {({isSubmitting}) => (
          <Form>
            <div className="flex flex-col gap-8 items-center mx-auto w-4/5">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div>
                  <Title> Origen </Title>
                  <Input placeholder="Código postal" name="zip_origin"/>
                </div>
                <div>
                  <Title> Destino </Title>
                  <Input placeholder="Código postal" name="zip_destination"/>
                </div>
              </div>
              <div>
                <Title> Medidas del paquete </Title>
                <div className="flex flex-wrap gap-4 justify-center mt-4">
                  {[
                    {name: 'heigth', text: 'Alto (cm.)'},
                    {name: 'width', text: 'Ancho (cm.)'},
                    {name: 'length', text: 'Largo (cm.)'},
                  ].map((item, index) => (
                    <Input
                      placeholder={item.text}
                      name={item.name}
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <div className="w-[199px] sm:w-[414px]">
                {loading ? <Button disabled type="button">
                  <Spinner />
                  Loading...
                </Button> :
                 <Button type="submit" disabled={isSubmitting}>
                  Enviar
                 </Button>}

              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewShipment;
