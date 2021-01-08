import React from 'react';
import { Link } from 'react-router-dom';
import '../../../stylesheets/Navbar.css'





const NavbarJimMobile = () => {
  return (

    <nav id="navbarJimMobile"  >

<Link to="/navbar"><h6 className='menu'>Menu</h6></Link>

        <h6 className='jim'>James Oseland’s <br/><span class='nav-world'>WORLD FOOD</span></h6>


		</nav>
  );
};

export default NavbarJimMobile;
