import React from 'react';

import './contact.css'

const Contact = () => {
  return (
    <div id="contact">
      <h1>Get in touch!</h1>
      <form id="subscribe_form" method="post">
        <input type="text" className="form-el" value="" placeholder="Name" />
        <input type="email" className="form-el" value="" placeholder="Email address" />
        <textarea className="form-el message" rows="3" placeholder="Message"></textarea>
        <button type="submit" className="submitButton">Send</button>
      </form>

    </div>
  )
}

export default Contact;
