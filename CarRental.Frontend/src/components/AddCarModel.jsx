import React, { useState } from 'react';

export default function AddCarModel() {
    const [Manufacturer, setManufacturer] = useState('');
    const [Type, setType] = useState('');
    const [Fuel, setFuel] = useState('');
    const [Seats, setSeats] = useState('');
    const [HPs, setHPs] = useState('');
    const [Axes, setAxes] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:5000/api/AddCarModel', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                Manufacturer,
                Type,
                Fuel,
                Seats,
                HPs,
                Axes
            })
        });
    }

    return (
        <div className="add-model">
            <h2>Add new car model</h2>
            <form onSubmit={handleSubmit} className="add-model-form">
                <input className="manufacturer-form" placeholder="Manufacturer" required onChange={e => setManufacturer(e.target.value)} />
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

                <button className="btn-form" type="submit">Submit</button>
            </form>
        </div>
    );
}