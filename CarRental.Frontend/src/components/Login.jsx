import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';


export default function Login(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();

    // const submit = async (e) => {
    //     e.preventDefault();

    //     await fetch('http://localhost:5000/auth/login', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         credentials: 'include',
    //         body: JSON.stringify({
    //             email,
    //             password
    //         })
    //     });
    //     setRedirect(true);
    //     props.setName("");
    // }

    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate("/");
        } catch {
            alert("ERROR")
        }
    }

    // if (redirect) {
    //     return <Navigate to="/" />
    // }

    return (
        <form onSubmit={handleSubmit}>
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