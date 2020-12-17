import React from "react";
import { Carousel } from 'react-responsive-carousel';
import NavbarHome from '../navbarHome/NavbarHome'


import mexicoCover from '../../assets/images/home/mexicoCover.jpg'
import parisCover from '../../assets/images/home/parisCover.jpg'



import corn from '../../assets/images/home/corn.jpg'
import flancut3 from '../../assets/images/flancut3.jpg'
import flan1 from '../../assets/images/home/flan1.jpg'
import gal from '../../assets/images/home/gal.jpg'
import man from '../../assets/images/home/man.jpg'
import womanPink from '../../assets/images/home/womanPink.jpg'
import waiter from '../../assets/images/waiter.jpg'
import galred from '../../assets/images/galred.jpg'
import orange2 from '../../assets/images/orange2.jpg'






import '../../stylesheets/Home3.css'


const Home6 = () => (
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
      <img src={flancut3} className='dessert' alt=''></img>
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


      <div className='grid-3 right homeThree'>
      <div className='boxes seven l'>
      <img src={waiter} className='gal' alt=''></img>
      </div>
      <div className='boxes eight mid'>
      <img src={orange2} className='gal' alt=''></img>
      </div>

        <div className='copy boxes'>
          <div className='intro '>
           <h5>Introducing World Food, an exceptional new series in the tradition of classic cookbooks that take you on a journey to the world's greatest cuisines and the remarkable cultures they come from.</h5>
          </div>
          <div >
          <button className='signUpBtn homeThree'><h7>SIGN UP NOW!</h7></button>
            </div>
</div>



      <div className='boxes nine bottom'>
      <img src={galred} className='gal' alt=''></img>

      </div>








      </div>
      <div>
            <h2 className='grid-5 footer'><a href="https://jamesroper.photoshelter.com/index">Photography by James Roper</a></h2>
          </div>
    </div>
    </div>
  );
  export default Home6
