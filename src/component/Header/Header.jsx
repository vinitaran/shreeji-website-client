import React from 'react';
import "./Header.css";
import {BsFillBagCheckFill} from "react-icons/bs";
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header">
            <div className="header__search">
                <input
                    placeholder="What are you looking for?"
                    type="text"
                    className="searchTerm"
                    id="input_text"
                ></input>
                <span className="searchButton">
                    <FaSearch />
                </span>
            </div>
            <div className="header__top__mobile">
                <Link style={{textDecoration:"none", color:"inherit"}} to="/"><div className="header__logo">
                    <span>Shreeji In Fashion</span>
                </div></Link>
                <div className="header__cartInfo">
                <Link style={{textDecoration:"none", color:"inherit"}} to="/orders">
                    <div className="header__cartInfo__total">
                        ₹ 1,200
                    </div>
                <BsFillBagCheckFill size={30}/>
                </Link>
                </div>    
            </div>            
        </div>
    )
}
