import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BlobProvider } from '../../../contexts/BlobContext';
import '@testing-library/jest-dom';
import RentDetails from '../../Rent/RentDetails';

afterEach(() => {
    cleanup();
});

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        state: {
            car: {
                id: 1,
                brand: "Test",
                model: "Car",
                year: 2019,
                pricePerDay: 100,
                imageUrl: "https://localhost:5000/images/1jpg",
                description: "test",
                isAvailable: true,
                isRented: false,
                isDeleted: false,
            },
        }
    })
}));

describe('Rent component', () => {
    it('renders without crashing', () => {
        render(
            <BlobProvider value={null}>
            <Router>
                <RentDetails />
            </Router>
            </BlobProvider>
        );
    });

    it('matches snapshot', () => {
        const { container } = render(
            <BlobProvider>
            <Router>
                <RentDetails />
            </Router>
            </BlobProvider>);
        expect(container).toMatchSnapshot();
    });

    it('should redner user data text', () => {
        render(
            <BlobProvider>
            <Router>
                <RentDetails />
            </Router>
            </BlobProvider>);
        const footer = screen.getByText('Phone:');
        const footer2 = screen.getByText('Country:');

        expect(footer).toBeInTheDocument();
        expect(footer2).toBeInTheDocument();
    });
});