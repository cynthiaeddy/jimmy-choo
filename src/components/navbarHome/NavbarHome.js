import React from 'react';
import { Link } from 'react-router-dom';
// import ToggleButton from '../navbar/ToggleButton'
import '../../stylesheets/Navbar.css'




const NavbarHome = () => {
  return (

		<nav id="navbarHome">
			<Link to="/navbar"><h6>Menu</h6></Link>
		</nav>
  );
};

export default NavbarHome;


