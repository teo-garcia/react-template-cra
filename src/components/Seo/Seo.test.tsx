import { render } from '@testing-library/react';
import Seo from './Seo';

describe('<Seo /> tests', function () {
  test('Should match with the component snapshot', function () {
    const { asFragment } = render(
      <Seo title="Home" description="This is the homepage" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
