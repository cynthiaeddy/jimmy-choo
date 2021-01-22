import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import '../../../stylesheets/Navbar.css'


const Navbar = () => {
  return (

		<nav id="navbar">
			    <BrowserRouter>
				<Link to="/navbar"><h6>Menu</h6></Link>
				</BrowserRouter>
				<h6>James Oseland’s <span class='nav-world'>WORLD FOOD</span></h6>
		</nav>
  );
};

export default Navbar;
