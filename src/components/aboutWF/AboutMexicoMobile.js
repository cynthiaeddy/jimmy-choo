import React from 'react'


import NavbarMexicoMobile from '../navbarMexico/NavbarMexicoMobile'
import '../../stylesheets/AboutWFMobile.css'
import '../../stylesheets/AboutWF.css'




import cactus from '../../assets/images/mexico/cactus.jpg'
import family from '../../assets/images/mexico/family.jpg'
import flautas from '../../assets/images/mexico/flautas.jpg'
import masa from '../../assets/images/mexico/masa.jpg'
import recipe from '../../assets/images/recipe.jpg'
import citysunset from '../../assets/images/mexico/citysunset.jpg'
import parkspread from '../../assets/images/parkspread.jpg'
import biggerMexicoOpener from '../../assets/images/mexico/biggerMexicoOpener.jpg'




const AboutMexicoMobile = () => {

  return (
    < div className='mobile-container mexico'>
      <NavbarMexicoMobile/>
    <div className='mobile mexicoAlt'>
       <img src={biggerMexicoOpener} className='spread mexicoopener-mobile' alt='spread'/>
  <img src={cactus} className='spread' alt='spread'/>
 <img src={family} className='spread' alt='spread'/>
  <img src={citysunset} className='spread' alt='spread'/>

  <img src={flautas} className='spread' alt='spread'/>

   <img src={masa} className='spread' alt='spread'/>
   </div>
    </div>
  )

}
export default AboutMexicoMobile
