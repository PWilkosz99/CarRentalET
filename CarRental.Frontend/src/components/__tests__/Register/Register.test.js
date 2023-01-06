import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import RegisterPanel from '../../Register/RegisterPanel';

afterEach(() => {
    cleanup();
});


describe('Register component', () => {
    it('renders without crashing', () => {
        render(
            <Router>
                <RegisterPanel />
            </Router>
        );
    });

    it('matches snapshot', () => {
        const { container } = render(
            <Router>
                <RegisterPanel />
            </Router>);
        expect(container).toMatchSnapshot();
    });

    it('should have expected text', () => {
        render(
          <Router>
            <RegisterPanel />
          </Router>);
        const dashboard = screen.getByText("Do you have an account");
    
        expect(dashboard).toBeInTheDocument();
      });
});