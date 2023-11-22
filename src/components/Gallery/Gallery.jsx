import React from 'react'
import "../Gallery/Gallery.scss"
import Apartment from '../Apartment/Apartment'

function Gallery() {
  return  <div className='Gallery'>
    <Apartment />
    <Apartment />
    <Apartment />
    <Apartment />
  </div> 
}

export default Gallery