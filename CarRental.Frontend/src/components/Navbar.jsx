import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

export default function Navbar() {
    return (
        <nav>
            <img src="logo192.png" className="nav-logo"/>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/Link3">Link3</Link></li>
                <li><Link to="/Link4">Link4</Link></li>
                <li><Link to="/Link5">Link5</Link></li>
            </ul>
            <div className="nav-login">
                <span className="sign-up">Sign Up</span>
                <span className="sign-in">Sign In</span>
            </div>
        </nav>
    );
}