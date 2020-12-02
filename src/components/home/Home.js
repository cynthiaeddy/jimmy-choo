import React from "react";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'
import NavbarHome from '../navbarHome/NavbarHome'


import mexico from '../../assets/mexico.jpg'
import paris from '../../assets/paris.jpg'



import openerBlue1 from '../../assets/openerBlue1.jpg'
import openerCorn1 from '../../assets/openerCorn1.jpg'
import openerDessert1 from '../../assets/openerDessert1.jpg'
import openerFighter1 from '../../assets/openerFighter1.jpg'
import openerFlan1 from '../../assets/openerFlan1.jpg'
import openergal1 from '../../assets/openergal1.jpg'

import openerMan1 from '../../assets/openerMan1.jpg'
import openerOysters1 from '../../assets/openerOysters1.jpg'
import openerRed1 from '../../assets/openerRed1.jpg'
import openerWoman1 from '../../assets/openerWoman1.jpg'
import openerWaiter1 from '../../assets/openerWaiter1.jpg'





import '../../stylesheets/Home.css'


const Home = () => (
  <div className='home-container'>
    <NavbarHome />


    <div className='home outer-grid'>
    <div className='grid-1 header'>
            <h1>World Food</h1>
          </div>

    <div className='grid-1 header left'>

    <img src={openergal1} className='gal' alt=''></img>
            <img src={openerFlan1} className='flan' alt=''></img>
            <img src={openerCorn1} className='corn' alt=''></img>
            <img src={openerWoman1} className='woman' alt=''></img>
            <img src={openerMan1} className='man' alt=''></img>
            <img src={openerDessert1} className='dessert' alt=''></img>



      </div>

    <div className='carousel-wrapper main'>

     <Carousel
       showThumbs={false}
       infiniteLoop
       autoPlay
       interval={4000}
       transitionTime={1000}
       showIndicators={false}
      //  centerMode
      //  centerSlidePercentage={50}
       showStatus={false}
       showArrows={false}
       >

<div>
              <Link to="/world-food" className="world-food"><img src={mexico} className='mexico' alt=''></img></Link></div>
            <div>
              <img src={paris} className='mexico' alt=''></img>
              </div>
    </Carousel>


    </div>
    <div className='grid-3 right'>

    <img src={openerBlue1} className='image-tl' alt=''></img>
            <img src={openerWaiter1} className='image-tr' alt=''></img>
            <div className='homeDek copy'>
              <div className='nested'>
                <h4><span className='intro'>Introducing World Food,</span> an exceptional new series in the tradition of classic cookbooks that take you on a journey to the world's greatest cuisines and the remarkable cultures they come from.</h4>

              </div>
              <button className='signUpBtn'><h7>SIGN UP NOW!</h7></button>
            </div>
            <img src={openerOysters1} className='image-m' alt=''></img>
            <img src={openerFighter1} className='image-b' alt=''></img>





      </div>
      <div>
            <h2 className='grid-5 footer'>Photography by James Roper</h2>
          </div>
    </div>
    </div>
  );
  export default Home
