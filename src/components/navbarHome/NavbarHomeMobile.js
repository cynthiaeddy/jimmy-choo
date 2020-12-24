import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/Navbar.css'





const NavbarHomeMobile = () => {
  return (

    <nav id="navbarHomeMobile" >

      <Link to="/navbar"><h6>Menu</h6></Link>
        {/* <div className='head'> */}
        <h3>James Oselands's</h3>
            <h1>World Food</h1>
      {/* </div> */}

		</nav>
  );
};

export default NavbarHomeMobile;
