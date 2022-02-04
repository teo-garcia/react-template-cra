import { Global } from './components/Global/Global';
import { Layout } from './components/Layout/Layout';
import { Router } from './components/Router/Router';

function App() {
  return (
    <Global>
      <Layout>
        <Router />
      </Layout>
    </Global>
  );
}

export default App;
