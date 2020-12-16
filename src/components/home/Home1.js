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
import openerWaiter1 from '../../assets/images/openerWaiter1.jpg'
import woman3 from '../../assets/images/woman3.jpg'
import man2 from '../../assets/images/man2.jpg'
import orange1 from '../../assets/images/orange1.jpg'






import '../../stylesheets/Home.css'


const Home1 = () => (
  <div className='home-container'>
    <NavbarHome/>


    <div className='home outer-grid'>
      <div className='grid-1 header'>
        <h3>James Oselands's</h3>
            <h1>World Food</h1>
          </div>

      <div className='grid-2 left'>
      <div className='boxes one'>
      <img src={gal} className='gal' alt=''></img>
      </div>
      <div className='boxes two'>
      <img src={flan1} className='flan' alt=''></img>
      </div>
      <div className='boxes three'>
      <img src={corn} className='corn' alt=''></img>
      </div>
      <div className='boxes four'>
      <img src={womanPink} className='womanPink' alt=''></img>
      </div>
      <div className='boxes five'>
      <img src={man} className='man' alt=''></img>
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
<img src={mexicoCover} className='mexico' alt=''></img></div>
 <div>
              <img src={parisCover} className='paris' alt=''></img>
              </div>
        </Carousel>
        </div>


      <div className='grid-3 right'>
      <div className='boxes seven l'>
      <img src={woman3} className='gal' alt=''></img>
      </div>
      <div className='boxes eight mid'>
      <img src={orange1} className='gal' alt=''></img>
      </div>

        <div className='copy boxes'>
          <div className='intro'>
           <h5>Introducing World Food, an exceptional new series in the tradition of classic cookbooks that take you on a journey to the world's greatest cuisines and the remarkable cultures they come from.</h5>
          </div>
          <div >
          <button className='signUpBtn'><h7>SIGN UP NOW!</h7></button>
            </div>
</div>



      <div className='boxes nine bottom'>
      <img src={openerWaiter1} className='gal' alt=''></img>

      </div>








      </div>
      <div>
            <h2 className='grid-5 footer'><a href="https://jamesroper.photoshelter.com/index">Photography by James Roper</a></h2>
          </div>
    </div>
    </div>
  );
  export default Home1
