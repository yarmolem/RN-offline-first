import React from 'react';
import {Provider} from 'urql';
import client from './graphql/client';
import RootNavigator from './navigator/RootNavigator';

const App = () => {
  return (
    <Provider value={client}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
