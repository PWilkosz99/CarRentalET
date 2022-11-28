import React, { useState, useEffect } from 'react';
import AddCarTile from './AddCarTile';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Dashboard.module.css';
import SideMenu from './SideMenu';

export default function AddCar() {
    const [cars, setCars] = useState();
    const [addingMode, setAddingMode] = useState(false);

    const [modelId, setModelId] = useState();
    const [mileage, setMileage] = useState();
    const [productionDate, setProductionDate] = useState();
    const [costPerDay, setcostPerDay] = useState();
    const [state, setState] = useState();
    const [color, setColor] = useState();
    const [notes, setNotes] = useState();

    // #TODO: change to useRef to use onhover and optimaze, validation

    const { currentUser } = useAuth();

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

    const handleChoice = (id) => {
        setModelId(id);
        setAddingMode(true);
    }

    const addCar = async (e) => {
        e.preventDefault();

        await currentUser.getIdToken().then(
            (token) => {
                fetch('http://localhost:5000/api/AddCar', {
                    method: 'POST',
                    headers: new Headers({
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify({
                        modelId,
                        mileage,
                        productionDate,
                        costPerDay,
                        color,
                        notes,
                        state
                    })
                });
            }
        );

        setAddingMode(false);
    }

    const carsModels = cars?.map((car) => <AddCarTile key={car.id} car={car} handleChoice={handleChoice} />);

    if (!addingMode) {
        return (
            <>
                <div className={styles.container}>
                    <SideMenu />
                    <div className={styles.content}>
                        <div className={styles.dashboard_title}>
                            <h1>Select car model of car you want to add:</h1>
                        </div>
                        {carsModels}
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className={styles.container}>
                    <SideMenu />
                    <div className={styles.content}>
                        <div className={styles.dashboard_card}>
                            <div className={styles.dashboard_title}>
                                <h1>Provide data about car</h1>
                            </div>
                            <form className={styles.form} onSubmit={addCar}>
                                <div className={styles.form_row}>
                                    <span className={styles.form_label}>Milage: </span>
                                    <input type="number" placeholder="Milage" onChange={(e) => setMileage(e.target.value)} />
                                </div>
                                <div className={styles.form_row}>
                                    <span className={styles.form_label}>Production date: </span>
                                    <input type="month" placeholder="Production date" onChange={(e) => setProductionDate(() => (new Date(e.target.value)))} />
                                </div>
                                <div className={styles.form_row}>
                                    <span className={styles.form_label}>Cost per day: </span>
                                    <input type="number" placeholder="Cost per day" onChange={(e) => setcostPerDay(e.target.value)} />
                                </div>
                                <div className={styles.form_row}>
                                    <span className={styles.form_label}>Car state: </span>
                                    <input type="text" placeholder="Car state" onChange={(e) => setState(e.target.value)} />
                                </div>
                                <div className={styles.form_row}>
                                    <span className={styles.form_label}>Color: </span>
                                    <input type="color" placeholder="Color" onChange={(e) => setColor(e.target.value)} />
                                </div>
                                <div className={styles.form_row}>
                                    <span className={styles.form_label}>Notes: </span>
                                    <input type="text" placeholder="Notes" onChange={(e) => setNotes(e.target.value)} />
                                </div>
                                <button className={styles.btn} type="submit">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}