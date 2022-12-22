import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';

export default function SideMenu() {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <div className={styles.tile}><Link to="/addcar"><span className={styles.link}>Add new car</span></Link></div>
        </li>
        <li>
          <div className={styles.tile}><Link to="/editcar"><span className={styles.link}>Edit car</span></Link></div>
        </li>
        <li>
          <div className={styles.tile}><Link to="/addcarmodel"><span className={styles.link}>Add car model</span></Link></div>
        </li>
        <li>
          <div className={styles.tile}><Link to="/editcarmodel"><span className={styles.link}>Edit car model</span></Link></div>
        </li>
      </ul>
    </nav>
  );
}
