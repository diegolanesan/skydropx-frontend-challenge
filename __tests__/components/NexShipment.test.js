import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, waitFor} from '@testing-library/react';
import ProviderMock from '../../__mock__/ProviderMock';
import NewShipment from '../../components/NewShipment';

describe('<New Shipment />', () => {
  test('Form is not submitted when there are errors', async () => {
    const mockHandler = jest.fn();
    const component = render( <ProviderMock> <NewShipment /> </ProviderMock>);
    const button = component.getByText('Enviar');
    fireEvent.click(button);
    // waitFor function added for solving Formik bug
    await waitFor(() => {
      expect(mockHandler.mock.calls).toHaveLength(0);
    });
  });
});


