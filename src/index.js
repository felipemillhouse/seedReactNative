import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'store';
import SignIn from 'views/signIn';
// import Routes from './routes';

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SignIn />
        </PersistGate>
      </Provider>
    );
  }
}
