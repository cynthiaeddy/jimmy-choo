import React from "react";
import { Carousel } from 'react-responsive-carousel';
import NavbarHome from '../navbarHome/NavbarHome'


import mexicoCover from '../../assets/images/home/mexicoCover.jpg'
import parisCover from '../../assets/images/home/parisCover.jpg'



import corn from '../../assets/images/home/corn.jpg'
import flancut3 from '../../assets/images/home/flancut3.jpg'
import flan1 from '../../assets/images/home/flan1.jpg'
import gal from '../../assets/images/home/gal.jpg'
import man from '../../assets/images/home/man.jpg'
import womanPink from '../../assets/images/home/womanPink.jpg'
import waiter from '../../assets/images/home/waiter.jpg'
import galred from '../../assets/images/home/galred.jpg'
import orange2 from '../../assets/images/home/orange2.jpg'






import '../../stylesheets/Home8.css'


const Home8= () => (
  <div className='home-container'>
    <NavbarHome/>


    <div className='home outer-grid homeEight'>

      <div className='grid-1 headera'>
        <h3>James Oselands's</h3>
            <h1>World Food</h1>
      </div>

      <section className='main-container'>

      <div className='boxes one ltla'>
      <img src={gal} className='gal' alt=''></img>
      </div>
      <div className='boxes two ltra'>
      <img src={flan1} className='flan' alt=''></img>
      </div>
      <div className='boxes three lmla'>
      <img src={corn} className='corn' alt=''></img>
      </div>
      <div className='boxes four lmra'>
      <img src={womanPink} className='womanPink' alt=''></img>
      </div>
      <div className='boxes five lbla'>
      <img src={man} className='man' alt=''></img>
      </div>
      <div className='boxes six lbra'>
      <img src={flancut3} className='dessert' alt=''></img>
      </div>

      <div className='carousel-wrapper maina boxes'>

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



      <div className='boxes seven rtla'>
      <img src={waiter} className='gal' alt=''></img>
      </div>
      <div className='boxes eight rnla'>
      <img src={orange2} className='gal' alt=''></img>
      </div>
      <div className='boxes nine rbla'>
      <img src={galred} className='gal' alt=''></img>

      </div>

        <div className='copya boxes'>
           <h5>Introducing World Food, an exceptional new series in the tradition of classic cookbooks that take you on a journey to the world's greatest cuisines and the remarkable cultures they come from.</h5>
          <button className='signUpBtn homeEight'><h7>SIGN UP NOW!</h7></button>
</div>
</section>

      <div className='footera'>
            <h2 ><a href="https://jamesroper.photoshelter.com/index">Photography by James Roper</a></h2>
          </div>
    </div>
    </div>
  );
  export default Home8
