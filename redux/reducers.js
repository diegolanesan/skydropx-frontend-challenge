import { combineReducers } from 'redux'
import * as types from './types'

const initialState = {
  shipmentData: '',
  rates: '',
  label: '',
  error: ''
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CREATE_SHIPMENT:
      return {
        ...state,
        rates: payload
      }
    case types.SAVE_SHIPMENT_DATA:
      return {
        ...state,
        shipmentData: payload
      }
    case types.CREATE_LABEL:
      return {
        ...state,
        label: payload
      }
    case types.CREATE_ERROR:
      return {
        ...state,
        error: payload
      }
    default:
      return state
  }
}

const reducers = {
  shipments: reducer
}

export default combineReducers(reducers)
