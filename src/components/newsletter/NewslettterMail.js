import React from 'react';
import Navbar from '../navbar/Navbar'
// import Mailchimp from 'react-mailchimp-form'
import MailchimpSubscribe from "react-mailchimp-subscribe"

// const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";


import '../../stylesheets/Newsletter.css'

class NewsletterMail extends React.Component {



  render() {
    return (
      <div className='container'>
        <Navbar />

        <div className='newsletter-container'>

        Subscribe
        <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
        </div>
      </div>

    );
  }
}

export default NewsletterMail;




