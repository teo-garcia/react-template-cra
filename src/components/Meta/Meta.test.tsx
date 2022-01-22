import { render } from '@testing-library/react';
import { Meta } from './Meta';

describe('<Meta /> tests', function () {
  test('Should match with the component snapshot', function () {
    const { asFragment } = render(
      <Meta title="Ping | Home" description="This is the homepage of Ping" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
