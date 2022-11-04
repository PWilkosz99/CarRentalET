import React, { useState, useEffect } from 'react';

export default function Rent(props) {

    const [car, setCars] = useState(props.car);
    const [model, setModel] = useState(props.car.model);
    const [auth, setAuth] = useState();

    const reserveCar = async () => {
        const responde = await fetch('http://localhost:5000/auth/user', {
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });

        const content = await responde.json();
        setAuth(content);
        if (content.status === 401) {
            alert('You must be logged in to reserve a car!');
        } else {
            console.log(props.startDate)
            alert(1);
            console.log(content)
            const responde = await fetch('http://localhost:5000/api/ReserveCar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    vehicleId: car.id,
                    userId: content.id,
                    startDate: props.startDate,
                    endDate: props.endDate
                })
            });
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
