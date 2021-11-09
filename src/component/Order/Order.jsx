import React from "react";
import "./Order.css";

// style={{backgroundImage:`url(${imageUrl})`}}

export default function Order({ title, imageUrl, stock, price }) {
  return (
    <div className="order__component">
      <div
        className="order__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <div className="order__product__details">
        <div className="order__title">
          <p className="order__product__details__title">{title}</p>
          <p className="order__product__details__stock">
            {stock > 0 ? "In Stock" : "Out of Stock"}
          </p>
        </div>
        <div className="order__price">
          <p className="order__product__price">₹ {price}</p>
        </div>
        <div className="number">
	<span className="minus">-</span>
	<input type="text" value="1"/>
	<span className="plus">+</span>
</div>
      </div>
    </div>
  );
}
