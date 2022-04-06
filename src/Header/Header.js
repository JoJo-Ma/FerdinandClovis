import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import LazyBackroundImage from '../util/LazyBackroundImage'

import './header.css'

const background="/static/images/I_Header/header.jpg"
const placeholder="/static/images/I_Header/header_placeholder.jpg"
const backgroundOptions = "linear-gradient(to bottom, rgba(245, 246, 252, -1), var(--color1))"

const Header = () => {

  return (
    <LazyBackroundImage
      className="header"
      source={background}
      placeholder={placeholder}
      options={backgroundOptions}
    >
      <LazyLoadImage src={'/static/images/I_Header/signature.png'} alt="Ferdinand Clovis" id="signature" />
    </LazyBackroundImage>
  )
}

export default Header;
