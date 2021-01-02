import React from 'react';
import Mailchimp from 'react-mailchimp-form'
import Navbar from '../navbar/Navbar'
import NavbarSocial from '../navbarSocial/NavbarSocial'


import NavbarJimMobile from '../navbarJim/NavbarJimMobile'

import videoPlaceholder from '../../assets/images/videoPlaceholder.png'


import '../../stylesheets/Newsletter.css'

class Newsletter extends React.Component {
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
        className='chimp forms'

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
          <div className='video'>
          <a href="https://www.youtube.com/watch?v=nz3aV1jgHIE">
              <img src={videoPlaceholder} className="project-solo" alt="kayak" />{' '}
              placeholder
				</a>
              {/* <i className="fab fa-youtube fa-5x fa-2x"></i> */}
          </div>
        </div>
        </div>

    );
  }
}

export default Newsletter;




