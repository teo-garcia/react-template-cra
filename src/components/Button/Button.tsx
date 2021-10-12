import './Button.scss';
import * as React from 'react';
import classNames from 'classnames';
import { ButtonProps } from '../../tools/types';

function Button(props: ButtonProps) {
  const { className } = props;
  return <button className={classNames('button', className)} {...props} />;
}

export { Button };
