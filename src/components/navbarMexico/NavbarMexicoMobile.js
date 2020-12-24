import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/Navbar.css'





const NavbarMexicoMobile = () => {
  return (

    <nav id="navbarMexicoMobile" >

{/* <div className='topnav'> */}
      <Link to="/navbar" id='menu'><h6>Menu</h6></Link>
{/* <div className='secondary-nav'> */}
        <h6>James Oseland's <br/><span class='nav-world'>WORLD FOOD</span></h6>
        {/* </div> */}

      <div className='buyNav mexico'>
        <a href="https://www.amazon.com/World-Food-Heritage-Recipes-Classic/dp/0399579850">Score the Book!</a>
        </div>

{/* </div> */}

		</nav>
  );
};

export default NavbarMexicoMobile;
