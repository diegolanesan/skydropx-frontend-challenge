import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Container from '@/ui/Container'
import H1 from '@/ui/H1'
import Button from '@/ui/Button'

const Guia = () => {
  const router = useRouter()
  const label = useSelector((state) => state.shipments.label)

  return (
    <Container>
      <H1> Tu guía </H1>
      <div className="w-full sm:w-4/5 my-12 text-center">
        <a
          className="font-inter text-center text-lg underline"
          href={label && label.data.attributes.label_url}
          target="_blank"
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
  )
}

export default Guia
