import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import GlobalFonts from './fonts/fonts';

import Home from './components/home/Home'
import NavBarToggle from './components/navBarToggle/NavBarToggle'
import AboutMexico from './components/aboutWF/AboutMexico'
import AboutJim from './components/aboutJim/AboutJim'
import Home1 from './components/home/Home1'
import Home2 from './components/home/Home2'
import Home3 from './components/home/Home3'


import Newsletter from './components/newsletter/Newsletter'




import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => (
  <div className="app">
        <GlobalFonts />

  <Route exact path="/" component={Home} />
  <Route path="/world-food" component={AboutMexico} />
  <Route path="/about-james" component={AboutJim} />

  <Route path="/newsletter" component={Newsletter} />
    <Route path="/navbar" component={NavBarToggle} />
    <Route path="/home1" component={Home1} />

    <Route path="/home2" component={Home2} />
    <Route path="/home3" component={Home3} />


  </div>

);

export default App;
