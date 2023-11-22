import logo from "../images/logo.png";
import Navbar from "../Navbar/Navbar";
import "../header/Header.scss"


const Header = () => {
    return (
        <header className="Header">
            <figure className="header_fig">
                <img className="logo" src={logo} alt="logo de l'agence kasa" />
            </figure>
            <Navbar />
        </header>
    )
}

export default Header;