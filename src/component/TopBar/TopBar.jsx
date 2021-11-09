import React, {useEffect, useState} from 'react';
import { FaHeart, FaUser } from 'react-icons/fa';
import "./TopBar.css";
import { Link } from 'react-router-dom';


export default function TopBar() {
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

    return (
        <div className="topBar">
            <Link style={{textDecoration:"none", color:"white"}} to="" className="topBar__items">{isMobile ? <FaUser /> : "My Profile"}</Link>
            <p className="topBar__items topBar__seperator one">|</p>
            <Link style={{textDecoration:"none", color:"white"}} to="" className="topBar__items">{isMobile ? <FaHeart /> : "My Wishlist"}</Link>
            <p className="topBar__items topBar__seperator disable">|</p>
            <Link style={{textDecoration:"none", color:"white"}} to="/login" className="topBar__items disable">Login</Link>
            <p className="topBar__items topBar__seperator disable">|</p>
            <Link style={{textDecoration:"none", color:"white"}} to="" className="topBar__items disable">Checkout</Link>
        </div>
    )
}
