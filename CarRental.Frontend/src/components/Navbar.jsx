import React from "react";
import '../App.css';

export default function Navbar() {
    return (
        <nav>
            <img src="logo192.png" className="nav-logo"/>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#btn2">Btn2</a></li>
                <li><a href="#btn3">Btn3</a></li>
                <li><a href="#btn4">Btn4</a></li>
                <li><a href="#btn5">Btn5</a></li>
            </ul>
            <div className="nav-login">
                <span className="sign-up">Sign Up</span>
                <span className="sign-in">Sign In</span>
            </div>
        </nav>
    );
}