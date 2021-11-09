import React, { useState, useEffect } from "react";
import "./Filter.css";
// import Slider, { Range } from 'rc-slider';
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

export default function Filter() {
  const [minFilter, setMinFilter] = useState("1000");
  const [maxFilter, setMaxFilter] = useState("10000");
  var basket = [];

  const colors = [
    "DarkOrange",
    "DarkOrchid",
    "DarkSalmon",
    "DimGrey",
    "DodgerBlue",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Yellow",
    "YellowGreen",
  ];

  const occassions = [
    "Casual",
    "Ceremonial",
    "Festival",
    "Party",
    "Reception",
    "Sangeet",
    "Wedding",
  ];

  const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
        },[])

    const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
    }

  window.addEventListener("resize", handleResize);
  const [isChecked, setIsChecked] = useState(false);

  const filterBucket = (event) => {
    console.log(event);
    const color = event.target.value;
    console.log(event.target.checked);
    if (event.target.checked === true) {
      basket = [...basket, color];
      console.log(basket);
    }
    if (event.target.checked === false) {
      const newBasket = basket;
      const index = basket.indexOf(event.target.value);
      newBasket.splice(index, 1);
      basket = newBasket;
      console.log(basket);
    }
  };

  console.log(isChecked, minFilter, maxFilter);

  return (
    <>
    <div className={isChecked ? "filter mobile_active" : "filter"}>
      <div className= "filter__heading order__heading">FILTERS</div>
      <div className="filter__body">
        <div className="filter__body__color filter__child__div">
          <div className="filter__body__heading">COLORS</div>
          <div className="filter__body__colors">
            {colors.map((color) => {
              return (
                <div className="filter__body__color">
                  <label class="color__checkbox">
                    <input
                      type="checkbox"
                      style={{ backgroundColor: `${color}` }}
                      value={color}
                      onClick={(event) => filterBucket(event)}
                    />
                    <span></span>
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="filter__body__range__div filter__child__div">
          <div className="filter__body__heading">PRICE</div>
          <div className="filter__body__range">
            <Range
              marks={{
                1000: `₹ 1000`,
                10000: `₹ 10000`,
              }}
              min={1000}
              max={10000}
              defaultValue={[1000, 10000]}
              tipFormatter={(value) => `₹ ${value}`}
              tipProps={{
                placement: "top",
                visible: true,
              }}
              onChange={(values) => {
                setMinFilter(values[0]);
                setMaxFilter(values[1]);
              }}
            />
          </div>
        </div>
        <div className="filter__body__occassions filter__child__div">
          <div className="filter__body__heading">OCCASSION</div>
          <div className="filter__body__occassion">
            {occassions.map((occassion) => {
              return (
                <label class="checkbox">
                  <input type="checkbox" />
                  <span>{occassion}</span>
                </label>
              );
            })}
          </div>
        </div>
        <div className="filter__body__works filter__child__div">
          <div className="filter__body__heading">WORK DETAILS</div>
          <div className="filter__body__workDeet">
            {occassions.map((occassion) => {
                return (
                  <label class="checkbox">
                    <input type="checkbox" />
                    <span>{occassion}</span>
                  </label>
                );
              })}
          </div>
        </div>
      </div>
    </div>
    {
      isMobile ? <div className="filter__mobile__button" onClick={() => setIsChecked(!isChecked)}>
      { isChecked ? "SUBMIT" : "FILTER"}
    </div> : ""
    }
    </>
    
  );
}
