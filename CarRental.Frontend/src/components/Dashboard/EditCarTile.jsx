import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useBlob } from '../../contexts/BlobContext';
import styles from './Dashboard.module.css';

export default function EditCarTile(props) {
  const [car] = useState(props.car);
  const [carModel] = useState(props.car.model);
  const [editMode, setEditMode] = useState(false);

  const [id] = useState(car.id);
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
      (token) => fetch(`http://localhost:5000/api/VehicleModels/EditCar/${id}`, {
        method: 'POST',
        headers: new Headers({
          Authorization: `Bearer ${token}`,
        }),
        body: JSON.stringify({
          mileage,
          productionDate,
          costPerDay,
          state,
          color,
          notes,
        }),
      }),
    );
    setEditMode(false);
  };

  const removeCar = () => {
    (
      async () => {
        await currentUser.getIdToken().then(
          (token) => fetch(`http://localhost:5000/api/VehicleModels/DeleteCar/${id}`, {
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
          <h2>
            {car.model.manufacturer}
            {' '}
            {car.model.model}
          </h2>
        </div>
        <div className={styles.dashboard_row}>
          <img src={getImage(props.car.id)} className={styles.dashboard_card_img} alt={props.car.manufacturer} />
        </div>
        <div className={styles.dashboard_row_text}>
          <h2 className={styles.edit_row}>
            Cost per day:
            <span className={styles.value}>{costPerDay}</span>
          </h2>
        </div>
        <div className={styles.dashboard_row_text}>
          <h2 className={styles.edit_row}>
            Mileage:
            <span className={styles.value}>
              {mileage}
              km
            </span>
          </h2>
        </div>
        <div className={styles.dashboard_row_text}>
          <h2 className={styles.edit_row}>
            Production date:
            <span className={styles.value}>{new Date(productionDate).toLocaleDateString()}</span>
          </h2>
        </div>
        <div className={styles.dashboard_row_text}>
          <h2 className={styles.edit_row}>
            State:
            <span className={styles.value}>Avaliable</span>
          </h2>
        </div>
        <div className={styles.dashboard_row_text}>
          <h2 className={styles.edit_row}>
            Type:
            <span className={styles.value}>Avaliable</span>
          </h2>
        </div>
        <div className={styles.dashboard_row_text}>
          <h2 className={styles.edit_row}>
            Fuel:
            <span className={styles.value}>{carModel.fuel}</span>
          </h2>
        </div>
        <div className={styles.dashboard_row_text}>
          <h2 className={styles.edit_row}>
            Seats:
            <span className={styles.value}>{carModel.seats}</span>
          </h2>
        </div>
        <div className={styles.dashboard_row_text}>
          <h2 className={styles.edit_row}>
            Power:
            <span className={styles.value}>
              {carModel.hPs}
              {' '}
              hps
            </span>
          </h2>
        </div>
        <div className={styles.dashboard_row_text}>
          <h2 className={styles.edit_row}>
            Axes:
            <span className={styles.value}>{carModel.axes}</span>
          </h2>
        </div>
        {/* <div className={styles.dashboard_row_text}>
                    <h2>Color: {color}</h2>
                </div> */}
        <div className={styles.dashboard_row_text}>
          <h2 className={styles.edit_row}>
            Notes:
            <span className={styles.value}>{notes}</span>
          </h2>
        </div>
        <button className={styles.btns} onClick={() => setEditMode(true)}>Edit</button>
        <button className={styles.btns} onClick={removeCar}>Remove</button>
      </div>

    );
  }
  return (
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
  );
}
