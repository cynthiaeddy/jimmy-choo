import React from 'react';
import { Link } from 'react-router-dom';
import '../../../stylesheets/Navbar.css'



const NavBarToggle = () => {
	return (
		<div id="toggle-container">
          <div className='toggle-inner'>
      <h4>
				<ul className='toggleNavBar'>
					<li>
						<Link to="/" className="alt-home">
							Home
						</Link>
					</li>
					<li>
						<Link to="/world-food" className="world-food">
							World Food: Mexico City
						</Link>
					</li>
					<li>
						<Link to="/about-james" className="about-james">
							About James Oseland
						</Link>
				</li>

					<li>
						<Link to="/newsletter" className="newsletter">
							Newsletter and Videos
						</Link>
					</li>
				</ul>
			</h4>
		</div>
			</div>

  );
};

export default NavBarToggle;
