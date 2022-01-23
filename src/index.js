import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle} from './style.js';
import { GlobalStyleicon } from './statics/iconfont/iconfont.js';
import App from './App';

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <GlobalStyleicon/>
    <App />
  </Fragment>,
  document.getElementById('root')
);

