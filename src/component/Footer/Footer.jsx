import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import "./Footer.css";

export default function Footer() {

    return (
        <div className="footer">
            <div className="footer_container">
                <div className="footer_container_row one">
                    <div className="footer_container_row_title">
                        ABOUT SHOP                       
                    </div>
                    <div className="footer_container_row_body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>                       
                    </div>
                    <div className="footer_container_row_title">
                        NEWSLETTER
                    </div>
                    <div className="footer_container_row_input">
                        <input placeholder="Your Email" className="emailInput"/><span className="emailSendButton"><FaAngleRight /></span>
                    </div>
                </div>
                <div className="footer_container_row two">
                    <div className="footer_container_row_title">INFORMATION</div>
                </div>
                <div className="footer_container_row three">
                    <div className="footer_container_row_title">MY ACCOUNT</div>  
                </div>
                <div className="footer_container_row four">
                    <div className="footer_container_row_title">GET IN TOUCH WITH US</div>
                    <div className="footer_container_row_title">FIND US ON</div>
                </div>
            </div>
        </div>
    )
}
