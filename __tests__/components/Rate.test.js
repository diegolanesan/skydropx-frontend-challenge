import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import ProviderMock from '../../__mock__/ProviderMock';
import Rate from '../../ui/Rate';
import {rateMock} from '../../__mock__/DataMock';

describe('<Rate />', () => {
  test('Render shipment data', () => {
    const component = render( <ProviderMock> <Rate rate={rateMock} /> </ProviderMock>);
    component.getByText(rateMock.attributes.provider);
    component.getByText(`${rateMock.attributes.amount_local} ${rateMock.attributes.currency_local}`);
    component.getByText(`${rateMock.attributes.days} días`);
  });
});

