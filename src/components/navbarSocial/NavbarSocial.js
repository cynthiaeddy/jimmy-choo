import React from 'react';
import '../../stylesheets/Navbar.css'


const NavbarSocial = () => {
  return (
    <nav id='navbarSocial'>
    <div className='social'>
              <div className='email'>
                <a href='mailto:james@jamesoseland.com'><i class="fas fa-envelope fa-2x"></i></a>


              </div>
              <div className='instagram'>
                <a href='https://www.instagram.com/jamesoseland'><i class="fab fa-instagram-square fa-2x"></i></a>

              </div>
              <div className='facebook'>
                <a href=' https://www.facebook.com/james.oseland'><i class="fab fa-facebook fa-2x"></i></a>

              </div>
            </div>
    </nav>
  );
}

export default NavbarSocial;
