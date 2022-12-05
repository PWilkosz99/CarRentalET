import React, { useState, useEffect } from 'react';
import { useBlob } from '../../contexts/BlobContext';
import { useAuth } from '../../contexts/AuthContext';

import styles from './Reservations.module.css';

export default function ReservationsTile(props) {
    const { currentUser } = useAuth();
    const { getImage } = useBlob();

    const cancelReservation = async () => {
        (
            async () => {
                await currentUser.getIdToken().then(
                    (token) => {
                        return fetch(`http://localhost:5000/api/DeleteReservation/${props.reservation.id}`, {
                            headers: new Headers({
                                'Authorization': `Bearer ${token}`,
                                'Content-Type': 'application/json'
                            }),
                            method: 'DELETE'
                        });
                    }
                );
            }
        )();
    }

    return (
        <><div className={styles.reservations_card}>
            <h1 className={styles.reservations_card_title}>{props.reservation.vehicle.model.manufacturer} {props.reservation.vehicle.model.model} {(new Date(props.reservation.vehicle.productionDate)).getFullYear()}</h1>
            <div className={styles.card_left}>
                <div className={styles.reservation_details_row}>
                    <span className={styles.reservation_label}>Start date: </span><span className={styles.reservation_value}>{(new Date(props.reservation.startDate)).toLocaleDateString()}</span>
                </div>
                <div className={styles.reservation_details_row}>
                    <span className={styles.reservation_label}>End date: </span><span className={styles.reservation_value}>20.22.22</span>
                </div>
                <div className={styles.reservation_details_row}>
                    <span className={styles.reservation_label}>Payment method: </span><span className={styles.reservation_value}>Credit card</span>
                </div>
                <div className={styles.reservation_details_row}>
                    <span className={styles.reservation_label}>Cost: </span><span className={styles.reservation_value}>{props.reservation.cost} zł</span> 
                    {/* TODO: Fix cost calculation */}
                </div>
            </div>
            <div className={styles.card_right}>
                <div className={styles.car_img}>
                    <img src={getImage(props.reservation.vehicle.model.id)} />
                </div>
            </div>
            <button className={styles.cancel_btn} onClick={cancelReservation}>Cancel reservation</button>
        </div>
        </>
    )
}
