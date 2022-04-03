import React, { useState } from 'react';

import './contact.css'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div id="contact">
      <h1>Get in touch!</h1>
      <form id="subscribe_form" method="post">
        <input type="text" className="form-el" placeholder="Name" onChange = { (e) => handleName(e)}/>
        <input type="email" className="form-el" placeholder="Email address" onChange = { (e) => handleEmail(e)} />
        <textarea className="form-el message" rows="3" placeholder="Message" onChange = { (e) => handleMessage(e)} ></textarea>
        <button type="submit" className="submitButton">Send</button>
      </form>

    </div>
  )
}

export default Contact;
