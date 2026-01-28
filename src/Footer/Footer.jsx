import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook, faWhatsapp, faYoutube, faInstagram, faLinkedin, faStrava,
} from '@fortawesome/free-brands-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './footer.css';

const whatsappContactImgUrl = '/static/images/whatsapp_contact.jpg';

function Footer() {
    const modalRef = useRef(null);

    useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
        function handleClickOutside(event) {
            if (modalRef.current && modalRef.current === event.target) {
                modalRef.current.style.display = 'none';
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalRef]);

    const openModal = () => {
        modalRef.current.style.display = 'block';
    };
    const closeModal = () => {
        modalRef.current.style.display = 'none';
    };

    return (
        <>
            <div className="container-flex container-footer">
                <div className="child-footer">
                    <img src="/static/images/I_Header/signature.png" alt="Ferdinand Clovis" id="signature" />
                </div>
                <div className="child-footer" id="houdini-quote">
                    <h5>
                        <em>
                          &rdquo;Keep up your enthusiasm!
                          There is nothing more contagious than exuberant enthusiasm.&rdquo;
                        </em>
                        <br />
                    </h5>
                    <h6>- Harry Houdini &#x1fa84;</h6>
                </div>
                <div className="child-footer" id="social-media">
                    <h5>Follow Ferdinand on social media</h5>
                    <ul>
                        <li>
                            <div className="social-media-el" onClick={openModal}>
                                <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                                <p>Whatsapp</p>
                            </div>
                        </li>
                        <li>
                            <a className="social-media-el" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCaqZexnOgRg9lpsYfV6PcxQ">
                                <FontAwesomeIcon icon={faYoutube} className="icon" />
                                <p>Youtube</p>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/the_magic_runner/?hl=en" className="social-media-el">
                                <FontAwesomeIcon icon={faInstagram} className="icon" />
                                <p>Instagram</p>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/FerdinandClovis/" className="social-media-el">
                                <FontAwesomeIcon icon={faFacebook} className="icon" />
                                <p>Facebook</p>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://hk.linkedin.com/in/ferdinandclovis" className="social-media-el">
                                <FontAwesomeIcon icon={faLinkedin} className="icon" />
                                <p>Linkedin</p>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.strava.com/athletes/34867518" className="social-media-el">
                                <FontAwesomeIcon icon={faStrava} className="icon" />
                                <p>Strava</p>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            <div ref={modalRef} className="modal-whatsapp">
                <div className="modal-whatsapp-content">
                    <div className="modal-whatsapp-icon"><FontAwesomeIcon icon={faClose} className="icon" onClick={closeModal} /></div>
                    <LazyLoadImage effect="opacity" src={whatsappContactImgUrl} alt="QR code whatsapp" className="modal-whatsapp-img" />
                </div>
            </div>
        </>
    );
}

export default Footer;
