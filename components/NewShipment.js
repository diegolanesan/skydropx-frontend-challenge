import { Formik, Form } from 'formik'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { createShipment } from '../redux/actions'
import Input from '@/ui/Input'
import Button from '@/ui/Button'
import Title from '@/ui/Title'

const NewShipment = () => {
  const dispatch = useDispatch()
  const ruouter = useRouter()
  const shipmentData = useSelector((state) => state.shipments.shipmentData)

  return (
    <div className="flex justify-center text-center mt-8">
      <Formik
        initialValues={{
          zip_origin: '',
          zip_destination: '',
          heigth: '',
          width: '',
          length: ''
        }}
        validate={(values) => {
          const errors = {}
          if (!values.zip_origin) errors.zip_origin = 'Requerido'
          if (!values.zip_destination) errors.zip_destination = 'Requerido'
          if (!values.heigth) errors.heigth = 'Requerido'
          if (!values.width) errors.width = 'Requerido'
          if (!values.length) errors.length = 'Requerido'
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(createShipment(values)).then(() => {
            ruouter.push('/elegir-servicio')
          })
          setSubmitting(false)
        }}
      >
        {({ handleChange, isSubmitting }) => (
          <Form>
            <div className="flex flex-col gap-8 items-center w-4/5 mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div>
                  <Title> Origen </Title>
                  <Input
                    placeholder="Código postal"
                    name="zip_origin"
                    defaultValue={shipmentData ? shipmentData.zip_origin : ''}
                  />
                </div>
                <div>
                  <Title> Destino </Title>
                  <Input
                    placeholder="Código postal"
                    name="zip_destination"
                    defaultValue={shipmentData ? shipmentData.zip_destination : ''}
                  />
                </div>
              </div>

              <div>
                <Title> Medidas del paquete </Title>
                <div className="flex flex-wrap gap-4 mt-4 justify-center">
                  {[
                    { name: 'heigth', text: 'Alto (cm.)' },
                    { name: 'width', text: 'Ancho (cm.)' },
                    { name: 'length', text: 'Largo (cm.)' }
                  ].map((item, index) => (
                    <Input
                      placeholder={item.text}
                      name={item.name}
                      key={index}
                      defaultValue={shipmentData ? shipmentData[`${item.name}`] : ''}
                    />
                  ))}
                </div>
              </div>
              <div className="w-[199px] sm:w-[414px]">
                <Button type="submit" disabled={isSubmitting}>
                  Enviar
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default NewShipment
