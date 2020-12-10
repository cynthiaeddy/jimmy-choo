import React from 'react';
import Navbar from '../navbar/Navbar'
import mexico from '../../assets/images/mexico.png'
import comfort from '../../assets/images/comfort.png'
import cradle from '../../assets/images/cradle.png'
import fork from '../../assets/images/fork.png'
import saveur from '../../assets/images/saveur.png'
import jimfullsm from '../../assets/images/jimfullsm.png'
import jim from '../../assets/images/jim.png'
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
          <p><span>James Oseland</span> travels extensively in search of the world’s best restaurants, street food stalls, markets, and home cooks. He is the author and editor of World Food, a new book series from Ten Speed Press, and was the editor-in-chief for nine years of <i>Saveur</i>, America’s most acclaimed food magazine, where his work garnered many accolades, including seven James Beard Awards. His cookbook <i>Cradle of Flavor</i> was named one of the best books of 2006 by the <i>New York Times </i>and <i>Good Morning America</i>. Additionally, James’s writing has appeared in <i>Gourmet, Vogue, Food and Wine</i>, and the <i>Wall Street Journal</i>, where he writes the “Cook’s Playbook” column. He has appeared on <i>Celebrity Apprentice</i>, the <i>Today Show, Iron Chef America</i>, and was a permanent judge on all five seasons of Bravo’s <i>Top Chef Masters</i>. James is a popular cooking teacher and has taught at the Institute for Culinary Education, the New School, and New York City’s Natural Gourmet. He has lectured at culinary institutes and food societies around the world; in 2011, he delivered the keynote speech for the International Food Bloggers Conference. In 2013, he starred as himself in a series of Wendy’s commercials. He has lived in Indonesia, Malaysia, Thailand, and India and now calls Mexico City home.</p>
          </div>

          <div className='box books'>

              <div className='book'>
              <a href="#"><img src={mexico }></img></a>
            </div>
            <div className='book'>
              <a href="#"><img src={comfort }></img></a>
            </div>
            <div className='book'>
              <a href="#"><img src={cradle }></img></a>
            </div>
            <div className='book'>
              <a href="#"><img src={fork }></img></a>
            </div>
            <div className='book'>
              <a href="#"><img src={saveur }></img></a>
            </div>
            <div className='book'>
              <a href="#"><img src={jim }></img></a>
            </div>
          </div>
        </div>
        </div>
      </div>
      );
}

export default AboutJim;
