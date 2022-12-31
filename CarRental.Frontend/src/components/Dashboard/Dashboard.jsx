import React from 'react';
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
