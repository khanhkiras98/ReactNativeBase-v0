import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './src/navigation/RootStackNavigation';
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor } from "./src/redux/store"

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider >
  )
}

export default App