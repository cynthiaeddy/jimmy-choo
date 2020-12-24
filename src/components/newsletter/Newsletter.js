import React from 'react';
import Navbar from '../navbar/Navbar'
import Mailchimp from 'react-mailchimp-form'


import '../../stylesheets/Newsletter.css'

class Newsletter extends React.Component {



  render() {
    return (
      <div className='container'>
         <Navbar />


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




