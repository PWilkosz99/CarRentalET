import React, { useState, useEffect } from 'react';
import EditCarModelTile from './EditCarModelTile';

export default function EditCarModel() {

    const [cars, setCars] = useState();

    useEffect(() => {
        (
            async () => {
                const responde = await fetch('http://localhost:5000/api/GetCarModels', {
                    headers: { 'Content-Type': 'application/json' }
                });

                const content = await responde.json();
                setCars(content);
            }
        )();
    }, []);

    const carsToEdit = cars?.map((car) =>
        <EditCarModelTile key={car.id} id={car.id} manufacturer={car.manufacturer} type={car.type} seats={car.seats} fuel={car.fuel} hps={car.hPs} axes={car.axes} />
    );

    return (
        <div className="edit-model">
            <h2>Edit car model</h2>
            {carsToEdit}
        </div>
    );
}