import React from 'react'
import { Link } from 'react-router-dom'
import "../Error/Error.scss"
import Header from '../header/Header'

function Error() {
    return <>
        <Header />
        <div className='error-page'>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas</h2>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
        </>
}
 
export default Error