import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/Navbar.css'



const NavBarToggle = () => {
  return (

      <h3>
            <ul className='toggleNavBar'>
						<li>
							<Link to="/" className="alt-home">
								Home
							</Link>
              </li>
						<li>
							<Link to="/world-food" className="world-food">
								About World Food
							</Link>
						</li>
						<li>
							<Link to="/about-james" className="about-james">
								About James Oseland
							</Link>
					</li>

					<li>
							<Link to="newsletter" className="newsletter">
								Newsletter
							</Link>
          </li>
              </ul>
					</h3>

  );
};

export default NavBarToggle;
