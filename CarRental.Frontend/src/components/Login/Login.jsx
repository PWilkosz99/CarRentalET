import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import LoginPanel from './LoginPanel';

import styles from './Login.module.css';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        toast.warn('User not found', { position: 'bottom-right', theme: 'colored' });
      } else if (error.code === 'auth/wrong-password') {
        toast.warn('Wrong password', { position: 'bottom-right', theme: 'colored' });
      } else if (error.code === 'auth/too-many-requests') {
        toast.warn('Too many requests - account has been temporary blocked', { position: 'bottom-right', theme: 'colored' });
      } else {
        toast.error(`Something went wrong${error}`, { position: 'bottom-right', theme: 'colored' });
      }
    }
  };

  return (
    <LoginPanel handleSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword}/>
  );
}
