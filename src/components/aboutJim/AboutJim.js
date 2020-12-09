import React from 'react';
import Navbar from '../navbar/Navbar'
import mexico from '../../assets/mexico.jpg'
import comfort from '../../assets/comfort.jpg'
import cradle1 from '../../assets/cradle1.jpg'
import lonely from '../../assets/lonely.jpg'
import jimfullsm from '../../assets/jimfullsm.png'
import jimNeurosis from '../../assets/jimNeurosis.jpg'
import '../../stylesheets/AboutJim.css'






const AboutJim = () => {
  return (
    <div className='container'>
      <Navbar />
      <div className='jim-container'>

        <div className='image jim-left box'>
          <img src={jimfullsm} className='jim-img'alt='jim photo'></img>
        </div>

        <div className=' box jim-copy jim-right'>


          <div className='copys'>
          <p>James Oseland travels extensively in search of the world’s best restaurants, street food stalls, markets, and home cooks. He is the author and editor of World Food, a new book series from Ten Speed Press, and was the editor-in-chief for nine years of Saveur, America’s most acclaimed food magazine, where his work garnered many accolades, including seven James Beard Awards. His cookbook Cradle of Flavor was named one of the best books of 2006 by the New York Times and Good Morning America. Additionally, James’s writing has appeared in Gourmet, Vogue, Food and Wine, and the Wall Street Journal, where he writes the “Cook’s Playbook” column. He has appeared on Celebrity Apprentice, the Today Show, Iron Chef America, and was a permanent judge on all five seasons of Bravo’s Top Chef Masters. James is a popular cooking teacher and has taught at the Institute for Culinary Education, the New School, and New York City’s Natural Gourmet. He has lectured at culinary institutes and food societies around the world; in 2011, he delivered the keynote speech for the International Food Bloggers Conference. In 2013, he starred as himself in a series of Wendy’s commercials. He has lived in Indonesia, Malaysia, Thailand, and India and now calls Mexico City home.</p>
          </div>

          <div className='box books'>

              <div className='book'>
              <a href="#"><img src={mexico }></img></a>
            </div>
            <div className='book'>
              <a href="#"><img src={mexico }></img></a>
            </div>
            <div className='book'>
              <a href="#"><img src={mexico }></img></a>
            </div>
            <div className='book'>
              <a href="#"><img src={mexico }></img></a>
            </div>
            <div className='book'>
              <a href="#"><img src={mexico }></img></a>
            </div>
            <div className='book'>
              <a href="#"><img src={mexico }></img></a>
            </div>
          </div>
        </div>
        </div>
      </div>
      );
}

export default AboutJim;
