import React, {useEffect, useState} from 'react';
import { FaHeart, FaUser } from 'react-icons/fa';
import "./TopBar.css";

export default function TopBar() {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        window.addEventListener("resize", handleResize)
      })

    const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
    }
    return (
        <div className="topBar">
            <p className="topBar__items">{isMobile ? <FaUser /> : "My Profile"}</p>
            <p className="topBar__items topBar__seperator one">|</p>
            <p className="topBar__items">{isMobile ? <FaHeart /> : "My Wishlist"}</p>
            <p className="topBar__items topBar__seperator disable">|</p>
            <p className="topBar__items disable">Login</p>
            <p className="topBar__items topBar__seperator disable">|</p>
            <p className="topBar__items disable">Checkout</p>
        </div>
    )
}
