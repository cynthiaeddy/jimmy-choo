import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'


import Home from './components/home/Home'
import NavBarToggle from './components/navBarToggle/NavBarToggle'

import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => (
  <div className="app">

<Route exact path="/" component={Home} />

<Route path="/navbar" component={NavBarToggle} />

  </div>

);

export default App;
