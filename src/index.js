import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
// import * as History from 'history';
import App from './App';
import reportWebVitals from './reportWebVitals';


// const history = History.createBrowserHistory();

ReactDOM.render(
  <RecoilRoot>
    {/* <ConnectedRouter history={history}> */}
    <Router>
      <App />
    </Router>
    {/* </ConnectedRouter> */}
  </RecoilRoot>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
