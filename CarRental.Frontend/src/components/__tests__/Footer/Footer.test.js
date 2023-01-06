import { render, screen, cleanup } from '@testing-library/react';
import Footer from '../../Footer/Footer';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});

describe('Footer component', () => {
  it('should render Footer component', () => {
    render(<Footer />);
    const footer = screen.getByText('Contact informations XXX');

    expect(footer).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});