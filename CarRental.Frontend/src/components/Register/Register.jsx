import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import { Link } from "react-router-dom";
import styles from './Register.module.css';

export default function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConf, setPasswordConf] = useState();
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
        <div className={styles.register}>
            <div className={styles.register_panel}>
                <h1>Register</h1>
                <form onSubmit={handleSubmit} className="register-form">
                    <div className={styles.txt_reg}>
                        <input type="email" required placeholder=" " onChange={e => setEmail(e.target.value)} />
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className={styles.txt_reg}>
                        <input type="password" required onChange={e => setPassword(e.target.value)} />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className={styles.txt_reg}>
                        <input type="password" required onChange={e => setPasswordConf(e.target.value)} />
                        <span></span>
                        <label>Password confirmation</label>
                    </div>
                    <button className={styles.btnRegister} type="submit">Login</button>
                    <div className={styles.linkLogIn}>
                        Do you have an account <Link to="/login">Log in</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}