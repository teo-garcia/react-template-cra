import './App.scss';
import * as React from 'react';
import { Global } from './components/Global/Global';
import { Layout } from './components/Layout/Layout';
import { Typography } from './components/Typography/Typography';

function App() {
  return (
    <Global>
      <Layout>
        <Typography weight="bold" color="secondary">
          Hello World
        </Typography>
      </Layout>
    </Global>
  );
}

export default App;
