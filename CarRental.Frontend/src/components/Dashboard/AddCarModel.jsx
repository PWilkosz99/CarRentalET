import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useBlob } from '../../contexts/BlobContext';
import styles from './Dashboard.module.css';
import SideMenu from './SideMenu';

export default function AddCarModel() {
  const [Manufacturer, setManufacturer] = useState('');
  const [Model, setModel] = useState('');
  const [Type, setType] = useState('Sedan');
  const [Fuel, setFuel] = useState('Petrol');
  const [Seats, setSeats] = useState('');
  const [HPs, setHPs] = useState('');
  const [Axes, setAxes] = useState('FWD');
  const [AC, setAC] = useState('false');
  const [Gearbox, setGearbox] = useState('false');

  const [image, setImage] = useState();
  const { currentUser } = useAuth();
  const { saveImage } = useBlob();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await currentUser.getIdToken().then(
      (token) => fetch('http://localhost:5000/api/VehicleModels/AddCarModel', {
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
          AC,
          Gearbox,
        }),
      }),
    );
    if (response.ok) {
      const id = await response.json();
      saveImage(id, image);
    }
  };

  return (
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
              <input placeholder="Manufacturer" required onChange={(e) => setManufacturer(e.target.value)} />
            </div>
            <div className={styles.form_row}>
              <span className={styles.form_label}>Model: </span>
              <input placeholder="Model" required onChange={(e) => setModel(e.target.value)} />
            </div>
            <div className={styles.form_row}>
              <span className={styles.form_label}>Type: </span>
              <select value={Type} onChange={(e) => setType(e.target.value)}>
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
              <select value={Fuel} onChange={(e) => setFuel(e.target.value)}>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Electric">Electric</option>
              </select>
            </div>
            <div className={styles.form_row}>
              <span className={styles.form_label}>Seats: </span>
              <input type="number" placeholder="Seats" required onChange={(e) => setSeats(e.target.value)} />
            </div>
            <div className={styles.form_row}>
              <span className={styles.form_label}>HPs: </span>
              <input type="number" placeholder="HPs" required onChange={(e) => setHPs(e.target.value)} />
            </div>
            <div className={styles.form_row}>
              <span className={styles.form_label}>Axes: </span>
              <select value={Axes} onChange={(e) => setAxes(e.target.value)}>
                <option value="FWD">FWD</option>
                <option value="RWD">RWD</option>
                <option value="AWD">AWD</option>
              </select>
            </div>
            <div className={styles.form_row}>
              <span className={styles.form_label}>Air conditioning: </span>
              <select value={AC} onChange={(e) => setAC(e.target.value)}>
                <option value="false">NO</option>
                <option value="true">YES</option>
              </select>
            </div>
            <div className={styles.form_row}>
              <span className={styles.form_label}>Gearbox: </span>
              <select value={Gearbox} onChange={(e) => setGearbox(e.target.value)}>
                <option value="Manual">MANUAL</option>
                <option value="Automatic">AUTOMATIC</option>
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
  );
}
