import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/">Accueil</Link>
            <Link to="/apropos">À propos</Link>
        </div>
    );
}

export default Navbar;