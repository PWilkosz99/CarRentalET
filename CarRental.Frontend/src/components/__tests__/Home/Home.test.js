import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from '../../Hero/Hero';
import styles from '../../Home/Home.module.css';
import '@testing-library/jest-dom';

afterEach(() => {
    cleanup();
});


describe('Home component', () => {
    it('renders without crashing', () => {

        const { container } = render(
            <Router>
                <div className={styles.mainPage}>
                    <Hero />
                    <div className={styles.slider}>
                    </div>
                </div>
            </Router>);
        expect(container).toBeTruthy();
    });

    it('matches snapshot', () => {
        const { container } = render(
            <Router>
                <div className={styles.mainPage}>
                    <Hero />
                    <div className={styles.slider}>
                    </div>
                </div>
            </Router>);
        expect(container).toMatchSnapshot();
    });
});