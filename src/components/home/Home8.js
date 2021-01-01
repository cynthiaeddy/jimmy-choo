import React from "react";
import { Carousel } from 'react-responsive-carousel';
import NavbarHome from '../navbarHome/NavbarHome'
import NavbarSocial from '../navbarSocial/NavbarSocial'
import { Link } from 'react-router-dom';


import '../../stylesheets/Home8.css'


const Home8= () => (
  <div className='home-container'>
    <NavbarHome />
    <NavbarSocial/>


    <div className='home outer-grid homeEight'>

      <div className='grid-1 headera'>
        <h3>James Oseland’s</h3>
        <h1>World Food</h1>
      </div>

      <section className='main-container'>

        <div className='boxes one ltla'>
          <img src='https://imgur.com/pFJCQVg.png' className='gal inner' alt=''></img>
          </div>
          <div className='boxes two ltra'>
          <img src='https://imgur.com/3JbHdNa.png' className='flan inner' alt=''></img>
          </div>
          <div className='boxes three lmla'>
          <img src='https://imgur.com/9YAUbs6.png' className='corn inner'  alt=''></img>
          </div>
          <div className='boxes four lmra'>
          <img src='https://imgur.com/rGsUh8n.png' className='womanPink inner' alt=''></img>
          </div>
          <div className='boxes five lbla'>
          <img src='https://imgur.com/pokfhSn.png' className='man inner' alt=''></img>
          </div>
          <div className='boxes six lbra'>
          <img src='https://imgur.com/SDyISxG.png' className='dessert inner' alt=''></img>
        </div>

        <div className='carousel-wrapper maina '>
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={4000}
            transitionTime={1000}
            showIndicators={false}
            showStatus={false}
            showArrows={false}
            stopOnHover={true}
            >
              <div>
                <img src='https://imgur.com/vC8skgZ.png' className='mexico' alt=''></img>
              </div>
              <div>
                <img src='https://imgur.com/2BytCct.png' className='paris' alt=''></img>
              </div>
          </Carousel>
        </div>

        <div className='boxes seven rtla'>
          <img src='https://imgur.com/5W2uCN4.png' className='gal' alt=''></img>
          </div>
          <div className='boxes eight rnla'>
          <img src='https://imgur.com/zGPJQ7t.png' className='gal' alt=''></img>
          </div>
          <div className='boxes nine rbla'>
          <img src='https://imgur.com/kfZNdjw.png' className='gal' alt=''></img>
        </div>

        <div className='copya boxes'>
          <h5>Introducing World Food, an exceptional new series in the tradition of classic cookbooks that takes you on a journey to the world’s greatest cuisines and the remarkable cultures they come from.</h5>
          <Link to="/newsletter"  className='signUpBtn homeEight'><h7>NEWSLETTER SIGN UP</h7></Link>
        </div>
      </section>

      <div className='footera'>
        <h2 ><a href="https://jamesroper.photoshelter.com/index">Photography by James Roper</a></h2>
        <h2 ><a href="https://cynthiaeddy.netlify.app">Designed and Built by Cynthia Eddy</a></h2>
      </div>
    </div>
  </div>
  );
  export default Home8
