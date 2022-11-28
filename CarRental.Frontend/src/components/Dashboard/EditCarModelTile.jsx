import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useBlob } from '../../contexts/BlobContext';
import styles from './Dashboard.module.css';

export default function EditCarModelTile(props) {

    const [id, setId] = useState(props.id);
    const [Manufacturer, setManufacturer] = useState(props.manufacturer);
    const [Model, setModel] = useState(props.model);
    const [Type, setType] = useState(props.type);
    const [Fuel, setFuel] = useState(props.fuel);
    const [Seats, setSeats] = useState(props.seats);
    const [HPs, setHPs] = useState(props.hPs);
    const [Axes, setAxes] = useState(props.axes);
    const [editMode, setEditMode] = useState(false);

    const { currentUser } = useAuth();
    const { getImage } = useBlob();

    const editCarModel = async (e) => {
        e.preventDefault();

        await currentUser.getIdToken().then(
            (token) => {
                return fetch(`http://localhost:5000/api/EditCarModel/${id}`, {
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

        setEditMode(false);
    }

    const deleteCarModel = (id) => {
        (
            async () => {

                await currentUser.getIdToken().then(
                    (token) => {
                        return fetch(`http://localhost:5000/api/DeleteCarModel/${id}`, {
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
                    <h1>Provide data about car</h1>
                </div>

                <div className={styles.dashboard_row}>
                    <img src={getImage(id)} className={styles.dashboard_card_img} alt={Manufacturer} />
                </div>
                {/* <h3>({id}) {Manufacturer} --- {Model} --- {Type} --- {Fuel} --- {Seats} --- {Axes} --- {HPs}</h3> */}
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
                <button className={styles.btns} onClick={() => setEditMode(!editMode)}>Edit</button>
                <button className={styles.btns} onClick={() => deleteCarModel(props.id)}>Delete</button>
            </div>
        );
    } else {
        return (
            <>
                <div className={styles.dashboard_card}>
                    <div className={styles.dashboard_title}>
                        <h1>Provide data about car</h1>
                    </div>
                    <form className={styles.form} onSubmit={editCarModel}>

                        <div className={styles.form_row}>
                            <span className={styles.form_label}>Milage: </span>
                            <input className="manufacturer-form" placeholder="Manufacturer" value={Manufacturer} required onChange={e => setManufacturer(e.target.value)} />
                        </div>
                        <div className={styles.form_row}>
                            <span className={styles.form_label}>Milage: </span>
                            <input className="model-form" placeholder="Model" value={Model} required onChange={e => setModel(e.target.value)} />
                        </div>
                        <div className={styles.form_row}>
                            <span className={styles.form_label}>Milage: </span>
                            <select className="type-form" value={Type} onChange={e => setType(e.target.value)}>
                                <option value="Sedan">Sedan</option>
                                <option value="Hatchback">Hatchback</option>
                                <option value="Coupe">Coupe</option>
                            </select>
                        </div>
                        <div className={styles.form_row}>
                            <span className={styles.form_label}>Milage: </span>
                            <select className="fuel-form" value={Fuel} onChange={e => setFuel(e.target.value)}>
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Electric">Electric</option>
                            </select>
                        </div>
                        <div className={styles.form_row}>
                            <span className={styles.form_label}>Milage: </span>
                            <input type="number" className="seats-form" placeholder="Seats" required onChange={e => setSeats(e.target.value)} />
                        </div>

                        <div className={styles.form_row}>
                            <span className={styles.form_label}>Milage: </span>
                            <input type="number" className="hps-form" placeholder="HPs" required onChange={e => setHPs(e.target.value)} />
                        </div>
                        <div className={styles.form_row}>
                            <span className={styles.form_label}>Milage: </span>
                            <select className="axes-form" value={Axes} onChange={e => setAxes(e.target.value)}>
                                <option value="FWD">FWD</option>
                                <option value="RWD">RWD</option>
                                <option value="AWD">AWD</option>
                            </select>
                        </div>
                        <button className={styles.btns} type="submit">Submit</button>
                        <button className={styles.btns} onClick={() => setEditMode(!editMode)}>Back</button>
                    </form>
                </div>
            </>
        );
    }
}