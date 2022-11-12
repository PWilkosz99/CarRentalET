import React, { useState, useEffect } from 'react';
import EditCarModelTile from './EditCarModelTile';
import { useAuth } from '../contexts/AuthContext';

export default function EditCarModel() {

    const [cars, setCars] = useState();
    const { currentUser } = useAuth();

    useEffect(() => {
        (
            async () => {
                const responde = await currentUser.getIdToken().then(
                    (token) => {
                        return fetch('http://localhost:5000/api/GetCarModels', {
                            headers: new Headers({
                                'Authorization': `Bearer ${token}`,
                                'Content-Type': 'application/json'
                            })
                        });
                    }
                );
                const content = await responde.json();
                setCars(content);
            }
        )();
    }, []);

    const carsToEdit = cars?.map((car) =>
        <EditCarModelTile key={car.id} id={car.id} manufacturer={car.manufacturer} model={car.model} type={car.type} seats={car.seats} fuel={car.fuel} hps={car.hPs} axes={car.axes} />
    );

    return (
        <div className="edit-model">
            <h2>Edit car model</h2>
            {carsToEdit}
        </div>
    );
}