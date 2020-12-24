import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/Navbar.css'





const NavbarJimMobile = () => {
  return (

    <nav id="navbarMexicoMobile" className='jimMobile' >

{/* <div className='topnav'> */}
      <Link to="/navbar" id='menu'><h6>Menu</h6></Link>
{/* <div className='secondary-nav'> */}
        <h6>James Oseland's <br/><span class='nav-world'>WORLD FOOD</span></h6>


		</nav>
  );
};

export default NavbarJimMobile;
