import React, { useState, useEffect } from 'react';
import { useBlob } from '../contexts/BlobContext';

export default function AddCarTile(props) {

    const { getImage } = useBlob();

    return (
        <div className="add-car">
            <hr />
            <img src={getImage(props.car.id)} className="car-image" alt={props.car.manufacturer} />
            <h3>({props.car.id}) {props.car.manufacturer} --- {props.car.model} --- {props.car.type} --- {props.car.fuel} --- {props.car.seats} --- {props.car.axes} --- {props.car.hPs}</h3>
            <button onClick={() => props.handleChoice(props.car.id)}>Select</button>
        </div>
    );
}