import React from "react";
import { Carousel } from 'react-responsive-carousel';
// import { Link } from 'react-router-dom'
import NavbarHome from '../navbarHome/NavbarHome'


import mexicoCover from '../../assets/images/home/mexicoCover.jpg'
import parisCover from '../../assets/images/home/parisCover.jpg'



import openerBlue1 from '../../assets/images/openerBlue1.jpg'
import corn from '../../assets/images/home/corn.jpg'
import openerDessert1 from '../../assets/images/home/openerDessert1.jpg'
import openerFighter1 from '../../assets/images/openerFighter1.jpg'
import flan1 from '../../assets/images/home/flan1.jpg'
import gal from '../../assets/images/home/gal.jpg'

import man from '../../assets/images/home/man.jpg'
import openerOysters1 from '../../assets/images/openerOysters1.jpg'
import womanPink from '../../assets/images/home/womanPink.jpg'
import waiter from '../../assets/images/waiter.jpg'
import woman3 from '../../assets/images/woman3.jpg'
import man2 from '../../assets/images/man2.jpg'
import orange2 from '../../assets/images/orange2.jpg'






import '../../stylesheets/HomeMobile.css'


const HomeMobile = () => (
  <div className='mobile-container'>
    <NavbarHome/>


    <div className='mobile'>
      <div className='ipadhead'>
        <h3>James Oselands's</h3>
        <h1>World Food</h1>
        <h5>Introducing World Food, an exceptional new series in the tradition of classic cookbooks that take you on a journey to the world's greatest cuisines and the remarkable cultures they come from.</h5>
      </div>

      <div className='mobile-left'>
        <div className='ipadtl'>
          <img src={gal} className='gal' alt=''></img>
        </div>
        <div className='ipadml'>
          <img src={flan1} className='flan' alt=''></img>
        </div>
        <div className='ipadbl'>
          <img src={corn} className='corn' alt=''></img>
        </div>
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


      <div className='mobile-right'>
        <div className='ipadtr'>
          <img src={woman3} className='gal' alt=''></img>
        </div>
        <div className='ipadmr'>
          <img src={orange2} className='gal' alt=''></img>
        </div>
        <div className='ipadbr'>
          <img src={orange2} className='gal' alt=''></img>
        </div>
      </div>

      <div>
        <h2 className='mobile-footer'><a href="https://jamesroper.photoshelter.com/index">Photography by James Roper</a></h2>
        <button className='signUpBtn-mobile'><h7>SIGN UP NOW!</h7></button>
      </div>

    </div>
  </div>
  );
  export default HomeMobile
