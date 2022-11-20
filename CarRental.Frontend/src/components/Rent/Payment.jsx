import React, { useState, useRef } from 'react'
import { useLocation } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import { useBlob } from '../../contexts/BlobContext';
import styles from "./Rent.module.css";

export default function Payment(props) {

    const { getImage } = useBlob();
    const { state } = useLocation();
    const { currentUser } = useAuth();

    const cardNumber = useRef();
    const cardName = useRef();
    const cardDate = useRef();
    const cardCvv = useRef();

    const days = useRef(((new Date(state.endDate)).getTime() - (new Date(state.startDate)).getTime()) / (1000 * 3600 * 24));

    const handleSavePayment = async (e) => {
        e.preventDefault();
        if (true) {
            //validation
            const response = await currentUser.getIdToken().then(
                (token) => {
                    return fetch('http://localhost:5000/api/ReserveCar', {
                        method: 'POST',
                        headers: new Headers({
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }),
                        body: JSON.stringify({

                            StartDate: state.startDate,
                            EndDate: state.endDate,

                            VehicleId: state.car.id,

                            Firstname: state.client.firstName,
                            Lastname: state.client.lastName,
                            Phone: state.client.phone,
                            Address: state.client.address,
                            City: state.client.city,
                            Country: state.client.country,
                            PostalCode: state.client.postal,
                            DrivingLicense: state.client.drivingLicense,

                            CardNumber: cardNumber.current.value,
                            CardDate: cardDate.current.value,
                            CVV: cardCvv.current.value,
                            CardOwnerName: cardName.current.value,
                        })
                    });
                }
            );
            console.log(response)
            if (response.status === 201) {
                toast.success("Car reserved successfully", { position: "bottom-right", theme: "colored" });
            }
        }
    }

    return (
        <>
            <div className={styles.details_container}>

                <div className={styles.details_card}>
                    <h1 className={styles.details_title}>Confirm your reservation</h1>
                    <div className={styles.card_left}>
                    <div className={styles.reservation_details_row}>
                            <span className={styles.reservation_label}>Start date: </span><span className={styles.reservation_value}>{state.startDate}</span>
                        </div>
                        <div className={styles.reservation_details_row}>
                            <span className={styles.reservation_label}>End date: </span><span className={styles.reservation_value}>{state.endDate}</span>
                        </div>
                        <div className={styles.reservation_details_row}>
                            <span className={styles.reservation_label}>Duration: </span><span className={styles.reservation_value}>{days.current} days</span>
                        </div>
                        <div className={styles.reservation_details_row}>
                            <span className={styles.reservation_label}>Car: </span><span className={styles.reservation_value}>{state.car.model.manufacturer} {state.car.model.model}</span>
                        </div>
                        <div className={styles.reservation_details_row}>
                            <span className={styles.reservation_label}>Price: </span><span className={styles.reservation_value}>{state.car.costPerDay * days.current} $</span>
                        </div>
                    </div>
                    <div className={styles.card_right}>
                        <div className={styles.car_img}>
                            <img src={getImage(state.car.model.id)} />
                        </div>
                    </div>
                </div>

                <div className={styles.details_card}>
                    <form onSubmit={handleSavePayment}>
                        <div className={styles.formData}>
                            <div className={styles.reservation_data_row_100}>
                                <span className={styles.reservation_label}>Card number: </span>
                                <input type="number" required ref={cardNumber} />
                            </div>
                            <div className={styles.reservation_data_row}>
                                <span className={styles.reservation_label}>Expiration date: </span>
                                <input type="month" required ref={cardDate} />
                            </div>
                            <div className={styles.reservation_data_row}>
                                <span className={styles.reservation_label}>CVV: </span>
                                <input type="text" required ref={cardCvv} />
                            </div>
                            <div className={styles.reservation_data_row_100}>
                                <span className={styles.reservation_label}>Cardholder name: </span>
                                <input type="text" required ref={cardName} />
                            </div>
                            <button className={styles.reserve_btn}>Reserve</button>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
