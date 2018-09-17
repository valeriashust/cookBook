import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import CoreRoutes from './coreRoutes';
import store from './store/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <CoreRoutes />
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
