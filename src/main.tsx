import ReactDom from 'react-dom';
import React from 'react';
import ReduxApp from './ReduxApp';
import HooksReduxApp from './HooksReduxApp';

ReactDom.render(
  <React.StrictMode>
    <HooksReduxApp />
    {/* <ReduxApp /> */}
  </React.StrictMode>,
  document.querySelector('#root')
);
