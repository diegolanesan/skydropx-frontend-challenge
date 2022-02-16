import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Container from '@/ui/Container'
import H1 from '@/ui/H1'
import Button from '@/ui/Button'

const Error = () => {
  const router = useRouter()
  const error = useSelector((state) => state.shipments.error)
  console.log(error)

  return (
    <Container>
      {error.error_message ? (
        <>
          <H1> Lo sentimos, ha ocurrido un error con el siguiente mensaje: </H1>
          <p className="font-inter text-center my-8">
            {' '}
            {error.error_message[0]['message']}{' '}
          </p>
        </>
      ) : (
        <H1> Lo sentimos, ha ocurrido un error </H1>
      )}
      <div className="w-44">
        <Button type="button" onClick={() => router.push('/')}>
          Volver a intentarlo
        </Button>
      </div>
    </Container>
  )
}

export default Error
