import React, { useState } from 'react';
import AddCar from './AddCar';
import AddCarModel from './AddCarModel';
import EditCarModel from './EditCarModel';
import EditCar from './EditCar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from './Dashboard.module.css';
import { Link } from "react-router-dom";
import SideMenu from './SideMenu';

export default function Dashboard() {

  return (
    <>
      <div className={styles.container}>
        <SideMenu />
        <div className={styles.content}>
          aaa
        </div>
      </div>
      {/* <EditCar />
      <AddCar />

      <AddCarModel />
      <EditCarModel />
      <h2>Dashboard</h2> */}
    </>

  );
}