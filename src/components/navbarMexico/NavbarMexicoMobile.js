import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../navbar/ToggleButton'
import '../../stylesheets/Navbar.css'
import '../../stylesheets/AboutWFMobile.css'





const NavbarMexicoMobile = () => {
  return (

    <nav id="navbarMexicoMobile" >

      <Link to="/navbar"><h6>Menu</h6></Link>
<div className='topnav'>

        <h6>James Oseland's <span class='nav-world'>WORLD FOOD</span></h6>
        </div>

      <div className='buyNav mexico'>
        <a href="https://www.amazon.com/World-Food-Heritage-Recipes-Classic/dp/0399579850">Score the Book!</a>
        </div>



		</nav>
  );
};

export default NavbarMexicoMobile;
