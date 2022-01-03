import './App.scss';
import { Global } from './components/Global/Global';
import { Layout } from './components/Layout/Layout';
import { Typography } from './components/Typography/Typography';

function App() {
  return (
    <Global>
      <Layout>
        <Typography weight="bold" color="secondary" className="title">
          Hello World
        </Typography>
      </Layout>
    </Global>
  );
}

export default App;
