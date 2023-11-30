import React from 'react'
import "../Apartment/Apartment.scss"
import { Link } from 'react-router-dom'

function Apartment(props) {
    return (
      <Link 
        to="../logement" 
        state={{
          apartmentId: props.id
        }}
      >
      <div className='apartment'>
        <img src={props.imageUrl} alt='' />
        <div className='title'>{props.title}</div>
      </div>
    </Link>
  );
}

export default Apartment