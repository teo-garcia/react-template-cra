import './SubscribeForm.scss';
import * as React from 'react';
import { SubscribeFormProps } from '../../tools/types';
import { Button } from '../Button/Button';
import classNames from 'classnames';

function validateEmail(email: string): boolean {
  return /^\S+@\S+$/.test(email);
}

function SubscribeForm(props: SubscribeFormProps) {
  const { label, name, onSubmit } = props;
  const [error, setError] = React.useState(false);
  const [value, setValue] = React.useState('');

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const { value } = evt.target;
    setError(false);
    setValue(value);
  }

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const isValid = validateEmail(value);

    if (isValid) {
      onSubmit(value);
      return;
    }

    setError(true);
  }

  return (
    <form className="subscribe-form" onSubmit={handleSubmit}>
      <label className="subscribe-form__label" htmlFor={name}>
        {label}
      </label>
      <input
        className={classNames('subscribe-form__input', {
          'subscribe-form__input--error': error,
        })}
        name={name}
        id={name}
        onChange={handleChange}
        value={value}
        aria-describedby="error-email"
      />
      {error ? (
        <span id="error-email" className="subscribe-form__validation">
          Please enter a valid email
        </span>
      ) : null}
      <Button className="subscribe-form__cta">Notify Me</Button>
    </form>
  );
}

export { SubscribeForm };
