import './Typography.scss';

import { TypographyProps } from '../../tools/types';
import classNames from 'classnames';

function Typography(props: TypographyProps) {
  const {
    tagName = 'p',
    className,
    weight = 'regular',
    color = 'text',
    ...rest
  } = props;
  const Tag = tagName as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={classNames(
        'typography',
        `typography--${weight}`,
        `typography--${color}`,
        className
      )}
      {...rest}
    />
  );
}

export { Typography };
