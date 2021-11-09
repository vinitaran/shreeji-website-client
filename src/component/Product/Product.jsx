import React from "react";
import "./Product.css";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function Product({ title, price, imageUrl, stock }) {
  return (
    <div className="product">
      <div className="product__element">
        <div
          className="product__image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          {stock > 0 ? (
            <div className="product__overlay">
              <div className="product__wishlist">
                {/* {like ? <FaHeart className="product__wishlist__heart" color="red" /> : <FaRegHeart color="red" onClick={() => setLike(true)} />} */}
                {/* <div
                  className={like ? "HeartAnimation animate" : "HeartAnimation"}
                  onClick={() => setLike(!like)}
                ></div> */}
                <label className="product__like">
                  <input type="checkbox" />
                  <div className="hearth" />
                </label>
              </div>
              <Button
                variant="contained"
                color="secondary"
                style={{ height: "40px" }}
                startIcon={<AddShoppingCartIcon />}
              >
                Add to Cart
              </Button>
            </div>
          ) : (
            <div className="product__overlay__outofstock">
              <Button variant="contained" style={{ backgroundColor: "teal" }}>
                Out Of Stock
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="product__details">
        <h5>{title}</h5>
        <p>{`₹${price}`}</p>
        {
          stock > 0 ? <div className="product__mobile">
          <Button
            variant="contained"
            color="secondary"
            style={{ height: "40px" }}
            startIcon={<AddShoppingCartIcon />}
          >
            Add to Cart
          </Button>
          <label className="product__like">
            <input type="checkbox" />
            <div className="hearth" />
          </label>
        </div> : ""
        }
      </div>
    </div>
  );
}
