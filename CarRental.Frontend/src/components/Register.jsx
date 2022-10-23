import React, { useState } from 'react';
import { Navigate } from "react-router-dom";


export default function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        await fetch('https://localhost:5001/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        setRedirect(true);
    }

    if (redirect) {
        return <Navigate to="/login" />
    }

    return (
        <form onSubmit={submit}>
            <h1>Register</h1>
            <input className="register-form" placeholder="Name" required
                onChange={e => setName(e.target.value)}
            />
            <input type="email" className="register-form" placeholder="Email" required
                onChange={e => setEmail(e.target.value)}
            />
            <input type="password" className="register-form" placeholder="Password" required
                onChange={e => setPassword(e.target.value)}
            />
            <button className="btn-register" type="submit">Submit</button>
        </form>
    );
}