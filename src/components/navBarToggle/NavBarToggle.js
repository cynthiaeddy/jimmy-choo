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

				<li>
							<Link to="/home1" className="home1">
								Home1
							</Link>
				</li>

				<li>
							<Link to="/home2" className="home2">
								Home2
							</Link>
				</li>
				<li>
							<Link to="/home3" className="home3">
								Home3
							</Link>
				</li>
				{/* <li>
							<Link to="/home4" className="home4">
								Home4
							</Link>
          </li> */}
              </ul>
					</h4>

  );
};

export default NavBarToggle;
