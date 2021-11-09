import Button from "@mui/material/Button";
import React from "react";
import "./Checkout.css";
import NumberFormat from "react-number-format";

export default function Checkout() {
  return (
    <div className="checkout__component">
      <div className="checkout__component__header">
        <h5>
          Disclaimer: Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </h5>
        <h4 className="checkout__header">Summary</h4>
      </div>
      <div className="checkout__component__body">
        <div className="checkout__details">
          <div className="checkout__details__left">Subtotal</div>
          {/* <div className="checkout__details__right">₹ 3,000</div> */}
          <NumberFormat
            className="checkout__details__right"
            thousandsGroupStyle="thousand"
            value={3000}
            prefix="₹"
            decimalSeparator="."
            displayType="text"
            type="text"
            thousandSeparator={true}
            allowNegative={true}
          />
        </div>
        <div className="checkout__details">
          <div className="checkout__details__left">Shipping Charge</div>
          {/* <div className="checkout__details__right">₹ 150</div> */}
          <NumberFormat
            className="checkout__details__right"
            thousandsGroupStyle="thousand"
            value={150}
            prefix="₹"
            decimalSeparator="."
            displayType="text"
            type="text"
            thousandSeparator={true}
            allowNegative={true}
          />
        </div>
      </div>
      <div className="checkout__component__total checkout__subtotal">
        <div className="checkout__details">
          <div className="checkout__details__left">Subtotal</div>
          {/* <div className="checkout__details__right">₹ 3,150</div> */}
          <NumberFormat
            thousandsGroupStyle="thousand"
            value={3150}
            prefix="₹"
            decimalSeparator="."
            displayType="text"
            type="text"
            thousandSeparator={true}
            allowNegative={true}
          />
        </div>
      </div>

      <div className="checkout__button">
        <Button
          variant="contained"
          color="secondary"
          style={{ height: "40px", width: "100%" }}
        >
          Proceed to Buy
        </Button>
      </div>
    </div>
  );
}
