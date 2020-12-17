import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import GlobalFonts from './fonts/fonts';

import NavBarToggle from './components/navBarToggle/NavBarToggle'
import AboutMexico from './components/aboutWF/AboutMexico'
import AboutJim from './components/aboutJim/AboutJim'
import Home8 from './components/home/Home8'
import Newsletter from './components/newsletter/Newsletter'
import Home7 from './components/home/Home7'



import "react-responsive-carousel/lib/styles/carousel.min.css";


class App extends React.Component {

  render() {
    return (
    <div className="app">
        <GlobalFonts />


        <Route exact path="/" component={Home8} />
        <Route exact path="/home7" component={Home7} />

      <Route path="/world-food" component={AboutMexico} />
      <Route path="/about-james" component={AboutJim} />

      <Route path="/newsletter" component={Newsletter} />
      <Route path="/navbar" component={NavBarToggle} />
    </div>
    )

  }

}
export default App;
