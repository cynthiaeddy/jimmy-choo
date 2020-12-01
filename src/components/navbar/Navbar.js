import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../navbar/ToggleButton'
import '../../stylesheets/Navbar.css'




const Navbar = () => {
  return (

		<nav id="navbar">
				<Link to="/navbar"><h3>Menu</h3></Link>
			<Link to='/about-james'><h3>James Oseland</h3></Link>




		</nav>
  );
};

export default Navbar;
