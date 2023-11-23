import React from 'react'
import "../Apartment/Apartment.scss"
import { Link } from 'react-router-dom'

function Apartment() {
  return <Link to="../logement">
  <div className='apartment'>
    <div className='title'>Titre de la location</div>
    </div>
    </Link>
}

export default Apartment