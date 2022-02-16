import axios from 'axios'
import * as types from './types'

const axiosInstance = axios.create({
  baseUrl: 'https://api-demo.skydropx.com/v1/shipments',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
  }
})

export const createShipment = (values) => (dispatch) => {
  const shipment = {
    address_from: {
      province: 'Ciudad de México',
      city: 'Azcapotzalco',
      name: 'Jose Fernando',
      zip: values.zip_origin,
      country: 'MX',
      address1: 'Av. Principal #234',
      company: 'skydropx',
      address2: 'Centro',
      phone: '5555555555',
      email: 'skydropx@email.com'
    },
    parcels: [
      {
        weight: 3,
        distance_unit: 'CM',
        mass_unit: 'KG',
        height: parseInt(values.heigth),
        width: parseInt(values.width),
        length: parseInt(values.length)
      }
    ],
    address_to: {
      province: 'Jalisco',
      city: 'Guadalajara',
      name: 'Jorge Fernández',
      zip: '44100',
      country: 'MX',
      address1: ' Av. Lázaro Cárdenas #234',
      company: '-',
      address2: 'Americana',
      phone: '5555555555',
      email: 'ejemplo@skydropx.com',
      reference: 'Frente a tienda de abarro',
      contents: 'Test'
    },
    consignment_note_class_code: '53131600',
    consignment_note_packaging_code: '1H1'
  }
  return axiosInstance
    .post('https://api-demo.skydropx.com/v1/shipments', shipment)
    .then((response) => {
      dispatch({
        type: types.CREATE_SHIPMENT,
        payload: response.data
      })
      dispatch({
        type: types.SAVE_SHIPMENT_DATA,
        payload: values
      })
    })
    .catch((error) => {
      console.log(error)
    })
}

export const createLabel = (rateId) => (dispatch) => {
  const label = {
    rate_id: parseInt(rateId),
    label_format: 'pdf'
  }
  return axiosInstance
    .post('https://api-demo.skydropx.com/v1/labels', label)
    .then((response) => {
      dispatch({
        type: types.CREATE_LABEL,
        payload: response.data
      })
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
}

export const createError = (error) => (dispatch) => {
  const { error_message, status } = error
  return dispatch({
    type: types.CREATE_ERROR,
    payload: { error_message, status }
  })
}
