import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import GlobalFonts from './fonts/fonts';

import NavBarToggle from './components/navBarToggle/NavBarToggle'
import AboutMexico from './components/aboutWF/AboutMexico'
import AboutJim from './components/aboutJim/AboutJim'
import Home8 from './components/home/Home8'
import Newsletter1 from './components/newsletter/Newsletter1'
// import NewsletterMail from './components/newsletter/NewsletterMail'
import NewslettterMail from './components/newsletter/NewslettterMail'
import Newsletter from './components/newsletter/Newsletter'



import Home7 from './components/home/Home7'
import HomeMobile from './components/home/HomeMobile'

import HomeMobileToo from './components/home/HomeMobileToo'





import "react-responsive-carousel/lib/styles/carousel.min.css";
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
    width <= 810 ? (isMobile = true) : (isMobile = false);


    let isMobileMexico
    width <= 600 ? (isMobileMexico = true) : (isMobileMexico = false);




    return (
    <div className="app">
        <GlobalFonts />

        {isMobile ? <Route exact path="/" component={HomeMobile} /> : <Route exact path="/" component={Home8} />
        }

        <Route path="/home7" component={Home7} />


        {isMobileMexico ? <Route path="/world-food" component={AboutMexicoMobile} /> : <Route path="/world-food" component={AboutMexico} />
        }



      <Route path="/about-james" component={AboutJim} />

      <Route path="/newsletter" component={NewslettterMail} />
      <Route path="/navbar" component={NavBarToggle} />
    </div>
    )

  }

}
export default App;
