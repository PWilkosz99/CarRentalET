import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { TbManualGearbox } from 'react-icons/tb';
import { BsSnow } from 'react-icons/bs';
import { GiCarSeat, GiCarDoor } from 'react-icons/gi';
import { RiGasStationFill } from 'react-icons/ri';
import { IoSettings } from 'react-icons/io5';
import styles from './Rent.module.css';
import { useBlob } from '../../contexts/BlobContext';
import { useAuth } from '../../contexts/AuthContext';

export default function Rent(props) {
  const [car, setCars] = useState(props.car);
  const [model, setModel] = useState(props.car.model);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const { getImage } = useBlob();

  const reserveCar = async () => {
    console.log(currentUser);
    if (!currentUser) {
      toast.warn('You must be logged in to reserve a car!', { position: 'bottom-right', theme: 'colored' });
    } else {
      navigate('/rentdetails', {
        state: {
          car, model, startDate: props.startDate, endDate: props.endDate,
        },
      });
    }
  };

  const AC = model.airConditioning ? 'Yes' : 'No';

  return (
    <div className={styles.rentCard}>
      <img src={getImage(model.id)} className={styles.cardImg} alt="selected car card" />
      <span className={styles.mark}>
        {model.manufacturer}
        {' '}
        {model.model}
        {' '}
        {(new Date(car.productionDate)).getFullYear()}
      </span>
      <p className={styles.cost}>
        {car.costPerDay}
        $/day
      </p>
      <div className={styles.carProps}>
        <div className={styles.iconProp}>
          <TbManualGearbox />
          <span className={styles.card_text}>{model.gearbox}</span>
        </div>
        {/* manual or automatic icon */}
        <div className={styles.iconProp}>
          <BsSnow />
          <span className={styles.card_text}>{AC}</span>
        </div>
        <div className={styles.iconProp}>
          <GiCarSeat />
          <span className={styles.card_text}>{model.seats}</span>
        </div>
        <div className={styles.iconProp}>
          <RiGasStationFill />
          <span className={styles.card_text}>{model.fuel}</span>
        </div>
        <div className={styles.iconProp}>
          <IoSettings />
          <span className={styles.card_text}>
            {model.hPs}
            HPs
          </span>
        </div>
      </div>
      <button type="submit" onClick={reserveCar} className={styles.rent_btn}>Rent</button>
    </div>
  );
}
