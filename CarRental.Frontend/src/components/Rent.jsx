import React, { useState, useEffect } from 'react';
import RentTile from './RentTile';

export default function Rent() {

    const [cars, setCars] = useState();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const selectDate = async (e) => {
        e.preventDefault();

        (
            async () => {
                const responde = await fetch('http://localhost:5000/api/GetAvaliableCars', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        startDate,
                        endDate
                    })
                });

                const content = await responde.json();
                console.log(content);
                setCars(content);
            }
        )();

    }


    const carsTiles = cars?.map((car) => <RentTile key={car.id} car={car} startDate={startDate} endDate={endDate} />);

    return (
        <>
            <h1>Select rent date</h1>
            <form className="rent-date" onSubmit={selectDate}>
                <input type="datetime-local" className="start-date" onChange={e => setStartDate(e.target.value)} />
                <input type="datetime-local" className="start-date" onChange={e => setEndDate(e.target.value)} />
                <button>Submit</button>
            </form>
            {carsTiles}
        </>
    )
}
