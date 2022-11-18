import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

export default function Rent(props) {

    const [car, setCars] = useState(props.car);
    const [model, setModel] = useState(props.car.model);
    const { currentUser } = useAuth();

    const reserveCar = async () => {

        if (!currentUser) {
            alert('You must be logged in to reserve a car!');
        } else {
            const responde = await currentUser.getIdToken().then(
                (token) => {
                    return fetch('http://localhost:5000/api/ReserveCar', {
                        method: 'POST',
                        headers: new Headers({
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }),
                        body: JSON.stringify({
                            vehicleId: car.id,
                            userId: currentUser.uid,
                            startDate: props.startDate,
                            endDate: props.endDate
                        })
                    });
                }
            );
        }
    }


    return (
        <>
            <hr />
            {model.manufacturer} --- {model.model} --- {(new Date(car.productionDate)).getFullYear()} --- {car.costPerDay} $/DAY
            <button onClick={reserveCar} >Rent</button>
        </>
    )
}
