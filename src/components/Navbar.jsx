import React from "react";
import logo from "../img/airbnb3.png";

export default function Navbar(){
    return (
        <nav className="nav">
            <img className="logo" src={logo} alt="airbnblogo"/>
        </nav>
    )
}