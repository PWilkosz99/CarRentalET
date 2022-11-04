import React, { useState, useEffect } from 'react';
import ReservationsTile from './ReservationsTile';

export default function Reservations() {
    const [auth, setAuth] = useState('');
    const [reservations, setReservations] = useState();

    useEffect(() => {
        (
            async () => {
                const responde = await fetch('http://localhost:5000/auth/user', {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });
                const content = await responde.json();
                setAuth(content);
            }
        )();
    }, []);

    useEffect(() => {
        (
            async () => {
                const responde = await fetch('http://localhost:5000/api/GetReservedCars', {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });
                const content = await responde.json();
                setReservations(content);
            }
        )();
    }, [auth]);

    const reservationsTiles = reservations?.map((res) => <ReservationsTile key={res.id} reservation={res} />);


    if (auth.status === 401) {
        return (
            <h1>You must be logged in to see your reservations!</h1>
        )
    } else {
        return (
            <>
                <h1>Your reservations:</h1>
                <hr />
                <h2>Upcoming:</h2>
                {reservationsTiles}
                <hr />
                <h2>Past:</h2>
                {/* TODO: Add past reservations */}
                <hr />
                
            </>
        )
    }
}
