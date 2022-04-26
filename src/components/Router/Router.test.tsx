import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

describe('<Router /> tests', function () {
  test('Should match with the component snapshot', function () {
    const { asFragment } = render(
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
