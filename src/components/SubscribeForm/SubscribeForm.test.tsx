import { render, fireEvent, screen } from '@testing-library/react';
import { SubscribeForm } from './SubscribeForm';

describe('<SubscribeForm /> tests', function () {
  test('Should match with the component snapshot', function () {
    const { asFragment } = render(
      <SubscribeForm label="Email Address" name="email" onSubmit={jest.fn()} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Should call onSubmit prop when is submitted', function () {
    const onMockSubmit = jest.fn();
    render(
      <SubscribeForm
        label="Email Address"
        name="email"
        onSubmit={onMockSubmit}
      />
    );

    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'john@doe.com' },
    });
    fireEvent.click(screen.getByText(/notify me/i));
    expect(onMockSubmit).toHaveBeenCalledWith('john@doe.com');
  });

  test('Should show an error when the form is invalid', function () {
    const onMockSubmit = jest.fn();
    render(
      <SubscribeForm
        label="Email Address"
        name="email"
        onSubmit={onMockSubmit}
      />
    );

    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'johndoe.com' },
    });
    fireEvent.click(screen.getByText(/notify me/i));
    expect(screen.getByText(/please enter a valid email/i)).toBeInvalid();
    expect(onMockSubmit).not.toHaveBeenCalled();
  });
});
