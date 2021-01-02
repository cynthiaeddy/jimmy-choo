import React from "react";
import { Carousel } from 'react-responsive-carousel';
import NavbarHome from '../navbarHome/NavbarHome'
import NavbarHomeMobile from '../navbarHome/NavbarHomeMobile'
import NavbarSocial from '../navbarSocial/NavbarSocial'



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
            <NavbarSocial/>



        < div className='mobile'>

        <div className='ipadhead'>
          <h3>James Oseland’s</h3>
          <h1>World Food</h1>
          <h5>Introducing World Food, an exceptional new series in the tradition of classic cookbooks that take you on a journey to the world's greatest cuisines and the remarkable cultures they come from.</h5>
        </div>

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
          <h2 ><a href="https://jamesroper.photoshelter.com/index">Photography by James Roper</a></h2>
          <button className='signUpBtn mobile'><h7>NEWSLETTER SIGN UP</h7></button>
        </div>
      </div>
    </div>
  )
  }
}
  export default HomeMobile
