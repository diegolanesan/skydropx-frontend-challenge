import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import ProviderMock from '../../__mock__/ProviderMock';
import Index from '../../pages/Index';

describe('<Index />', () => {
  test('Render title and description', () => {
    const component = render( <ProviderMock> <Index /> </ProviderMock>);
    component.getByText('Datos de envío');
    component.getByText('Ingresa los datos de tu envío para obtener las tarifas disponibles.');
  });
});


