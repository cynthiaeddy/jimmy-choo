import React from 'react'


import imageData from '../carouselMexico/Images'

import Slide from '../carouselMexico/Slide'
import '../../stylesheets/AboutWFMobile.css'
import '../../stylesheets/AboutWF.css'
import '../../stylesheets/AboutWFMobile.css'



import BackArrowMobile from '../carouselMexico/BackArrowMobile'
import ForwardArrowMobile from '../carouselMexico/ForwardArrowMobile'
import NavbarMexicoMobile from '../navbarMexico/NavbarMexicoMobile'
import NavbarMexico from '../navbarMexico/NavbarMexico'

class AboutMexicoMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      length: imageData.length,
      width: window.innerWidth
    }
  }

      componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }

      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }

      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      }

  goToPrevSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length;
      if(index < 1) {
      index = length - 1;
      }
      else {
        index--;
      }
      this.setState({
      activeIndex: index
    });
  }

  goToNextSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length;
      if(index === length - 1) {
        index = 0
      }
      else {
        index++;
      }
    this.setState({
    activeIndex: index
      });
  }


  render() {
    let isMobile;
		let width = this.state.width;
		width <= 600 ? (isMobile = true) : (isMobile = false);
    return (
      <div className='container mexicoMobile'>
         {isMobile ? <NavbarMexicoMobile/> : <NavbarMexico/>
        }

    <div className='wf-content'>
      <div className='l-arrow '>
      <BackArrowMobile
        goToPrevSlide={() => this.goToPrevSlide()}
        />
        </div>
    <div className='slider-items main'>
      <Slide
         activeIndex={this.state.activeIndex}
         goToNextSlide={() => this.goToNextSlide()}
      />
      </div>
      <div className='r-arrow'>
      <ForwardArrowMobile
        goToNextSlide={() => this.goToNextSlide()}
      />
      </div>
        </div>
      </div>
    )
  }
}
export default AboutMexicoMobile
