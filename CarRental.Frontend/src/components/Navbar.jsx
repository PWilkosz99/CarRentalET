import React from "react";
import { Link } from "react-router-dom";
import { IoCarSport } from "react-icons/io5";
import '../App.css';

export default function Navbar(props) {

    const logout = async () => {
        await fetch('http://localhost:5000/auth/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });
        props.setName('');
    }


    return (
        <nav>
            {/* <img src="logo192.png" className="nav-logo" /> */}
            <IoCarSport color="black" size="5em"/>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/rent">Rent</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/Link5">Link5</Link></li>
            </ul>
            <div className="nav-login">
                {props.name ? <span className="sign-out"><Link to="/" onClick={logout}>Log Out</Link></span> : <div><span className="sign-up"><Link to="/register">Sign Up</Link></span> <span className="sign-in"><Link to="/login">Sign In</Link></span></div>}
            </div>
        </nav>
    );
}