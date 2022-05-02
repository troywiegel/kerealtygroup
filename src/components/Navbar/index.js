import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  //   NavBtn,
  //   NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink
            to="https://www.instagram.com/karrijen/"
            target="_blank"
            rel="noreferrer"
            activeStyle
          >
            Instagram
          </NavLink>
          <NavLink to="/">
            <img
              className="navLogo"
              src={require("../../assets/img/KERG_White.png")}
              alt="logo"
            />
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink
            to=" https://kerealtygroup.kw.com"
            target="_blank"
            rel="noreferrer"
            activeStyle
          >
            Search Homes
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
