import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import styles from './Register.module.css';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterPanel(props) {

    const {handleSubmit, setEmail, setPassword, setPasswordConf} = props;

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
