import React, { useState, useEffect } from 'react';
import EditCarTile from './EditCarTile';

export default function EditCar() {

    const [cars, setCars] = useState();

    useEffect(() => {
        (
            async () => {
                const responde = await fetch('http://localhost:5000/api/GetCars', {
                    headers: { 'Content-Type': 'application/json' }
                });

                const content = await responde.json();
                setCars(content);
            }
        )();
    }, []);

    const carsToEdit = cars?.map((car) => <EditCarTile key={car.id} car={car} />);

    return (
        <div className="edit-car">
            <h2>Edit car</h2>
            {carsToEdit}
        </div>
    );
}