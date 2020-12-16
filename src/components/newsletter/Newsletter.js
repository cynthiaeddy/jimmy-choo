import React from 'react';
import Navbar from '../navbar/Navbar'
import Mailchimp from 'react-mailchimp-form'


import '../../stylesheets/Newsletter.css'

class Newsletter extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: ''
    }




   handleChange = (e) => {
      this.setState({value: e.target.value});
    }

    handleSubmit =(e) => {
      alert('A name was submitted: ' + this.state.value);
      e.preventDefault();
    }

  render() {
    return (
      <div className='container'>
        <Navbar />
        <Mailchimp
        action='https://<YOUR-USER>.us16.list-manage.com/subscribe/post?u=XXXXXXXXXXXXX&amp;id=XXXXXX'
        fields={[
          {

            label: 'name',
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          },
          {
            name: 'FNAME',
            placeholder: 'name',
            type: 'text',
            required: true
          }
        ]}
        />
        <div className='newsletter-container'>
        <p>For exclusive content about James Oseland and his books, register for the official fan(really?) newsletter.</p>
          <form onSubmit={this.handleSubmit} className='form'>
        <label className='text-input'>
          <h2>First Name</h2>
          <input type="text" value={this.state.firstName} onChange={this.handleChange} autoComplete="off" />
            </label>
            <label className='text-input'>
            <h2>Last Name</h2>
          <input type="text" value={this.state.lastName} onChange={this.handleChange} autoComplete="off" />
            </label>
            <label className='text-input'>
            <h2> Email</h2>
          <input type="text" value={this.state.email} onChange={this.handleChange} autoComplete="off" />
        </label>
        <input type="submit" className='submit'value="Submit" />
      </form>




        </div>
      </div>

    );
  }
}

export default Newsletter;




