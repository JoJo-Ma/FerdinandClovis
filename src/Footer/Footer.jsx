import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faWhatsapp, faYoutube, faInstagram, faLinkedin, faStrava } from "@fortawesome/free-brands-svg-icons"


import './footer.css'

const Footer = () => {
  return (

    <div className="container-flex container-footer">
      <div className="child-footer">
        <img src={'/static/images/I_Header/signature.png'} alt="Ferdinand Clovis" id="signature" />
      </div>
      <div className="child-footer" id="houdini-quote">
        <h5><em>"Keep up your enthusiasm! There is nothing more contagious than exuberant enthusiasm."</em><br /></h5>
        <h6>- Harry Houdini</h6>
      </div>
      <div className="child-footer" id="social-media">
        <h5>Follow Ferdinand on social media</h5>
        <ul>
          <li><FontAwesomeIcon icon={faWhatsapp} className="icon" /><div className="social-media-el"><a>Whatsapp</a></div></li>
          <li><FontAwesomeIcon icon={faYoutube} className="icon" /><div className="social-media-el"><a>Youtube</a></div></li>
          <li><FontAwesomeIcon icon={faInstagram} className="icon" /><div className="social-media-el"><a>Instagram</a></div></li>
          <li><FontAwesomeIcon icon={faFacebook} className="icon" /><div className="social-media-el"><a>Facebook</a></div></li>
          <li><FontAwesomeIcon icon={faLinkedin} className="icon" /><div className="social-media-el"><a>Linkedin</a></div></li>
          <li><FontAwesomeIcon icon={faStrava} beat className="icon" /><div className="social-media-el"><a>Strava</a></div></li>
        </ul>
      </div>

    </div>
  )
}

export default Footer;
