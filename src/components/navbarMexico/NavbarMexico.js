import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../navbar/ToggleButton'
import '../../stylesheets/Navbar.css'




const NavbarMexico = () => {
  return (

		<nav id="navbarMexico">
      <Link to="/navbar"><h3>Menu</h3></Link>
      <div className='buy'> <strong>Buy the Book!</strong> <span >|</span>
      <a href="https://bookshop.org/books/world-food-mexico-city-heritage-recipes-for-classic-home-cooking-a-cookbook/9780399579851?aid=5304&listref=southwestern-mexican-cookbooks">Bookshop</a> <span>|</span>
      <a href="https://www.penguinrandomhouse.com/books/554675/world-food-mexico-city-by-james-oseland/">Penguin Randomhouse</a><span>|</span>
        <a href="https://www.amazon.com/World-Food-Heritage-Recipes-Classic/dp/0399579850">Amazon</a>
        </div>

			<Link to='/about-james'><h3>James Oseland</h3></Link>




		</nav>
  );
};

export default NavbarMexico;
