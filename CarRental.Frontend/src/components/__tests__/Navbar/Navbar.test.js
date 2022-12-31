import { renderer, screen, cleanup } from '@testing-library/react';
import rederer from 'react-test-renderer';
import Navbar from '../../Navbar/Navbar';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});

test('should render Navbar component', () => {
  render(<Navbar />);
  const navbar = screen.getByTestId('navbar');

  expect(navbar).toBeInTheDocument();
});
