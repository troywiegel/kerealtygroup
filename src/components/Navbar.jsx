import { Link } from "react-router-dom";
import logo from "../assets/img/KERG_White.png";

function Navbar() {
  return (
    <nav className="navBar">
      <div className="navLeft">
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/about">
          About
        </Link>
        <a
          className="navLink"
          href="https://www.instagram.com/karrijen/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
      <div className="navCenter">
        <img className="navLogo" src={logo} alt="KE Realty Group Logo" />
      </div>
      <div className="navRight">
        <Link className="navLink" to="/services">
          Services
        </Link>
        <a
          className="navLink"
          href=" https://kerealtygroup.kw.com"
          target="_blank"
          rel="noreferrer"
        >
          Search Homes
        </a>
        <Link className="navLink" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
