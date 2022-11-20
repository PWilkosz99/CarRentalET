import React from 'react'
import { useLocation } from "react-router-dom";
import styles from "./Rent"

export default function Payment(props) {
    const { state } = useLocation();

    console.log(state)
    return (
        <>
            <h1>Payment</h1>
            <h2>Card number: </h2>
            <input type="number" />
            <h2>Expiration date: </h2>
            <h2>CVV: </h2>
            <input type="number" />
            <h2>Cardholder name: </h2>
            <input type="text" />
        </>
    )
}
