import React from "react";
import { Carousel } from 'react-responsive-carousel';
import NavbarHomeMobile from '../navbars/navbarHome/NavbarHomeMobile'
import NavbarSocial from '../navbarSocial/NavbarSocial'
import { Link } from 'react-router-dom';




import '../../stylesheets/HomeMobile.css'


const HomeMobile = () =>{
    return (
      <div className='mobile-container'>

        <NavbarHomeMobile />
            <NavbarSocial/>


        < div className='mobile'>



          <h5>Introducing World Food, an exceptional new series in the tradition of classic cookbooks that take you on a journey to the world's greatest cuisines and the remarkable cultures they come from.</h5>

        <section className='main-mobile'>
          <div className='ipadtl'>
            <img src='https://imgur.com/pFJCQVg.png' className='gal' alt=''></img>
          </div>
          <div className='ipadml'>
            <img src='https://imgur.com/9YAUbs6.png' className='flan' alt=''></img>
          </div>
          <div className='ipadbl'>
            <img src='https://imgur.com/pokfhSn.png' className='corn' alt=''></img>
          </div>

          <div className='carousel-mobile'>
            <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={4000}
            transitionTime={1000}
            showIndicators={false}
            stopOnHover={true}
            showStatus={false}
            showArrows={false}
            >
              <div>
                <img src='https://imgur.com/vC8skgZ.png' className='mexico' alt=''></img></div>
              <div>
                <img src='https://imgur.com/2BytCct.png' className='paris' alt=''></img>
              </div>
            </Carousel>
          </div>


          <div className='ipadtr'>
            <img src='https://imgur.com/5W2uCN4.png' className='gal' alt=''></img>
          </div>
          <div className='ipadmr'>
            <img src='https://imgur.com/zGPJQ7t.png' className='gal' alt=''></img>
          </div>
          <div className='ipadbr'>
            <img src='https://imgur.com/kfZNdjw.png' className='gal' alt=''></img>
          </div>
        </section>

          <div className='mobile-footer'>
            <div className='credits'>
            <h2 ><a href="https://jamesroper.photoshelter.com/index">Photography by James Roper</a></h2>
              <h2 ><a href="https://cynthiaeddy.netlify.app">Built and Designed by Cynthia Eddy</a></h2>
              </div>
          <Link to="/newsletter"><button className='signUpBtn mobiled'><h7>NEWSLETTER SIGN UP</h7></button></Link>
        </div>
      </div>
        </div>
  )

}
  export default HomeMobile
