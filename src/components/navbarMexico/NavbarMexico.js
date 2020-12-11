import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../navbar/ToggleButton'
import '../../stylesheets/Navbar.css'




const NavbarMexico = () => {
  return (

		<nav id="navbarMexico">
      <Link to="/navbar"><h6>Menu</h6></Link>
      <div className='buy'>
        <a href="https://www.amazon.com/World-Food-Heritage-Recipes-Classic/dp/0399579850">Score the Book!</a>
        </div>

			<h6>James Oseland's <span class='nav-world'>WORLD FOOD</span></h6>




		</nav>
  );
};

export default NavbarMexico;
