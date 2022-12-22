import React, { useState } from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import AddCar from './AddCar';
import AddCarModel from './AddCarModel';
import EditCarModel from './EditCarModel';
import EditCar from './EditCar';
import styles from './Dashboard.module.css';

import SideMenu from './SideMenu';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <SideMenu />
      <div className={styles.content} />
    </div>

  );
}
