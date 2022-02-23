import axios from 'axios';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from '../../redux/reducers';
import {initialState} from '../../redux/reducers';
import MockAdapter from 'axios-mock-adapter';
import {labelMock} from '__mock__/DataMock';
import {createLabel} from '../../redux/actions';

const store = createStore(reducers, {shipments: initialState}, composeWithDevTools(applyMiddleware(thunkMiddleware)));
const mock = new MockAdapter(axios);

describe('Actions', () => {
  test('Create label action', () => {
    mock.onPost('https://api-demo.skydropx.com/v1/labels').reply(200, labelMock );
    store.dispatch(createLabel()).then(() => {
      expect(store.getState().shipments.label).toEqual(labelMock);
    });
  });
});


