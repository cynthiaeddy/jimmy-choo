import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/Navbar.css'



const NavBarToggle = () => {
  return (

      <h4>
            <ul className='toggleNavBar'>
						<li>
							<Link to="/" className="alt-home">
								Home
							</Link>
              </li>


				<li>
							<Link to="/home7" className="home7">
								Home7
							</Link>
				</li>


				<li>
							<Link to="/home8" className="home8">
								Home8
							</Link>
				</li>
				<li>
							<Link to="/world-food" className="world-food">
								World Food Mexico City
							</Link>
						</li>
						<li>
							<Link to="/about-james" className="about-james">
								About James Oseland
							</Link>
					</li>

					<li>
							<Link to="/newsletter" className="newsletter">
								Newsletter
							</Link>
				</li>

              </ul>
					</h4>

  );
};

export default NavBarToggle;
