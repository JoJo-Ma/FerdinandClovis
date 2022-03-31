import React, { useState } from 'react';

import data from './data.js'
import './card.css'


const PickACard = () => {
  const [deck, setDeck] = useState(data.cards)
  const [picked, setPicked] = useState([])

  const handleClickPick = (index) => {
    const selectedCard = deck.filter(card => card.index === index)[0]
    setPicked([...picked, selectedCard])
    setDeck(deck.filter(card => card.index !== index))
  }

  const handleClickUnpick = (index) => {
    console.log(index);
  }

  const reset = () => {
    setDeck(data.cards)
    setPicked([])
  }

  return (
    <>
    <div className="pick-a-card">
      <h3>Find Ferdinand on the web</h3>
      {
        deck.length != 0
        ?
        deck.map((card) => {
          return <img className='pick-a-card-child' key={card.index} id={`pick-a-card-child${card.index}`} src={card.back} alt="Ferdinand Clovis" onClick={() => handleClickPick(card.index)} />
        })
        :
        <div className="resetButton" onClick={reset}>
          <a>Reset</a>
        </div>
      }
    </div>
    <div className="container-flex youtube" id="card-deck">
      {
        picked.length === 0
        ?
        <p>Pick a card!</p>
        :
        <>
        {
          picked.reverse().map((card) => {
          return   <div className="child-portfolio-videos new-item">
              <img className="child-portfolio-videos-front card" src={card.back} alt="Ferdinand Clovis" />
              <img className="child-portfolio-videos-back card" src={card.front} alt="Backside of Flexbox playing card" />
              <a href={card.ref} rel="noopener noreferrer" target="_blank" className="child-portfolio-textblock">{card.caption}</a>
            </div>
          })
        }
        </>
      }
    </div>
    </>
  )
}

export default PickACard;
