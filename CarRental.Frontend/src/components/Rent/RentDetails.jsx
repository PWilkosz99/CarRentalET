import React, { useRef } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Rent.module.css";

export default function RentDetails() {

    const { state } = useLocation();
    const navigate = useNavigate();

    const firstname = useRef();
    const lastname = useRef();
    const phone = useRef();
    const address = useRef();
    const city = useRef();
    const country = useRef();
    const postal = useRef();
    const drivingLicense = useRef();

    const handleSave = (e) => {
        e.preventDefault();

        const client = {
            firstName: firstname.current.value,
            lastName: lastname.current.value,
            phone: phone.current.value,
            address: address.current.value,
            city: city.current.value,
            country: country.current.value,
            postal: postal.current.value,
            drivingLicense: drivingLicense.current.value
        }

        navigate("/payment", { state: { car: state.car, client: client, startDate: state.startDate, endDate: state.endDate } });

        console.log(client)
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
                    <h1 className={styles.details_title}>Provide your data</h1>
                    <form onSubmit={handleSave}>
                        <div className={styles.formData}>
                            <div className={styles.reservation_data_row}>
                                <span className={styles.reservation_label}>Firstname: </span>
                                <input type="text" required ref={firstname} />
                            </div>
                            <div className={styles.reservation_data_row}>
                                <span className={styles.reservation_label}>Lastname: </span>
                                <input type="text" required ref={lastname} />
                            </div>
                            <div className={styles.reservation_data_row}>
                                <span className={styles.reservation_label}>Phone: </span>
                                <input type="phone" required ref={phone} />
                            </div>
                            <div className={styles.reservation_data_row}>
                                <span className={styles.reservation_label}>Adress: </span>
                                <input type="text" required ref={address} />
                            </div>
                            <div className={styles.reservation_data_row}>
                                <span className={styles.reservation_label}>City: </span>
                                <input type="text" required ref={city} />
                            </div>
                            <div className={styles.reservation_data_row}>
                                <span className={styles.reservation_label}>Country: </span>
                                <input type="text" required ref={country} />
                            </div>
                            <div className={styles.reservation_data_row}>
                                <span className={styles.reservation_label}>Postal code: </span>
                                <input type="text" required ref={postal} />
                            </div>
                            <div className={styles.reservation_data_row}>
                                <span className={styles.reservation_label}>Driving license: </span>
                                <input type="number" required ref={drivingLicense} />
                            </div>
                            <button className={styles.reserve_btn}>Next</button>
                        </div>
                    </form>
                </div >
            </div>
        </>
    )
}
