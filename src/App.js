import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'


import Home from './components/home/Home'

import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => (
  <div className="app">

      {/* <Route exact path='/about' component={Home}/> */}




        <Route component={Home} />

  </div>

);

export default App;
