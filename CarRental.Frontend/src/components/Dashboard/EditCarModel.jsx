import React, { useState, useEffect } from 'react';
import EditCarModelTile from './EditCarModelTile';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Dashboard.module.css';
import SideMenu from './SideMenu';

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
        <EditCarModelTile key={car.id} id={car.id} manufacturer={car.manufacturer} model={car.model} type={car.type} seats={car.seats} fuel={car.fuel} hps={car.hPs} axes={car.axes} ac={car.airConditioning} gearbox={car.gearbox}/>
    );

    return (
        <>
            <div className={styles.container}>
                <SideMenu />
                <div className={styles.content}>
                <div className={styles.dashboard_title}>
                        <h1>Select car model you want to edit</h1>
                    </div>
                    {carsToEdit}
                </div>
            </div>
        </>
    );
}