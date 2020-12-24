import React from 'react';
import Mailchimp from 'react-mailchimp-form'
import Navbar from '../navbar/Navbar'


import NavbarJimMobile from '../navbarJim/NavbarJimMobile'

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



        <div id='newsletter-container'>
          <p>For exclusive content about James Oseland and his books, register for the official newsletter.</p>
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
        </div>
        </div>

    );
  }
}

export default Newsletter;




