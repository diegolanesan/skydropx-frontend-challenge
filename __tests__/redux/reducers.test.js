import {shipmentMock} from '__mock__/DataMock';
import {reducer, initialState} from '../../redux/reducers';
import * as types from '../../redux/types';


describe('Reducers', () => {
  test('Return default state', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('CREATE_SHIPMENT', () => {
    const payload = shipmentMock;
    const action = {
      type: types.CREATE_SHIPMENT,
      payload,
    };
    const expected = {
      ...initialState,
      rates: payload,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
