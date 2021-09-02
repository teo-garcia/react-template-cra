import * as React from 'react';
import { GlobalProps } from '../../tools/types';

function Global(props: GlobalProps) {
  const { children } = props;
  return <>{children}</>;
}

export { Global };
