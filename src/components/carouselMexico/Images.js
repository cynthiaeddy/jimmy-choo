import React from 'react'
import '../../stylesheets/AboutWF.css'


import cactus from '../../assets/images/mexico/cactus.jpg'
import family from '../../assets/images/mexico/family.jpg'
import flautas from '../../assets/images/mexico/flautas.jpg'
import masa from '../../assets/images/mexico/masa.jpg'
import recipe from '../../assets/images/recipe.jpg'
import citysunset from '../../assets/images/mexico/citysunset.jpg'
import parkspread from '../../assets/images/parkspread.jpg'
import biggerMexicoOpenerC from '../../assets/images/mexico/biggerMexicoOpenerC.jpg'



export default [
  {img: <img src={biggerMexicoOpenerC} className='spread mexico-opener' alt='spread'></img>},
  {img: <img src={cactus} className='spread' alt='spread'></img>},
  { img: <img src={family} className='spread' alt='spread'></img> },
  { img: <img src={citysunset} className='spread' alt='spread'></img> },

  {img: <img src={flautas} className='spread' alt='spread'></img>},

  { img: <img src={masa} className='spread' alt='spread'></img> },


];
