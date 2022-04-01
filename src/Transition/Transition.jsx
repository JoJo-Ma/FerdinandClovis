import React, { useState } from 'react';

import './transition.css'

const Transition = () => {
  const [opacity, setOpacity] = useState(1)
  return (
    <div className="container-flex transition-alt hidden">
      <h4 id="quote1"><i>Reality</i> is created by the <i>mind</i></h4>
      <h6 id="quote2">We can change our reality by changing our mind.</h6>
    </div>
  )
}

export default Transition;
