import React from 'react';
import { Link } from 'react-router-dom';
// import ToggleButton from '../navbar/ToggleButton'
import '../../stylesheets/Navbar.css'




const NavbarHome = () => {
  return (

		<nav id="navbarHome">
			<Link to="/navbar"><h3>Menu</h3></Link>
			<h6>James Oseland's</h6>




		</nav>
  );
};

export default NavbarHome;


