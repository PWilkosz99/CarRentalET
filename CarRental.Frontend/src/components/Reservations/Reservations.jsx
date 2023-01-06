import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import ReservationsTile from './ReservationsTile';
import { useAuth } from '../../contexts/AuthContext';

import styles from './Reservations.module.css';

export default function Reservations() {
  const [reservations, setReservations] = useState();

  const { currentUser } = useAuth();

  console.log(currentUser);

  useEffect(() => {
    (
      async () => {
        const responde = await currentUser.getIdToken().then(
          (token) => fetch('http://localhost:5000/api/Reservations/GetReservedCars', {
            headers: new Headers({
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            }),
          }),
        );
        if (responde.status === 200) {
          const content = await responde.json();
          setReservations(content);
        } else {
          toast.error('Something went wrong', { position: 'bottom-right', theme: 'colored' });
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
    );
  }
  if (!reservationsTiles) {
    return (
      <div className={styles.reservations_container}>
        <div className={styles.reservations_card}>
          <div className={styles.reservations_title}>
            <h1>You have no reservations!</h1>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.reservations_container}>
      <div className={styles.reservations_title}>
        <h1>Your reservations:</h1>
      </div>
      {reservationsTiles}
    </div>
  );
}
