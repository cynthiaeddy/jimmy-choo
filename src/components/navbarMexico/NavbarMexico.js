import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../navbar/ToggleButton'
import '../../stylesheets/Navbar.css'




const NavbarMexico = () => {
  return (

		<nav id="navbarMexico">
      <Link to="/navbar"><h6>Menu</h6></Link>
      <div className='buy'> <strong>Score the Book!</strong> <span >|</span>
      <a href="https://bookshop.org/books/world-food-mexico-city-heritage-recipes-for-classic-home-cooking-a-cookbook/9780399579851?aid=5304&listref=southwestern-mexican-cookbooks">Bookshop</a> <span>|</span>
      <a href="https://www.penguinrandomhouse.com/books/554675/world-food-mexico-city-by-james-oseland/">Penguin Random House</a><span>|</span>
        <a href="https://www.amazon.com/World-Food-Heritage-Recipes-Classic/dp/0399579850">Amazon</a>
        </div>

			<h6>James Oseland's <span class='nav-world'>WORLD FOOD</span></h6>




		</nav>
  );
};

export default NavbarMexico;
