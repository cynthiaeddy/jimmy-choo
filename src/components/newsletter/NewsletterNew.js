import React from 'react';
import Mailchimp from 'react-mailchimp-form'

import Navbar from '../navbars/navbar/Navbar'
import NavbarSocial from '../navbars/navbarSocial/NavbarSocial'
import NavbarJimMobile from '../navbars/navbarJim/NavbarJimMobile'
import '../../stylesheets/Newsletter.css'

class NewsletterNew extends React.Component {
  state = {
		width: window.innerWidth
	};

	componentDidMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	handleWindowSizeChange = () => {
		this.setState({ width: window.innerWidth });
	};

  render() {
    let isMobile;
    let width = this.state.width;
    width < 700 ? (isMobile = true) : (isMobile = false);
    return (
      <div className='container'>
        {isMobile ? <NavbarJimMobile /> : <Navbar />
        }
        <NavbarSocial/>

        <div id='newsletter-container'>
          <p>For exclusive content, including videos and recipes, register for the official newsletter.</p>
          <Mailchimp
            action={process.env.REACT_APP_MAILCHIMP_URL}
            className='chimped forms'
            fields={[
            {
              name: 'EMAIL',
              placeholder: 'email',
              type: 'email',
              required: true
            },
            {
              name: 'FNAME',
              placeholder: 'first name',
              type: 'text',
              required: true
            },
            {
              name: 'LNAME',
              placeholder: 'last name',
              type: 'text',
              required: true
            }
            ]}
          />
          {/* <div className='video'>
            <a href="https://www.youtube.com/watch?v=nz3aV1jgHIE">
              <img src='https://imgur.com/T15YGXa.png' alt="video card" />
            </a>
            <i className="fab fa-youtube fa-2x vid-button"></i>
          </div> */}
        </div>
      </div>

    );
  }
}

export default NewsletterNew;




