import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useBlob } from '../../contexts/BlobContext';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import styles from './Rent.module.css';

import { TbManualGearbox } from "react-icons/tb";
import { BsSnow } from "react-icons/bs";
import { GiCarSeat, GiCarDoor } from "react-icons/gi";

export default function Rent(props) {

    const [car, setCars] = useState(props.car);
    const [model, setModel] = useState(props.car.model);
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const { getImage } = useBlob();

    const reserveCar = async () => {
        console.log(currentUser);
        if (!currentUser) {
            toast.warn("You must be logged in to reserve a car!", { position: "bottom-right", theme: "colored" });
        } else {
            navigate('/rentdetails', { state: { car, model, startDate: props.startDate, endDate: props.endDate } });
        }
    }


    return (
        <>
            <div className={styles.rentCard}>
                <img src={getImage(model.id)} className={styles.cardImg} />
                <span className={styles.mark}>{model.manufacturer} {model.model} {(new Date(car.productionDate)).getFullYear()}</span>
                <p>{car.costPerDay}$/day</p>
                <div className={styles.carProps}>
                    <div className={styles.iconProp}><TbManualGearbox />10</div>
                    <div className={styles.iconProp}><BsSnow />10</div>
                    <div className={styles.iconProp}><GiCarSeat />10</div>
                    <div className={styles.iconProp}><GiCarDoor />10</div>
                </div>
                <button onClick={reserveCar} className={styles.rent_btn}>Rent</button>
            </div>
        </>
    )
}
