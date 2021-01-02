import React from 'react'


import imageData from '../Images'

import Slide from '../Slide'
import '../../stylesheets/AboutWFMobile.css'
import '../../stylesheets/AboutWF.css'
import '../../stylesheets/AboutWFMobile.css'



import BackArrowMobile from './BackArrowMobile'
import ForwardArrowMobile from './ForwardArrowMobile'
import NavbarMexico from '../../navbarMexico/NavbarMexico'
import NavbarSocial from '../../navbarSocial/NavbarSocial'


class AboutMexicoipad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      length: imageData.length,
    }
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
    <div className='container'>
        <NavbarMexico />
        <NavbarSocial/>
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
export default AboutMexicoipad
