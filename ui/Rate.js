import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { createLabel, createError } from '../redux/actions'
import Button from '@/ui/Button'

const Rate = ({ rate, bestRate }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const handleOption = () => {
    dispatch(createLabel(rate.id))
      .then((label) => {
        if (label.data.attributes.status === 'ERROR') {
          dispatch(createError(label.data.attributes))
          router.push('/error')
        } else {
          router.push('/guia')
        }
      })
      .catch((error) => {
        router.push('/error')
      })
  }
  return (
    <div className="flex flex-col justify-between w-52 p-4 font-inter rounded-sm shadow-md">
      <div className="grid justify-items-center gap-4">
        {bestRate?.id === rate.id && (
          <div className="w-28 p-1 bg-yellow-500 text-xs text-center uppercase text-white rounded-sm">
            Mejor opción
          </div>
        )}
        <p className="font-semibold mt-2 text-center"> {rate.attributes.provider}</p>
        <p className="font-bold text-xl">
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
  )
}

export default Rate
