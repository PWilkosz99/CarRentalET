import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import LoginPanel from '../../Login/LoginPanel';

afterEach(() => {
    cleanup();
});


describe('Login component', () => {
    it('renders without crashing', () => {
        render(
            <Router>
                <LoginPanel />
            </Router>
        );
    });

    it('matches snapshot', () => {
        const { container } = render(
            <Router>
                <LoginPanel />
            </Router>);
        expect(container).toMatchSnapshot();
    });

    it('should have expected text', () => {
        render(
          <Router>
            <LoginPanel />
          </Router>);
        const dashboard = screen.getByText("You don't have a account?");
    
        expect(dashboard).toBeInTheDocument();
      });
});