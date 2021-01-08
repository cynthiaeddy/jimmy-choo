import React from 'react'


import NavbarMexicoMobile from '../navbars/navbarMexico/NavbarMexicoMobile'
import NavbarSocial from '../navbarSocial/NavbarSocial'

import '../../stylesheets/AboutWF.css'



const AboutMexicoMobile = () => {

  return (
    < div className='mobile-container mexico'>
      <NavbarMexicoMobile />
      <NavbarSocial/>

      <div className='mobile mexicoAlt'>
        <img src='https://imgur.com/m0fagzo.png' className='spread mexicoopener-mobile' alt='spread'/>
        <img src='https://imgur.com/ZgGRhRt.png' className='spread' alt='spread'/>
        <img src='https://imgur.com/jPjrPeU.png' className='spread' alt='spread'/>
        <img src='https://imgur.com/j4prFfU.png' className='spread' alt='spread'/>
        <img src='https://imgur.com/7MzW9c6.png' className='spread' alt='spread'/>
        <img src='https://imgur.com/NrZ884y.png' className='spread' alt='spread'/>
      </div>
    </div>
  )

}
export default AboutMexicoMobile
