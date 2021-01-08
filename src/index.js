import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
// import './fonts/MundoSansPro-Medium.woff'
import './index.css';
import App from './App';
import './MyFontsWebfontsKit.css';


ReactDOM.render(
      <Router >
        <App />
      </Router>,
    document.getElementById('root')
);
