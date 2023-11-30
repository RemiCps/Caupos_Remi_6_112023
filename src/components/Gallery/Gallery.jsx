import React, { useEffect, useState } from 'react'
import "../Gallery/Gallery.scss"
import Apartment from '../Apartment/Apartment'



function Gallery() {
  const [apartments, setApartments] = useState([]);

  useEffect(fetchApartments, []) 

  function fetchApartments() {
    fetch("logements.json")
      .then((res) => (res.json()))
      .then((res) => setApartments(res))
      .catch(console.error);
  }
  return  (
    <div className='Gallery'>
      {apartments.map((apartment) => (
      <Apartment title={apartment.title} imageUrl={apartment.cover} id={apartment.id} key={apartment.id}/>
    ))}
    </div> 
  );
}

export default Gallery