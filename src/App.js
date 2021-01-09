import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import NavBarToggle from './components/navbars/navBarToggle/NavBarToggle'
import AboutMexico from './components/aboutWF/AboutMexico'
import AboutJim from './components/aboutJim/AboutJim'
import AboutJimMobile from './components/aboutJim/AboutJimMobile'
import Home from './components/home/Home'
import Newsletter from './components/newsletter/Newsletter'
import HomeMobile from './components/home/HomeMobile'
import AboutMexicoMobile from './components/aboutWF/AboutMexicoMobile';



class App extends React.Component {
  state = {
		width: window.innerWidth
	};

	componentDidMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	handleWindowSizeChange = () => {
		this.setState({ width: window.innerWidth });
	};

  render() {

    let isMobile;
		let width = this.state.width;
    width <= 900 ? (isMobile = true) : (isMobile = false);

    let isMobileMexico
    width <= 760 ? (isMobileMexico = true) : (isMobileMexico = false);

    let isMobileJim
    width <= 539 ? (isMobileJim = true) : (isMobileJim = false);

    return (
    <div className="app">

        {isMobile ? <Route exact path="/" component={HomeMobile} /> : <Route exact path="/" component={Home} />
        }

        {isMobileMexico ? <Route path="/world-food" component={AboutMexicoMobile} /> : <Route path="/world-food" component={AboutMexico} />
        }

        {isMobileJim ? <Route path="/about-james" component={AboutJimMobile} /> : <Route path="/about-james" component={AboutJim} />
        }

        <Route path="/newsletter" component={Newsletter} />
        <Route path="/navbar" component={NavBarToggle} />
    </div>
    )
  }
}
export default App;
