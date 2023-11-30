import React, { useState } from 'react'
import "./Apartment_description.scss"

export function DescriptionPanel(props) {

const [isContentVisible, setIsContentVisible] = useState(false);
const showContent = () => {
  setIsContentVisible(!isContentVisible);
};
const contentClass = (isContentVisible ? "visible" : "hidden") + "content";
  return (
    <div className='logement_description'>
          <p className='description'>
            <span>{props.title}</span>
            <i className="fa-solid fa-chevron-up" onClick={showContent}></i>
            </p>
          
          <p className={contentClass}>{props.content}</p>
        </div>
  )
}

