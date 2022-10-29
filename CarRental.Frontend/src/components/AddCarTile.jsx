import React, { useState, useEffect } from 'react';

export default function AddCarTile(props) {

    return (
        <div className="add-car">
            <hr />
            <h3>({props.car.id}) {props.car.manufacturer} --- {props.car.type} --- {props.car.fuel} --- {props.car.seats} --- {props.car.axes} --- {props.car.hPs}</h3>
            <button onClick={() => props.handleChoice(props.car.id)}>Select</button>
        </div>
    );
}