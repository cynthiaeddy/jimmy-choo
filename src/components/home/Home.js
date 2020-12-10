import React from "react";
import { Carousel } from 'react-responsive-carousel';
// import { Link } from 'react-router-dom'
import NavbarHome from '../navbarHome/NavbarHome'


import mexico from '../../assets/images/mexico.jpg'
import paris from '../../assets/images/paris.jpg'



import openerBlue1 from '../../assets/images/openerBlue1.jpg'
import openerCorn1 from '../../assets/images/openerCorn1.jpg'
import openerDessert1 from '../../assets/images/openerDessert1.jpg'
import openerFighter1 from '../../assets/images/openerFighter1.jpg'
import openerFlan1 from '../../assets/images/openerFlan1.jpg'
import openergal1 from '../../assets/images/openergal1.jpg'

import openerMan1 from '../../assets/images/openerMan1.jpg'
import openerOysters1 from '../../assets/images/openerOysters1.jpg'
import openerWoman1 from '../../assets/images/openerWoman1.jpg'
import openerWaiter1 from '../../assets/images/openerWaiter1.jpg'





import '../../stylesheets/Home.css'


const Home = () => (
  <div className='home-container'>
    <NavbarHome/>


    <div className='home outer-grid'>
      <div className='grid-1 header'>
        <h3>James Oselands's</h3>
            <h1>World Food</h1>
          </div>

      <div className='grid-2 left'>
      <div className='boxes one'>
      <img src={openergal1} className='gal' alt=''></img>
      </div>
      <div className='boxes two'>
      <img src={openerFlan1} className='flan' alt=''></img>
      </div>
      <div className='boxes three'>
      <img src={openerCorn1} className='corn' alt=''></img>
      </div>
      <div className='boxes four'>
      <img src={openerWoman1} className='woman' alt=''></img>
      </div>
      <div className='boxes five'>
      <img src={openerMan1} className='man' alt=''></img>
      </div>
      <div className='boxes six'>
      <img src={openerDessert1} className='dessert' alt=''></img>
      </div>
    </div>

      <div className='carousel-wrapper main boxes'>



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
<img src={mexico} className='mexico' alt=''></img></div>
 <div>
              <img src={paris} className='paris' alt=''></img>
              </div>
        </Carousel>
        </div>


      <div className='grid-3 right'>
      <div className='boxes seven '>
      <img src={openergal1} className='gal' alt=''></img>
      </div>
      <div className='boxes eight'>
      <img src={openergal1} className='gal' alt=''></img>
      </div>

        <div className='copy boxes'>
          <div className='intro'>
           <h5>Introducing World Food, an exceptional new series in the tradition of classic cookbooks that take you on a journey to the world's greatest cuisines and the remarkable cultures they come from.</h5>
          </div>
          <div >
          <button className='signUpBtn'><h7>SIGN UP NOW!</h7></button>
            </div>
</div>



      <div className='boxes nine'>
      <img src={openergal1} className='gal' alt=''></img>

      </div>








      </div>
      <div>
            <h2 className='grid-5 footer'><a href="https://jamesroper.photoshelter.com/index">Photography by James Roper</a></h2>
          </div>
    </div>
    </div>
  );
  export default Home
