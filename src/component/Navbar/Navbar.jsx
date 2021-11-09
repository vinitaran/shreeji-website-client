import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const navbar = [
  { id: 1, title: "Home", url:"" },
  { id: 2, title: "New Arrivals", url:"new" },
  { id: 3, title: "Lehengas", url:"lehengas" },
  { id: 4, title: "Saree", url:"saree" },
  { id: 5, title: "Premium Wear", url:"premium" },
  { id: 6, title: "Gowns", url:"gowns" },
];

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar_row">
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FaTimes style={{ color: "white", padding:"0.2rem" }} />
          ) : (
            <FaBars style={{ color: "white", padding:"0.2rem" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {navbar.map((tab) => {
            return (
              <li className="nav-item">
                <NavLink exact to={tab.title === "Home" ? `/${tab.url}` : `/products/${tab.url}`} className="nav-links" onClick={closeMobileMenu} activeClassName="nav-links-active">
                  {tab.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
