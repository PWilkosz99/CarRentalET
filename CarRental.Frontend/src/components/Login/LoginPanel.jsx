import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import styles from './Login.module.css';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPanel(props) {

    const {handleSubmit, setEmail, setPassword} = props;

  return (
    <div className={styles.login}>
      <div className={styles.panel}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.txt}>
            <input type="email" className="login-form" placeholder=" " required onChange={(e) => setEmail(e.target.value)} />
            <span />
            <label>Email</label>
          </div>
          <div className={styles.txt}>
            <input type="password" className="login-form" required onChange={(e) => setPassword(e.target.value)} />
            <span />
            <label>Password</label>
          </div>
          <div className={styles.frgtPasswd}>
            Forgot password?
          </div>
          <button className={styles.btnLogin} type="submit">Login</button>
          <div className={styles.linkSignUp}>
            You don't have a account?
            {' '}
            <Link to="/register">Sign up</Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
