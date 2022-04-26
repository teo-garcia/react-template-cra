import { render, screen } from '@testing-library/react';
import Providers from './Provider';

describe('<Providers /> tests', function () {
  test('Should match with the component snapshot', function () {
    const { asFragment } = render(<Providers>Hello World</Providers>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Should render the provided children prop', function () {
    render(<Providers>Hello World</Providers>);
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
  });
});
