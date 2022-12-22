import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';

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
    if (password !== passwordConf) {
      toast.warn("Passwords don't match", { position: 'bottom-right', theme: 'colored' });
    } else {
      try {
        await signup(email, password);
        navigate('/');
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          toast.warn('Email already in use', { position: 'bottom-right', theme: 'colored' });
        } else if (error.code === 'auth/invalid-email') {
          toast.warn('Invalid email', { position: 'bottom-right', theme: 'colored' });
        } else if (error.code === 'auth/weak-password') {
          toast.warn('Password is too weak', { position: 'bottom-right', theme: 'colored' });
        } else {
          toast.error(`Something went wrong${error}`, { position: 'bottom-right', theme: 'colored' });
        }
      }
    }
  };

  return (
    <div className={styles.register}>
      <div className={styles.register_panel}>
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className="register-form">
          <div className={styles.txt_reg}>
            <input type="email" required placeholder=" " onChange={(e) => setEmail(e.target.value)} />
            <span />
            <label>Email</label>
          </div>
          <div className={styles.txt_reg}>
            <input type="password" required onChange={(e) => setPassword(e.target.value)} />
            <span />
            <label>Password</label>
          </div>
          <div className={styles.txt_reg}>
            <input type="password" required onChange={(e) => setPasswordConf(e.target.value)} />
            <span />
            <label>Password confirmation</label>
          </div>
          <button className={styles.btnRegister} type="submit">Register</button>
          <div className={styles.linkLogIn}>
            Do you have an account
            {' '}
            <Link to="/login">Log in</Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
