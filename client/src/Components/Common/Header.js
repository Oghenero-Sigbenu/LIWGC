import React from "react";

import "./css/Header.css";

const Header = () => {
    return (
        <div className="nav">
            <div className="logo">
                <h2>LIWGC</h2>
            </div>
            <ul className="menu">
               <li>About us</li> 
               <li>Download</li> 
               <li>Youth Church</li> 
               <li>Livestream</li> 
               <li>Contact Us</li>
            </ul>
        </div>
    )
};

export default Header;