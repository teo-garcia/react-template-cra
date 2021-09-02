import './Typography.scss';
import * as React from 'react';
import { TypographyProps } from '../../tools/types';
import classNames from 'classnames';

function Typography(props: TypographyProps) {
  const {
    tagName = 'p',
    className,
    size = 'xs',
    weight = 'regular',
    color = 'text',
    ...rest
  } = props;
  const Tag = tagName as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={classNames(
        'typography',
        `typography--${size}`,
        `typography--${weight}`,
        `typography--${color}`,
        className
      )}
      {...rest}
    />
  );
}

export { Typography };
