import React from "react";
import "./Navbar.css";

const navbar = [
  { id: 1, title: "Home" },
  { id: 2, title: "New Arrivals" },
  { id: 3, title: "Lehengas" },
  { id: 4, title: "Saree" },
  { id: 5, title: "Premium Wear" },
  { id: 6, title: "Gowns" },
];

export default function Navbar() {
  return (
    <div className="navbar__container">
      {navbar.map((nav) => {
        return <span className="navbar__container__tiles">{nav.title}</span>;
      })}
    </div>
  );
}
