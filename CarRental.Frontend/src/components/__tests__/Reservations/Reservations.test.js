import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useBlob } from '../../../contexts/BlobContext';
import { BlobProvider } from '../../../contexts/BlobContext';
import '@testing-library/jest-dom';

afterEach(() => {
    cleanup();
});

function ReservationsTester() {
    const { getImage } = useBlob();
    return (
        <>
        <div data-testid='test1'>{getImage(100)}</div>
        </>
    )
}

describe('Reservations component - functions', () => {
    it('blob link generate propertly', () => {
        render(
            <BlobProvider>
                <Router>
                    <ReservationsTester />
                </Router>
            </BlobProvider>
        );
        expect(screen.getByTestId('test1')).toHaveTextContent('https://objectstorage.eu-frankfurt-1.oraclecloud.com');
    });

    it('blob link have proper argument', () => {
        render(
            <BlobProvider>
                <Router>
                    <ReservationsTester />
                </Router>
            </BlobProvider>
        );
        expect(screen.getByTestId('test1')).toHaveTextContent('100.jpg');
    });
});

