import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from '../../Hero/Hero';
import '@testing-library/jest-dom';

afterEach(() => {
    cleanup();
});

describe('Hero component', () => {
    it('should render Hero component', () => {
        render(
            <Router>
                <Hero />
            </Router>
        );
        const hero = screen.getByText('Search');

        expect(hero).toBeInTheDocument();
    });

    it('should redner From text', () => {
        render(
            <Router>
                <Hero />
            </Router>);
        const footer = screen.getByText('From');

        expect(footer).toBeInTheDocument();
    });

    it('should redner Until text', () => {
        render(
            <Router>
                <Hero />
            </Router>);
        const footer = screen.getByText('Until');

        expect(footer).toBeInTheDocument();
    });

    it('matches snapshot', () => {
        const { container } =
            render(
                <Router>
                    <Hero />
                </Router>
            );
        expect(container).toMatchSnapshot();
    });
});
