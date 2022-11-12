import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function ReservationsTile(props) {
    const { currentUser } = useAuth();

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
        <>
            <hr />
            <h3>{props.reservation.startDate} --- {props.reservation.endDate}</h3>
            <h4>{props.reservation.vehicle.model.manufacturer} --- {props.reservation.vehicle.model.model}</h4>
            <button onClick={cancelReservation}>Cancel</button>
        </>
    )
}
