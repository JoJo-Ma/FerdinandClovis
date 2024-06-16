import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import emailjsCreds from './emailjsCreds.js'
import ShineStar from './ShineStar'

import './contact.css'

const Contact = () => {
  const [emailStatus, setEmailStatus] = useState()
  const form = useRef();

  useEffect(() => {
    if (emailStatus === null) {
      return
    }
    const timer = setTimeout(() => setEmailStatus(null), 5000)
    return () => clearTimeout(timer)
  }, [emailStatus])

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(emailjsCreds.serviceId, emailjsCreds.templateId, form.current, emailjsCreds.userId)
    .then((result) => {
        console.log(result.text);
        setEmailStatus("SENT")
    }, (error) => {
        console.log(error.text);
        setEmailStatus("ERROR")
    });
  };

  return (
    <div id="contact">
      <h1>Get in touch!</h1>
      <form ref={form} id="subscribe_form" method="post" onSubmit={sendEmail}>
        <input type="text" className="form-el" name="user_name" placeholder="Name"/>
        <input type="email" className="form-el" name="user_email" placeholder="Email address" />
        <textarea className="form-el message" name="message" rows="3" placeholder="Message" ></textarea>
        <button type="submit" className="submitButton">Send</button>
      </form>

      { emailStatus === "SENT" && <ShineStar className="alertEmail" text={"Sent!"}/> }
      { emailStatus === "ERROR" && <p className="alertEmail">Error! :(</p> }



    </div>
  )
}

export default Contact;
