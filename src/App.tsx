import Providers from './components/Providers/Provider';
import Router from './components/Router/Router';
import { Layout } from 'primitivex';

function App() {
  return (
    <Providers>
      <Layout>
        <Router />
      </Layout>
    </Providers>
  );
}

export default App;
