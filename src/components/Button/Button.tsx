import './Button.scss';

import classNames from 'classnames';
import { ButtonProps } from '../../tools/types';

function Button(props: ButtonProps) {
  const { className } = props;
  return <button className={classNames('button', className)} {...props} />;
}

export { Button };
