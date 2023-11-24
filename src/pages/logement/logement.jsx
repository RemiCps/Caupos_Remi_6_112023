import React from 'react'
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import Carrousel from "../../components/images/Carrousel_img.png";
import { DescriptionPanel } from "../../components/Apartment_description/Apartment_description"
import "../logement/logement.scss"

function Lodge() {
  return (
    <div className='logement'>
      <Header />    
        <div>
          <img className="Carrousel" src={Carrousel} alt='carrousel' />
        </div>
        <div className='logement_header'>
          <div className='logement_title'>
            <h1>Cozy loft on the Canal Saint-Martin</h1>
              <h2>Paris, Ile de France</h2>
              <div className='logement_tags'>
                <span>Cozy</span>
                <span>Canal</span>
                <span>Paris 10</span>
              </div>
          </div>  
          <div className='logement_owner'>
            <div className='logement_owner_details'>
              <h3>
                <span>Alexandre</span> 
                <span>Dumas</span>
              </h3>
              <div className='badge'></div>
            </div>
            <div className='logement_owner_stars'>
            <span className='on'>★</span>    
            <span className='on'>★</span>    
            <span className='on'>★</span>    
            <span className='off'>★</span>    
            <span className='off'>★</span> 
            </div>   
          </div>
        </div> 
        <div className='apartment_description_area'>
          <DescriptionPanel />
          <DescriptionPanel />
        </div>
      <Footer />
    </div>
  )
}

export default Lodge