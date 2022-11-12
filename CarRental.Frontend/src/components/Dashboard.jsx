import React, { useState } from 'react';
import AddCar from './AddCar';
import AddCarModel from './AddCarModel';
import EditCarModel from './EditCarModel';
import EditCar from './EditCar';

export default function Dashboard() {

  return (
    <>
      <EditCar />
      <AddCar />

      <AddCarModel />
      <EditCarModel />
      <h2>Dashboard</h2>
    </>

  );
}