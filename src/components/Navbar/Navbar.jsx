import {Link} from 'react-router-dom';
import "../Navbar/Navbar.scss"

const Navbar = () => {
    return (
        <nav className="Navbar">
            <Link to="/">Accueil</Link>
            <Link to="/apropos">À propos</Link>
        </nav>
    );
}

export default Navbar;