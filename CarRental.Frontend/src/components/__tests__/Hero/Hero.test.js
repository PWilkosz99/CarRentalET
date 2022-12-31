import { render, screen, cleanup } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Hero from '../../Hero/Hero';
import '@testing-library/jest-dom';

afterEach(() => {
    cleanup();
});

test('should render Hero component', () => {

    render(
        <Router>
            <Hero />
        </Router>
    );
    const hero = screen.getByText('Search');

    expect(hero).toBeInTheDocument();
});
