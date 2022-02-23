import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../redux/reducers';
import {initialState} from '../redux/reducers';

const store = createStore(reducers, {shipments: initialState});

const ProviderMock = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ProviderMock;
