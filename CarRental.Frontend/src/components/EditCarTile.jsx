import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

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
            <div className="car-tile">
                <hr />
                <h2>{carModel.manufacturer} - {carModel.model} - {carModel.type} - {carModel.fuel} - {carModel.seats} - {carModel.hPs} - {carModel.axes}</h2>
                <h2>{mileage} - {String(productionDate)} - {costPerDay} - {state} - {color} - {notes}</h2>
                <button onClick={() => setEditMode(true)}>Edit</button>
                <button onClick={removeCar}>Remove</button>
            </div>
        );
    } else {
        return (
            <>
                <hr />
                <form onSubmit={editCar}>
                    <input type="number" placeholder="Milage" value={mileage} onChange={(e) => setMileage(e.target.value)} />
                    <input type="month" placeholder="Production date" onChange={(e) => setProductionDate(() => (new Date(e.target.value)))} />
                    <input type="number" placeholder="Cost per day" value={costPerDay} onChange={(e) => setcostPerDay(e.target.value)} />
                    <input type="text" placeholder="Car state" value={state} onChange={(e) => setState(e.target.value)} />
                    <input type="color" placeholder="Color" value={color} onChange={(e) => setColor(e.target.value)} />
                    <input type="text" placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
                    <button type="submit">Save</button>
                </form>
            </>
        )
    }
}