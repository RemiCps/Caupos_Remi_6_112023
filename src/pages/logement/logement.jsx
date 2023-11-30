import React, { useEffect, useState } from 'react'
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import ImageBanner from '../../components/Apartment/ApartmentBanner/ApartmentBanner';
import { DescriptionPanel } from "../../components/Apartment/Apartment_description/Apartment_description"
import "../logement/logement.scss"
import { useLocation } from 'react-router-dom';
import ApartmentHeader from '../../components/Apartment/ApartmentHeader/ApartmentHeader';


function Lodge() {
  const location = useLocation();
  const [flat, setFlat] = useState(null);
  useEffect(fetchApartmentData);

function fetchApartmentData() {
  fetch("logements.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === location.state.apartmentId);
        setFlat(flat);
      })
        .catch(console.error);
}

if (flat == null) return <div>Loading...</div>;
  return (
    <div className='logement'>
      <Header />  
        <ImageBanner pictures={flat.pictures}/>
        <ApartmentHeader flat={flat}/>
        <div className='apartment_description_area'>
          <DescriptionPanel title="Description" content={flat.description}/>
          <DescriptionPanel 
            title="Equipements" 
            content={flat.equipments.map((eq, i) => (
              <li key={i}>{eq}</li>
            ))}
          />
        </div>
      <Footer />
    </div>
  )
}

export default Lodge