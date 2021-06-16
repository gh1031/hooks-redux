import React, { FC, useContext } from 'react';
import { Provider } from 'react-redux';
import ReduxConsumer from './pages/ReduxConsumer';
import store from './redux/store';

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <ReduxConsumer />      
    </Provider>
  );
}

export default ReduxApp;
