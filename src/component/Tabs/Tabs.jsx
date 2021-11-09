import React from "react";
import "./Tabs.css";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Tabs({ collection, heading, imageUrl }) {
  return (
      <Link to="/products" className="tabs">
        <div
          className="tabs__component"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="tabs__details">
            <span>{collection}</span>
            <p className="heading">{heading}</p>
            <a>
              Get this look <FaAngleRight />{" "}
            </a>
          </div>
        </div>
      </Link>
  );
}
