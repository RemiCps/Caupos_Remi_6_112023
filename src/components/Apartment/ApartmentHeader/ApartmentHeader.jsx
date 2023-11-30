import React from 'react'
import "../ApartmentHeader/ApartmentHeader.scss"

function ApartmentHeader({ flat }) {
  
  const {name} = flat.host;
  const [firstName, lastName] = name.split(" ");
  
  return (
    <div className='logement_header'>
          <div className='logement_title'>
            <h1>{flat.title}</h1>
              <h2>{flat.location}</h2>
              <div className='logement_tags'>
                {flat.tags.map((tag) => (
                <span key={tag}>{tag}</span>))}
              </div>
          </div>  
          <div className='logement_owner'>
            <div className='logement_owner_details'>
              <h3>
                <span>{firstName}</span> 
                <span>{lastName}</span>
              </h3>
              <div className='badge'>
                <img src={flat.host.picture} alt="badge" />
              </div>
            </div>
            <div className='logement_owner_stars'>
              {[1, 2, 3, 4, 5].map((num) => (
              <span key={num} className={flat.rating >= num ? "on" : ""}>★</span>))}
            </div>   
          </div>
        </div> 
  )
}

export default ApartmentHeader