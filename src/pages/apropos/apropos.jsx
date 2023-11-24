import React from 'react'
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import Img_about from "../../components/images/Img_about.png";
import "../apropos/apropos.scss"
import { DescriptionPanel } from '../../components/Apartment_description/Apartment_description';

function About() {
    return (
        <>
            <Header />
            <div>
                <img className="img-about" src={Img_about} alt='banner' />
            </div>
            <div className='about_container'>
                <DescriptionPanel />
                <DescriptionPanel />
                <DescriptionPanel />
                <DescriptionPanel />
            </div>
            <Footer />
        </>
    )
}

    export default About;