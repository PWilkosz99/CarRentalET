import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';

import styles from './Register.module.css';
import RegisterPanel from './RegisterPanel';

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConf, setPasswordConf] = useState();

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
<RegisterPanel handleSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword} setPasswordConf={setPasswordConf} />
  );
}
