import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useBlob } from '../../contexts/BlobContext';

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
        <div className="add-model">
            <h2>Add new car model</h2>
            <form onSubmit={handleSubmit} className="add-model-form">
                <input className="manufacturer-form" placeholder="Manufacturer" required onChange={e => setManufacturer(e.target.value)} />
                <input className="model-form" placeholder="Model" required onChange={e => setModel(e.target.value)} />
                <select className="type-form" value={Type} onChange={e => setType(e.target.value)}>
                    <option value="Sedan">Sedan</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Coupe">Coupe</option>
                </select>
                <select className="fuel-form" value={Fuel} onChange={e => setFuel(e.target.value)}>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Electric">Electric</option>
                </select>
                <input type="number" className="seats-form" placeholder="Seats" required onChange={e => setSeats(e.target.value)} />
                <input type="number" className="hps-form" placeholder="HPs" required onChange={e => setHPs(e.target.value)} />
                <select className="axes-form" value={Axes} onChange={e => setAxes(e.target.value)}>
                    <option value="FWD">FWD</option>
                    <option value="RWD">RWD</option>
                    <option value="AWD">AWD</option>
                </select>
                <input type="file" placeholder="Image" required onChange={(e) => setImage(e.target.files[0])} />
                <button className="btn-form" type="submit">Submit</button>
            </form>
        </div>
    );
}