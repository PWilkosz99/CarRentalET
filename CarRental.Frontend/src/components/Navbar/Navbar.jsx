import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser,
} from 'react-icons/ai';
import { useAuth } from '../../contexts/AuthContext';
import Logo from '../../images/logo192.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [nav, setNav] = React.useState(false);
  const { currentUser } = useAuth();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      alert('ERROR');
    }
  };

  return (
    <>
      <header className={styles.navbar}>
        <img src={Logo} alt="logo" className={styles.logo} />
        <nav>
          <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rent">Rent</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            {currentUser
              ? (
                <li>
                  <Link onClick={handleLogout}>Log out</Link>
                  <span />
                </li>
              )
              : (
                <>
                  <li>
                    <Link to="/login">Log In</Link>
                    <span />
                  </li>
                  <li>
                    <Link to="/register">Sign Up</Link>
                  </li>

                </>
              )}
            <li>
              <AiOutlineSearch size={25} className={styles.icon} />
            </li>
            <li>
              <div className={styles.userIcon}>
                <AiOutlineUser size={25} className={styles.icon} />
              </div>
              {
                                currentUser
                                  ? (
                                    <span className={styles.userStatus}>
                                      {' '}
                                      User:
                                      {currentUser.email}
                                    </span>
                                  )
                                  : <span className={styles.userStatus}> Please log in</span>
                            }

            </li>
          </ul>
        </nav>
        <div onClick={() => setNav(!nav)} className={styles.btn}>
          {nav ? <AiOutlineClose size={25} className={styles.icon} /> : <AiOutlineMenu size={25} className={styles.icon} />}
        </div>
      </header>
      {/* <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/rent">Rent</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/Link5">Link5</Link></li>
                </ul> */}
    </>
  );
}
