import ReactDom from 'react-dom';
import React from 'react';
import ReduxStore from './ReduxStore';
import HooksStore from './HooksStore';

ReactDom.render(
  <React.StrictMode>
    <HooksStore />
    {/* <ReduxStore /> */}
  </React.StrictMode>,
  document.querySelector('#root')
);
