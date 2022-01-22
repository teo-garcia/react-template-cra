import { render } from '@testing-library/react';
import { Message } from './Message';

describe('<Layout /> tests', function () {
  test('Should match with the component snapshot', function () {
    const { asFragment } = render(
      <Message
        brandName="Ping"
        mainContent="Lorem Ipsum"
        secondaryContent="Lorem ipsum"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
