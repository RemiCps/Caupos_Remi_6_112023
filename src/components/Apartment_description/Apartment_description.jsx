import React from 'react'
import "../Apartment_description/Apartment_description.scss"

export function DescriptionPanel() {
  return (
    <div className='logement_description'>
          <p className='description'>
            <span>Description</span>
            <i class="fa-solid fa-chevron-up"></i>
            </p>
          <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nemo tenetur quas dicta molestias aut optio, temporibus ipsum alias nobis quasi aliquam laboriosam, earum maiores soluta nam. Tempora, cum maxime?
          </p>
        </div>
  )
}

