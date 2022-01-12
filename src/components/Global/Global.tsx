import { BrowserRouter } from 'react-router-dom';
import { GlobalProps } from '../../tools/types';

function Global(props: GlobalProps) {
  const { children } = props;
  return <BrowserRouter>{children}</BrowserRouter>;
}

export { Global };
