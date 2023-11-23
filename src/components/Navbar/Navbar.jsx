import {NavLink} from 'react-router-dom';
import "../Navbar/Navbar.scss"

const Navbar = () => {

    return (
        <nav className="Navbar">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/apropos">À propos</NavLink>
        </nav>
    );
}

export default Navbar;