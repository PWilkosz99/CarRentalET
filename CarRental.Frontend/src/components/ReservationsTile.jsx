import React, { useState, useEffect } from 'react';

export default function ReservationsTile(props) {

    const cancelReservation = async () => {
        (
            async () => {
                await fetch(`http://localhost:5000/api/DeleteReservation/${props.reservation.id}`, {
                    method: 'DELETE'
                });
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
