import React, { useState, useEffect } from 'react';
import { useBlob } from '../../contexts/BlobContext';
import styles from './Dashboard.module.css';

export default function AddCarTile(props) {

    const { getImage } = useBlob();

    return (
        <div className={styles.dashboard_card}>
            <div className={styles.dashboard_title}>
                <h1>Samochodzik taki i taki</h1>
            </div>
            <div className={styles.dashboard_row}>
                <img src={getImage(props.car.id)} className={styles.dashboard_card_img} alt={props.car.manufacturer} />
            </div>
            <div className={styles.dashboard_row_text}>
                <h2>Manufacturer: dadadada</h2>
            </div>
            <div className={styles.dashboard_row_text}>
                <h2>Manufacturer: dadadada</h2>
            </div>
            <div className={styles.dashboard_row_text}>
                <h2>Manufacturer: dadadada</h2>
            </div>
            <div className={styles.dashboard_row_text}>
                <h2>Manufacturer: dadadada</h2>
            </div>
            <div className={styles.dashboard_row_text}>
                <h2>Manufacturer: dadadada</h2>
            </div>
            <div className={styles.dashboard_row_text}>
                <h2>Manufacturer: dadadada</h2>
            </div>
            <div className={styles.dashboard_row_text}>
                <h2>Manufacturer: dadadada</h2>
            </div>
            <div className={styles.dashboard_row_text}>
                <h2>Manufacturer: dadadada</h2>
            </div>
            {/* <h3>({props.car.id}) {props.car.manufacturer} --- {props.car.model} --- {props.car.type} --- {props.car.fuel} --- {props.car.seats} --- {props.car.axes} --- {props.car.hPs}</h3> */}
            <button className={styles.btn} onClick={() => props.handleChoice(props.car.id)}>Select</button>
        </div>
    );
}