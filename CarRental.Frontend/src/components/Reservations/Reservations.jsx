import React, { useState, useEffect } from 'react';
import ReservationsTile from './ReservationsTile';
import { useAuth } from '../../contexts/AuthContext';

import styles from './Reservations.module.css';

export default function Reservations() {
    const [reservations, setReservations] = useState();

    const { currentUser } = useAuth();

    useEffect(() => {
        (
            async () => {
                const responde = await currentUser.getIdToken().then(
                    (token) => {
                        return fetch('http://localhost:5000/api/GetReservedCars', {
                            headers: new Headers({
                                'Authorization': `Bearer ${token}`,
                                'Content-Type': 'application/json'
                            }),
                        });
                    }
                );
                if (responde.status === 200) {
                    const content = await responde.json();
                    setReservations(content);
                } else {
                    alert("ERROR");
                }
            }
        )();
    }, [currentUser]);

    const reservationsTiles = reservations?.map((res) => <ReservationsTile key={res.id} reservation={res} />);


    if (!currentUser) {
        return (
            <div className={styles.reservations_container}>
                <div className={styles.reservations_card}>
                    <div className={styles.reservations_title}>
                        <h1>You must be logged in to see your reservations!</h1>
                    </div>
                </div>
            </div>
        )
    } else {
        if (!reservationsTiles) {
            return (
                <div className={styles.reservations_container}>
                    <div className={styles.reservations_card}>
                        <div className={styles.reservations_title}>
                            <h1>You have no reservations!</h1>
                        </div>
                    </div >
                </div >
            )
        } else {
            return (
                <>
                    <div className={styles.reservations_container}>
                        <div className={styles.reservations_title}>
                            <h1>Your reservations:</h1>
                        </div>
                        {/* <h2>Upcoming:</h2> */}
                        {reservationsTiles}
                        {/* <h2>Past:</h2> */}
                        {/* TODO: Add past reservations */}
                    </div>
                </>
            )
        }
    }
}
