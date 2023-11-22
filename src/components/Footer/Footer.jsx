import React from 'react'
import "../Footer/Footer.scss"
import logo from "../images/logo_footer.png";

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_logo'>
            <img src={logo} alt='logo' width="100" />
        </div>
        <div className='footer_text'>
        © 2020 Kasa. All rights reserved
        </div>
    </div>
  )
}

export default Footer