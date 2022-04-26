import { BrowserRouter } from 'react-router-dom';
import { ProvidersProps } from '../../lib/types/client';

function Providers(props: ProvidersProps) {
  const { children } = props;
  return <BrowserRouter>{children}</BrowserRouter>;
}

export default Providers;
