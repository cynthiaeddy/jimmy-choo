import React from 'react'
import '../../stylesheets/AboutWF.css'


import cactusSpread from '../../assets/cactusSpread.jpg'
import biggerFamily from '../../assets/biggerFamily.jpg'
import biggerFlautas from '../../assets/biggerFlautas.jpg'
import biggerMasa from '../../assets/biggerMasa.jpg'
import biggerMexicoOpenerC from '../../assets/biggerMexicoOpenerC.jpg'



export default [
  {img: <img src={biggerMexicoOpenerC} className='spread mexico-opener' alt='spread'></img>},
  {img: <img src={cactusSpread} className='spread' alt='spread'></img>},
  {img: <img src={biggerFamily} className='spread' alt='spread'></img>},
  {img: <img src={biggerFlautas} className='spread' alt='spread'></img>},
  {img: <img src={biggerMasa} className='spread' alt='spread'></img>}

];
