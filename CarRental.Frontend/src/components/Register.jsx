import React, { useState } from 'react';
import { Navigate } from "react-router-dom";


export default function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [address, setAddress] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        await fetch('https://localhost:5001/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password,
                name,
                surname,
                address,
                phoneNumber
            })
        });

        setRedirect(true);
    }

    if (redirect) {
        return <Navigate to="/login" />
    }

    return (
        <form onSubmit={submit} className="register-form">
            <h1>Register</h1>
            <input type="email" className="register-form" placeholder="Email" required onChange={e => setEmail(e.target.value)} />
            <input type="password" className="register-form" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
            <input placeholder="Firstname" required onChange={e => setName(e.target.value)} />
            <input placeholder="Lastname" required onChange={e => setSurname(e.target.value)} />
            <input placeholder="Adress" required onChange={e => setAddress(e.target.value)} />
            <input type="tel" placeholder="Phone number" required onChange={e => setPhoneNumber(e.target.value)} />
            <button className="btn-register" type="submit">Submit</button>
        </form>
    );
}