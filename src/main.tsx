import React from 'react';
import ReactDom from 'react-dom';
import App from './router';
import ContextDemo from './ContextDemo';

ReactDom.render(
  <React.StrictMode>
    <App />,
    {/* <ContextDemo />, */}
  </React.StrictMode>,
  document.querySelector('#root')
);
