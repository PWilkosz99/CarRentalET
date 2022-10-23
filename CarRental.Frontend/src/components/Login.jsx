import React, { useState } from 'react';

export default function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });
    }

    return (
        <form onSubmit={submit}>
            <h1>Login</h1>
            <input type="email" className="login-form" placeholder="Email" required
                onChange={e => setEmail(e.target.value)}
            />
            <input type="password" className="login-form" placeholder="Password" required
                onChange={e => setPassword(e.target.value)}
            />
            <button className="btn-login" type="submit">Submit</button>
        </form>
    );
}