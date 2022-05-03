import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component';


import data from './data.js'
import './card.css'


const PickACard = () => {
  const modalRef = useRef()
  const [deck, setDeck] = useState(data.cards)
  const [picked, setPicked] = useState([])
  const [pickedForModal, setPickedForModal] = useState([])

  const handleClickPick = (index) => {
    const selectedCard = deck.filter(card => card.index === index)[0]
    setPickedForModal(selectedCard)
    setPicked([...picked, selectedCard])
    setDeck(deck.filter(card => card.index !== index))
    openModal(index)
  }

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (modalRef.current && modalRef.current === event.target) {
        closeModal()
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  const reset = () => {
    setDeck(data.cards)
    setPicked([])
  }

  const openModal = (index) => {
    modalRef.current.style.display = "block"
  }
  const closeModal = () => {
    modalRef.current.style.display = "none"
  }

  return (
    <>
    <div className="pick-a-card">
      <h3>Find Ferdinand on the web</h3>
      {
        deck.length !== 0
        ?
        deck.map((card) => {
          return <LazyLoadImage className='pick-a-card-child' key={card.index} id={`pick-a-card-child${card.index}`} src={card.back} effect="opacity" alt="Ferdinand Clovis" onClick={() => handleClickPick(card.index)} />

        })
        :
        <div className="resetButton" onClick={reset}>
          <p>Play again!</p>
        </div>
      }
      {
        picked.length > 0
        &&
        <a href="#card-deck" className="arrowDown">
          <FontAwesomeIcon icon={faArrowDown} />
        </a>
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
          <LazyLoadImage className="card child-portfolio-videos-card" src={card.front} effect="opacity" alt="Ferdinand Clovis" />
          <a href={card.ref} rel="noopener noreferrer" target="_blank" className="child-portfolio-textblock-open">{card.caption}</a>
        </div>
      })
    }
    </>
  }
  </div>
    <div ref={modalRef} className="modal-card">
      <div className="modal-card-content">
        <div className="modal-card-icon" ><FontAwesomeIcon icon={faClose} className="icon" onClick={closeModal}/></div>
        <div className={"child-portfolio-videos new-item card-in-modal "}>
          <LazyLoadImage className={`child-portfolio-videos-front card`} src={pickedForModal.back} effect="opacity" alt="Ferdinand Clovis" />
          <LazyLoadImage className={`child-portfolio-videos-back card`} effect="opacity" src={pickedForModal.front} alt="Backside of Flexbox playing card" />
          <a href={pickedForModal.ref} rel="noopener noreferrer" target="_blank" className="child-portfolio-textblock">{pickedForModal.caption}</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default PickACard;
