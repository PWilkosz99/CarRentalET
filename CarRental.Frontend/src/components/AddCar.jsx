import React, { useState, useEffect } from 'react';
import AddCarTile from './AddCarTile';

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

    const [image, setImage] = useState();

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
        console.log(productionDate)
        await fetch('http://localhost:5000/api/AddCar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
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

        setAddingMode(false);
    }

    const sendImage = (e) =>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', image);
        fetch('http://localhost:5000/api/Image', {
            method: 'POST',
            body: formData
        })
    }

    const carsModels = cars?.map((car) => <AddCarTile key={car.id} car={car} handleChoice={handleChoice} />);

    if (!addingMode) {
        return (
            <div className="add-car">
                <form onSubmit={sendImage}>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                    <button type="submit">Send</button>
                </form>
                <h2>Add car</h2>
                <h3>Select car model</h3>
                {carsModels}
            </div>
        );
    } else {
        return (
            <>
                <form onSubmit={addCar}>
                    <input type="number" placeholder="Milage" onChange={(e) => setMileage(e.target.value)} />
                    <input type="month" placeholder="Production date" onChange={(e) => setProductionDate(() => (new Date(e.target.value)))} />
                    <input type="number" placeholder="Cost per day" onChange={(e) => setcostPerDay(e.target.value)} />
                    <input type="text" placeholder="Car state" onChange={(e) => setState(e.target.value)} />
                    <input type="color" placeholder="Color" onChange={(e) => setColor(e.target.value)} />
                    <input type="text" placeholder="Notes" onChange={(e) => setNotes(e.target.value)} />
                    <button type="submit">Back</button>
                </form>

            </>
        )
    }
}