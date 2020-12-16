import React from 'react';
import Navbar from '../navbar/Navbar'
import mexico from '../../assets/images/books/mexico.png'
import comfort from '../../assets/images/books/comfort.png'
import cradle from '../../assets/images/books/cradle.png'
import fork from '../../assets/images/books/fork.png'
import paris from '../../assets/images/books/paris.png'
import jimfullsm from '../../assets/images/books/jimfullsm.png'
import jim from '../../assets/images/books/jim.png'
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
              <a href="https://www.amazon.com/World-Food-Heritage-Recipes-Classic/dp/0399579850/ref=sr_1_1?crid=3PCZYLGIN4PLK&dchild=1&keywords=world+food+mexico+city&qid=1607723856&sprefix=world+food+me%2Caps%2C252&sr=8-1"><img src={mexico}></img>
              <div class="middle">
               <div class="text">buy</div>
              </div></a>
            </div>

            <div className='book'>
              <a href="https://www.amazon.com/World-Food-Heritage-Recipes-Classic/dp/0399579834/ref=sr_1_2?dchild=1&keywords=world+food+paris&qid=1607724226&s=books&sr=1-2"><img src={paris}></img>
              <div class="middle">
                <div class="text">buy</div>
              </div></a>
            </div>

            <div className='book'>
              <a href="https://www.amazon.com/Saveur-Comfort-Cooking-Oseland-2011-04-20/dp/B011KD0JUG/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr="><img src={comfort}></img>
              <div class="middle">
                <div class="text">buy</div>
              </div></a>
            </div>

            <div className='book'>
              <a href="https://www.amazon.com/gp/product/0393054772/ref=dbs_a_def_rwt_bibl_vppi_i4"><img src={cradle}></img>
              <div class="middle">
                <div class="text">buy</div>
              </div></a>
            </div>
            <div className='book'>
              <a href="https://www.amazon.com/gp/product/1743218443/ref=dbs_a_def_rwt_bibl_vppi_i5"><img src={fork}></img>
              <div class="middle">
                <div class="text">buy</div>
              </div></a>
            </div>

            <div className='book'>
              <a href="https://www.amazon.com/Jimmy-Neurosis-Memoir-James-Oseland/dp/0062267361/ref=sxts_sxwds-bia-wc-p13n1_0?crid=2PUBFRZHQT9TE&cv_ct_cx=jimmy+neurosis&dchild=1&keywords=jimmy+neurosis&pd_rd_i=0062267361&pd_rd_r=e19fa31a-4d7f-4f8b-8dbf-425c9615a652&pd_rd_w=muLPe&pd_rd_wg=ccBuf&pf_rd_p=1835a2a9-7ed8-48dc-ad07-fcd7527bd2bc&pf_rd_r=651P663Q3K24S1H5DVSH&psc=1&qid=1607723919&sprefix=jimmy+neur%2Caps%2C247&sr=1-1-80ba0e26-a1cd-4e7b-87a0-a2ffae3a273c"><img src={jim}></img>
              <div class="middle">
                <div class="text">buy</div>
              </div></a>
            </div>
          </div>

          <div className='social'>
            <div className='email'>
            <a href='mailto:james@jamesoseland.com'><i class="fas fa-envelope fa-2x"></i></a>


             </div>
            <div className='instagram'>
            <a href='https://www.instagram.com/jamesoseland'><i class="fab fa-instagram-square fa-2x"></i></a>

            </div>
            <div className='facebook'>
            <a href=' https://www.facebook.com/james.oseland'><i class="fab fa-facebook fa-2x"></i></a>

            </div>
          </div>

        </div>
        </div>
      </div>
      );
}

export default AboutJim;
