import React, { useState } from 'react';
import AddCar from './AddCar';
import AddCarModel from './AddCarModel';
import EditCarModel from './EditCarModel';
import EditCar from './EditCar';
import styles from './Dashboard.module.css';
import { Link } from "react-router-dom";

export default function Dashboard() {

  return (
    <>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <div className={styles.tile}><Link to="/dashboard"><span className={styles.link}>Add new car</span></Link></div>
            </li>
            <li>
            <div className={styles.tile}><Link to="/dashboard"><span className={styles.link}>Edit car</span></Link></div>
            </li>
            <li>
            <div className={styles.tile}><Link to="/dashboard"><span className={styles.link}>Add car model</span></Link></div>
            </li>
            <li>
            <div className={styles.tile}><Link to="/dashboard"><span className={styles.link}>Edit car model</span></Link></div>
            </li>
          </ul>
        </nav>
        <div className={styles.content}>
          content
          content
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