import React, { useState, useEffect } from 'react';
import EditCarTile from './EditCarTile';
import styles from './Dashboard.module.css';
import SideMenu from './SideMenu';

export default function EditCar() {
  const [cars, setCars] = useState();

  useEffect(() => {
    (
      async () => {
        const responde = await fetch('http://localhost:5000/api/GetCars', {
          headers: { 'Content-Type': 'application/json' },
        });

        const content = await responde.json();
        setCars(content);
      }
    )();
  }, []);

  const carsToEdit = cars?.map((car) => <EditCarTile key={car.id} car={car} />);

  return (
    <div className={styles.container}>
      <SideMenu />
      <div className={styles.content}>
        <div className={styles.dashboard_title}>
          <h1>Select car you want to edit</h1>
        </div>
        {carsToEdit}
      </div>
    </div>
  );
}
