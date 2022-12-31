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
  const [HPs, setHPs] = useState(props.hps);
  const [Axes, setAxes] = useState(props.axes);
  const [AC, setAC] = useState(props.ac);
  const [Gearbox, setGearbox] = useState(props.gearbox);

  const [editMode, setEditMode] = useState(false);

  const { currentUser } = useAuth();
  const { getImage } = useBlob();

  const editCarModel = async (e) => {
    e.preventDefault();

    await currentUser.getIdToken().then(
      (token) => fetch(`http://localhost:5000/api//VehicleModelsEditCarModel/${id}`, {
        method: 'POST',
        headers: new Headers({
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
          Manufacturer,
          Model,
          Type,
          Fuel,
          Seats,
          HPs,
          Axes,
        }),
      }),
    );

    setEditMode(false);
  };

  const deleteCarModel = (id) => {
    (
      async () => {
        await currentUser.getIdToken().then(
          (token) => fetch(`http://localhost:5000/api//VehicleModels/DeleteCarModel/${id}`, {
            method: 'DELETE',
            headers: new Headers({
              Authorization: `Bearer ${token}`,
            }),
          }),
        );
      }
    )();
  };

  if (!editMode) {
    return (
      <div className={styles.dashboard_card}>
        <div className={styles.dashboard_title}>
          <h1>
            {Manufacturer}
            {' '}
            {Model}
          </h1>
        </div>

        <div className={styles.dashboard_row}>
          <img src={getImage(id)} className={styles.dashboard_card_img} alt={Manufacturer} />
        </div>
        <div className={styles.dashboard_row_text}>
          <h2 className={styles.edit_row}>
            Type:
            <span className={styles.value}>{Type}</span>
          </h2>
        </div>
        <div className={styles.dashboard_row_text}>
          <h2 className={styles.edit_row}>
            Fuel:
            <span className={styles.value}>{Fuel}</span>
          </h2>
        </div>
        <div className={styles.dashboard_row_text}>
          <h2 className={styles.edit_row}>
            Seats:
            <span className={styles.value}>{Seats}</span>
          </h2>
        </div>
        <div className={styles.dashboard_row_text}>
          <h2 className={styles.edit_row}>
            Axes:
            <span className={styles.value}>{Axes}</span>
          </h2>
        </div>
        <div className={styles.dashboard_row_text}>
          <h2 className={styles.edit_row}>
            HPs:
            <span className={styles.value}>{HPs}</span>
          </h2>
        </div>
        <div className={styles.dashboard_row_text}>
          <h2 className={styles.edit_row}>
            Gearbox:
            <span className={styles.value}>{Gearbox}</span>
          </h2>
        </div>
        <div className={styles.dashboard_row_text}>
          <h2 className={styles.edit_row}>
            AC:
            <span className={styles.value}>{AC ? 'Yes' : 'No'}</span>
          </h2>
        </div>
        <div className={styles.dashboard_row_text}>
          <h2 className={styles.edit_row}>
            Notes:
            <span className={styles.value} />
          </h2>
        </div>
        <button type="submit" className={styles.btns} onClick={() => setEditMode(!editMode)}>Edit</button>
        <button type="submit" className={styles.btns} onClick={() => deleteCarModel(props.id)}>Delete</button>
      </div>
    );
  }
  return (
    <div className={styles.dashboard_card}>
      <div className={styles.dashboard_title}>
        <h1>
          Edit data about
          {Manufacturer}
          {' '}
          {Model}
        </h1>
      </div>
      <form className={styles.form} onSubmit={editCarModel}>

        <div className={styles.form_row}>
          <span className={styles.form_label}>Manufacturer: </span>
          <input className="manufacturer-form" placeholder="Manufacturer" value={Manufacturer} required onChange={(e) => setManufacturer(e.target.value)} />
        </div>
        <div className={styles.form_row}>
          <span className={styles.form_label}>Model: </span>
          <input className="model-form" placeholder="Model" value={Model} required onChange={(e) => setModel(e.target.value)} />
        </div>
        <div className={styles.form_row}>
          <span className={styles.form_label}>Type: </span>
          <select className="type-form" value={Type} onChange={(e) => setType(e.target.value)}>
            <option value="Sedan">Sedan</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Coupe">Coupe</option>
            <option value="SUV">SUV</option>
            <option value="Crosover">Crosover</option>
            <option value="Minivan">Minivan</option>
            <option value="Pickup">Pickup</option>
            <option value="Cabriolet">Cabriolet</option>
          </select>
        </div>
        <div className={styles.form_row}>
          <span className={styles.form_label}>Fuel: </span>
          <select className="fuel-form" value={Fuel} onChange={(e) => setFuel(e.target.value)}>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electric">Electric</option>
          </select>
        </div>
        <div className={styles.form_row}>
          <span className={styles.form_label}>Seats: </span>
          <input type="number" className="seats-form" placeholder="Seats" value={Seats} required onChange={(e) => setSeats(e.target.value)} />
        </div>

        <div className={styles.form_row}>
          <span className={styles.form_label}>HPs: </span>
          <input type="number" className="hps-form" placeholder="HPs" value={HPs} required onChange={(e) => setHPs(e.target.value)} />
        </div>
        <div className={styles.form_row}>
          <span className={styles.form_label}>Axes: </span>
          <select className="axes-form" value={Axes} onChange={(e) => setAxes(e.target.value)}>
            <option value="FWD">FWD</option>
            <option value="RWD">RWD</option>
            <option value="AWD">AWD</option>
          </select>
          <span className={styles.form_label}>Gearbox: </span>
          <select className="axes-form" value={Gearbox} onChange={(e) => setGearbox(e.target.value)}>
            <option value="Manual">MANUAL</option>
            <option value="Automatic">AUTOMATIC</option>
          </select>
          <span className={styles.form_label}>Air conditionig: </span>
          <select className="axes-form" value={Axes} onChange={(e) => setAC(e.target.value)}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <button className={styles.btns} type="submit">Submit</button>
        <button className={styles.btns} onClick={() => setEditMode(!editMode)}>Back</button>
      </form>
    </div>
  );
}
