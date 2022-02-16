import { useState, useEffect } from 'react'

const useBestRate = (rates) => {
  const [bestRate, setBestRate] = useState(null)

  const getBestRate = () => {
    const options = rates.included.filter((element) => element.type === 'rates')

    const orderByPrice = options.sort(
      (a, b) => parseInt(b.attributes.amount_local) - parseInt(a.attributes.amount_local)
    )

    const bestRate = orderByPrice.reduce((prev, current) => {
      return prev.attributes.days < current.attributes.days ? prev : current
    })

    return bestRate
  }

  useEffect(() => {
    if (rates && rates.data.relationships.rates.data.length > 0) {
      const bestRate = getBestRate()
      setBestRate(bestRate)
    }
  }, [rates])

  return bestRate
}

export default useBestRate
