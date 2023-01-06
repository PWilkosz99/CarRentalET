import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';
import {
    AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser,
} from 'react-icons/ai';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from '../../Navbar/Navbar.module.css';
import '@testing-library/jest-dom';

afterEach(() => {
    cleanup();
});

function StaticNavbar(props) {
    const handleLogout = () => { };
    const { currentUser } = props;
    const nav = !currentUser;

    return (
        <header className={styles.navbar}>
            <img alt="logo" className={styles.logo} />
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
    );
}


describe('Home component', () => {
    it('renders without crashing with logged user', () => {

        const { container } = render(
            <Router>
                <div className={styles.mainPage}>
                    <StaticNavbar currentUser={true} />
                    <div className={styles.slider}>
                    </div>
                </div>
            </Router>);
        expect(container).toBeTruthy();
    });

    it('renders without crashing with logged out user', () => {

        const { container } = render(
            <Router>
                <div className={styles.mainPage}>
                    <StaticNavbar currentUser={true} />
                    <div className={styles.slider}>
                    </div>
                </div>
            </Router>);
        expect(container).toBeTruthy();
    });

    it('matches snapshot - logged', () => {
        const { container } = render(
            <Router>
                <div className={styles.mainPage}>
                    <StaticNavbar currentUser={true} />
                    <div className={styles.slider}>
                    </div>
                </div>
            </Router>);
        expect(container).toMatchSnapshot();
    });

    it('matches snapshot - logged out', () => {
        const { container } = render(
            <Router>
                <div className={styles.mainPage}>
                    <StaticNavbar currentUser={true} />
                    <div className={styles.slider}>
                    </div>
                </div>
            </Router>);
        expect(container).toMatchSnapshot();
    });
});
