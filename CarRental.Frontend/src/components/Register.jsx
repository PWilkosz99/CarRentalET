import React, { useState } from 'react';

export default function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submit = (e) => {
        e.preventDefault();
        console.log({
            name,
            email,
            password
        })
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