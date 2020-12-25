import React from "react";
import { Carousel } from 'react-responsive-carousel';
import NavbarHome from '../navbarHome/NavbarHome'
import NavbarHomeMobile from '../navbarHome/NavbarHomeMobile'



import mexicoCover from '../../assets/images/home/mexicoCover.jpg'
import parisCover from '../../assets/images/home/parisCover.jpg'



import corn from '../../assets/images/home/corn.jpg'

import flan1 from '../../assets/images/home/flan1.jpg'
import gal from '../../assets/images/home/gal.jpg'

import man from '../../assets/images/home/man.jpg'

import womanPink from '../../assets/images/home/womanPink.jpg'
import waiter from '../../assets/images/home/waiter.jpg'
import galred from '../../assets/images/home/galred.jpg'
import man2 from '../../assets/images/man2.jpg'
import orange2 from '../../assets/images/home/orange2.jpg'






import '../../stylesheets/HomeMobile.css'


class HomeMobile extends React.Component {
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

    let isMobileHome;
    let width = this.state.width;
    width <= 539 ? (isMobileHome = true) : (isMobileHome = false);
    return (
      <div className='mobile-container'>
        {isMobileHome ? <NavbarHomeMobile />: <NavbarHome />
        }
        {/* <NavbarHome /> */}

        < div className='mobile'>

    <div className='ipadhead'>
      <h3>James Oselands's</h3>
      <h1>World Food</h1>
      <h5>Introducing World Food, an exceptional new series in the tradition of classic cookbooks that take you on a journey to the world's greatest cuisines and the remarkable cultures they come from.</h5>
    </div>

        <section className='main-mobile'>
          <div className='ipadtl'>
            <img src={gal} className='gal' alt=''></img>
          </div>
          <div className='ipadml'>
            <img src={corn} className='flan' alt=''></img>
          </div>
          <div className='ipadbl'>
            <img src={man} className='corn' alt=''></img>
          </div>

          <div className='carousel-mobile'>

            <Carousel
              showThumbs={false}
              infiniteLoop
              autoPlay
              interval={4000}
              transitionTime={1000}
              showIndicators={false}
              showStatus={false}
              showArrows={false}
            >

              <div>
                <img src={mexicoCover} className='mexico' alt=''></img></div>
              <div>
                <img src={parisCover} className='paris' alt=''></img>
              </div>
            </Carousel>
          </div>


          <div className='ipadtr'>
            <img src={waiter} className='gal' alt=''></img>
          </div>
          <div className='ipadmr'>
            <img src={orange2} className='gal' alt=''></img>
          </div>
          <div className='ipadbr'>
            <img src={galred} className='gal' alt=''></img>
          </div>
        </section>

        <div className='mobile-footer'>
          <h2 ><a href="https://jamesroper.photoshelter.com/index">Photography by James Roper</a></h2>
          <button className='signUpBtn mobile'><h7>SIGN UP NOW!</h7></button>
        </div>

      </div>
    </div>
  )
  }
}
  export default HomeMobile
