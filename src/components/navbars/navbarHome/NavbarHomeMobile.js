import React from 'react';
import { Link } from 'react-router-dom';
import '../../../stylesheets/Navbar.css'





const NavbarHomeMobile = () => {
  return (

    <nav id="navbarHomeMobile" >

      <Link to="/navbar"><h6 className='menu'>Menu</h6></Link>
        <h3>James Oseland’s</h3>
            <h1>World Food</h1>

		</nav>
  );
};

export default NavbarHomeMobile;
