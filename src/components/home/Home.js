import React from "react";
import { Carousel } from 'react-responsive-carousel';
// import { Link } from 'react-router-dom'
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
import openerWoman1 from '../../assets/openerWoman1.jpg'
import openerWaiter1 from '../../assets/openerWaiter1.jpg'





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
      <div className='boxes seven'>
        box seven
      </div>
      <div className='boxes eight'>
        box eight
      </div>

      <div className='copy boxes'>
        copy
        <div className='nested'>
          <div className='nested-copy'>
            this is nested copy
          </div>
        </div>
      </div>

      <div className='boxes nine'>
        box nine
      </div>
      <div className='boxes ten'>
        box ten
      </div>







      </div>
      <div>
            <h2 className='grid-5 footer'><a href="https://jamesroper.photoshelter.com/index">Photography by James Roper</a></h2>
          </div>
    </div>
    </div>
  );
  export default Home
