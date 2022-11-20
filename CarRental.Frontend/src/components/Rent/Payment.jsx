import React, { useState, useRef } from 'react'
import { useLocation } from "react-router-dom";
import styles from "./Rent.module.css";

export default function Payment(props) {
    const { state } = useLocation();

    const cardNumber = useRef();
    const cardName = useRef();
    const cardDate = useRef();
    const cardCvv = useRef();

    const handleSavePayment = (e) => {
        console.log(cardNumber.current.value)
        console.log(cardName.current.value)
        console.log(cardDate.current.value)
        console.log(cardCvv.current.value)

        e.preventDefault();
    }

    console.log(state)

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
                            <span className={styles.reservation_label}>Duration: </span><span className={styles.reservation_value}>10 days</span>
                        </div>
                        <div className={styles.reservation_details_row}>
                            <span className={styles.reservation_label}>Car: </span><span className={styles.reservation_value}>value</span>
                        </div>
                        <div className={styles.reservation_details_row}>
                            <span className={styles.reservation_label}>Price: </span><span className={styles.reservation_value}>value $</span>
                        </div>
                    </div>
                    <div className={styles.card_right}>
                        <div className={styles.car_img}>
                            <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
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
            </div>
        </>
    )
}
