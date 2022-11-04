import React, { useState, useEffect } from 'react';

export default function AddCarTile(props) {

    return (
        <div className="add-car">
            <hr />
            <img src={`/Images/${props.car.id}.jpg`} className="car-image" alt={props.car.manufacturer} />
            <h3>({props.car.id}) {props.car.manufacturer} --- {props.car.model} --- {props.car.type} --- {props.car.fuel} --- {props.car.seats} --- {props.car.axes} --- {props.car.hPs}</h3>
            <button onClick={() => props.handleChoice(props.car.id)}>Select</button>
        </div>
    );
}