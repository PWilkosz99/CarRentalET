import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';


export default function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [address, setAddress] = useState();
    const [phoneNumber, setPhoneNumber] = useState();

    const navigate = useNavigate();

    const { signup } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(email, password);
            navigate("/");
        } catch {
            alert("ERROR")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="register-form">
            <h1>Register</h1>
            <input type="email" className="register-form" placeholder="Email" required onChange={e => setEmail(e.target.value)} />
            <input type="password" className="register-form" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
            {/* <input placeholder="Firstname" required onChange={e => setName(e.target.value)} />
            <input placeholder="Lastname" required onChange={e => setSurname(e.target.value)} />
            <input placeholder="Adress" required onChange={e => setAddress(e.target.value)} />
            <input type="tel" placeholder="Phone number" required onChange={e => setPhoneNumber(e.target.value)} /> */}
            <button className="btn-register" type="submit">Submit</button>
        </form>
    );
}