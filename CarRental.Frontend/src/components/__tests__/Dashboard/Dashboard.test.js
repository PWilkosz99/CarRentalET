import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '../../Dashboard/Dashboard';
import SideMenu from '../../Dashboard/SideMenu';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});

test('should render Dashboard component', () => {
  render(
    <Router>
      <Dashboard />
    </Router>);
  const dashboard = screen.getByText('Add new car');

  expect(dashboard).toBeInTheDocument();
});

test('should render SideMenu component', () => {
  render(
    <Router>
      <SideMenu />
    </Router>);
  const sideMenu = screen.getByText('Add new car');

  expect(sideMenu).toBeInTheDocument();
});