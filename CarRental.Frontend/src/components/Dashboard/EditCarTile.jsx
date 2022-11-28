import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useBlob } from '../../contexts/BlobContext';
import styles from './Dashboard.module.css';

export default function EditCarTile(props) {
    const [car, setCar] = useState(props.car);
    const [carModel, setCarModel] = useState(props.car.model);
    const [editMode, setEditMode] = useState(false);

    const [id, setId] = useState(car.id);
    const [mileage, setMileage] = useState(car.mileage);
    const [productionDate, setProductionDate] = useState(car.productionDate);
    const [costPerDay, setcostPerDay] = useState(car.costPerDay);
    const [state, setState] = useState(car.state);
    const [color, setColor] = useState(car.color);
    const [notes, setNotes] = useState(car.notes);

    const { currentUser } = useAuth();
    const { getImage } = useBlob();

    const editCar = async (e) => {
        e.preventDefault();

        await currentUser.getIdToken().then(
            (token) => {
                return fetch(`http://localhost:5000/api/EditCar/${id}`, {
                    method: 'POST',
                    headers: new Headers({
                        'Authorization': `Bearer ${token}`
                    }),
                    body: JSON.stringify({
                        mileage,
                        productionDate,
                        costPerDay,
                        state,
                        color,
                        notes
                    })
                });
            }
        );
        setEditMode(false);
    }

    const removeCar = () => {
        (
            async () => {
                await currentUser.getIdToken().then(
                    (token) => {
                        return fetch(`http://localhost:5000/api/DeleteCar/${id}`, {
                            method: 'DELETE',
                            headers: new Headers({
                                'Authorization': `Bearer ${token}`
                            })
                        });
                    }
                );
            }
        )();
    }
    if (!editMode) {
        return (
            <div className={styles.dashboard_card}>
                <div className={styles.dashboard_title}>
                    <h1>Samochodzik taki i taki</h1>
                </div>
                <div className={styles.dashboard_row}>
                    <img src={getImage(props.car.id)} className={styles.dashboard_card_img} alt={props.car.manufacturer} />
                </div>
                <div className={styles.dashboard_row_text}>
                    <h2>Manufacturer: dadadada</h2>
                </div>
                <div className={styles.dashboard_row_text}>
                    <h2>Manufacturer: dadadada</h2>
                </div>
                <div className={styles.dashboard_row_text}>
                    <h2>Manufacturer: dadadada</h2>
                </div>
                <div className={styles.dashboard_row_text}>
                    <h2>Manufacturer: dadadada</h2>
                </div>
                <div className={styles.dashboard_row_text}>
                    <h2>Manufacturer: dadadada</h2>
                </div>
                <div className={styles.dashboard_row_text}>
                    <h2>Manufacturer: dadadada</h2>
                </div>
                <div className={styles.dashboard_row_text}>
                    <h2>Manufacturer: dadadada</h2>
                </div>
                <div className={styles.dashboard_row_text}>
                    <h2>Manufacturer: dadadada</h2>
                </div>
                <button className={styles.btns} onClick={() => setEditMode(true)}>Edit</button>
                <button className={styles.btns} onClick={removeCar}>Remove</button>
                {/* <h1>Provide data about car</h1>
                    <h2>{carModel.manufacturer} - {carModel.model} - {carModel.type} - {carModel.fuel} - {carModel.seats} - {carModel.hPs} - {carModel.axes}</h2>
                    <h2>{mileage} - {String(productionDate)} - {costPerDay} - {state} - {color} - {notes}</h2> */}
            </div>

        );
    } else {
        return (
            <>
                <div className={styles.dashboard_card}>
                    <div className={styles.dashboard_title}>
                        <h1>Provide data about car</h1>
                    </div>
                    <form className={styles.form} onSubmit={editCar}>
                        <div className={styles.form_row}>
                            <span className={styles.form_label}>Milage: </span>
                            <input type="number" placeholder="Milage" value={mileage} onChange={(e) => setMileage(e.target.value)} />
                        </div>
                        <div className={styles.form_row}>
                            <span className={styles.form_label}>Production date: </span>
                            <input type="month" placeholder="Production date" onChange={(e) => setProductionDate(() => (new Date(e.target.value)))} />
                        </div>
                        <div className={styles.form_row}>
                            <span className={styles.form_label}>Cost per day: </span>
                            <input type="number" placeholder="Cost per day" value={costPerDay} onChange={(e) => setcostPerDay(e.target.value)} />
                        </div>
                        <div className={styles.form_row}>
                            <span className={styles.form_label}>Car state: </span>
                            <input type="text" placeholder="Car state" value={state} onChange={(e) => setState(e.target.value)} />
                        </div>
                        <div className={styles.form_row}>
                            <span className={styles.form_label}>Color: </span>
                            <input type="color" placeholder="Color" value={color} onChange={(e) => setColor(e.target.value)} />
                        </div>
                        <div className={styles.form_row}>
                            <span className={styles.form_label}>Notes: </span>
                            <input type="text" placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
                        </div>
                        <button className={styles.btn} type="submit">Save</button>
                    </form>
                </div>
            </>
        )
    }
}