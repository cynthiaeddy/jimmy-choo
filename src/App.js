import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'


import Home from './components/home/Home'
import NavBarToggle from './components/navBarToggle/NavBarToggle'
import AboutMexico from './components/aboutWF/AboutMexico'
import AboutJim from './components/aboutJim/AboutJim'
import SignUp from './components/signUp/SignUp'




import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => (
  <div className="app">

  <Route exact path="/" component={Home} />
  <Route path="/world-food" component={AboutMexico} />
  <Route path="/about-james" component={AboutJim} />

  <Route path="/newsletter" component={SignUp} />
  <Route path="/navbar" component={NavBarToggle} />

  </div>

);

export default App;
