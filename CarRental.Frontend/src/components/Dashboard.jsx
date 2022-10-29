import React, { useState } from 'react';
import AddCar from './AddCar';
import AddCarModel from './AddCarModel';
import EditCarModel from './EditCarModel';

export default function Dashboard() {

  return (
    <>
      <AddCar />
      {/* ///Remove car
      //Edit car */}
      <AddCarModel />
      <EditCarModel />
      {/* //Edit users   */}
      <h2>Dashboard</h2>
    </>

  );
}