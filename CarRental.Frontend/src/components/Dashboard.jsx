import React, { useState } from 'react';
import AddCarModel from './AddCarModel';
import EditCarModel from './EditCarModel';

export default function Dashboard() {
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
    <>
      {/* //Add car
      //Remove car
      //Edit car */}
      <AddCarModel />
      <EditCarModel />
      {/* //Remove model
      //Edit model
      //Edit users  */}
      <h2>Dashboard</h2>
    </>

  );
}