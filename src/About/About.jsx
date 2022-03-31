import React from 'react';
import Slideshow from './Slideshow'



import './about.css'

const About = () => {


  return (
    <div id="about">
      <h1>Never stop dreaming, exploring, creating!</h1>
      <div className="container-flex container-about" >
        <div className="child-about">
          <p>Engineer, entrepreneur and athlete... <strong>Ferdinand Clovis</strong> is not only a Magician but a unique creator merging Arts with extreme sports!</p>
        </div>
        <Slideshow />
      </div>
    </div>
  )
}

export default About;
