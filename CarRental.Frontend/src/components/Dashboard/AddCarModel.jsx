import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useBlob } from '../../contexts/BlobContext';
import styles from './Dashboard.module.css';
import SideMenu from './SideMenu';


export default function AddCarModel() {
    const [Manufacturer, setManufacturer] = useState('');
    const [Model, setModel] = useState('');
    const [Type, setType] = useState('');
    const [Fuel, setFuel] = useState('');
    const [Seats, setSeats] = useState('');
    const [HPs, setHPs] = useState('');
    const [Axes, setAxes] = useState('');

    const [image, setImage] = useState();
    const { currentUser } = useAuth();
    const { saveImage } = useBlob();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await currentUser.getIdToken().then(
            (token) => {
                return fetch('http://localhost:5000/api/AddCarModel', {
                    method: 'POST',
                    headers: new Headers({
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify({
                        Manufacturer,
                        Model,
                        Type,
                        Fuel,
                        Seats,
                        HPs,
                        Axes
                    })
                });
            }
        );
        if (response.ok) {
            let id = await response.json();
            saveImage(id, image) ? alert('Car model added') : alert('Car model added, but image not saved');
        }
    }

    return (
        <>
            <div className={styles.container}>
                <SideMenu />
                <div className={styles.content}>
                    <div className={styles.dashboard_card}>
                        <div className={styles.dashboard_title}>
                            <h1>Provide data about car model</h1>
                        </div>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.form_row}>
                                <span className={styles.form_label}>Manufacturer: </span>
                                <input className="manufacturer-form" placeholder="Manufacturer" required onChange={e => setManufacturer(e.target.value)} />
                            </div>
                            <div className={styles.form_row}>
                                <span className={styles.form_label}>Model: </span>
                                <input className="model-form" placeholder="Model" required onChange={e => setModel(e.target.value)} />
                            </div>
                            <div className={styles.form_row}>
                                <span className={styles.form_label}>Type: </span>
                                <select className="type-form" value={Type} onChange={e => setType(e.target.value)}>
                                    <option value="Sedan">Sedan</option>
                                    <option value="Hatchback">Hatchback</option>
                                    <option value="Coupe">Coupe</option>
                                </select>
                            </div>
                            <div className={styles.form_row}>
                                <span className={styles.form_label}>Fuel: </span>
                                <select className="fuel-form" value={Fuel} onChange={e => setFuel(e.target.value)}>
                                    <option value="Petrol">Petrol</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="Electric">Electric</option>
                                </select>
                            </div>
                            <div className={styles.form_row}>
                                <span className={styles.form_label}>Seats: </span>
                                <input type="number" className="seats-form" placeholder="Seats" required onChange={e => setSeats(e.target.value)} />
                            </div>
                            <div className={styles.form_row}>
                                <span className={styles.form_label}>HPs: </span>
                                <input type="number" className="hps-form" placeholder="HPs" required onChange={e => setHPs(e.target.value)} />
                            </div>
                            <div className={styles.form_row}>
                                <span className={styles.form_label}>Axes: </span>
                                <select className="axes-form" value={Axes} onChange={e => setAxes(e.target.value)}>
                                    <option value="FWD">FWD</option>
                                    <option value="RWD">RWD</option>
                                    <option value="AWD">AWD</option>
                                </select>
                            </div>
                            <div className={styles.form_row}>
                                <span className={styles.form_label}>Image: </span>
                                <input type="file" placeholder="Image" required onChange={(e) => setImage(e.target.files[0])} />
                            </div>
                            <button className={styles.btn} type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}