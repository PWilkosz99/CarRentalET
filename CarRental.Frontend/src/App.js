import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    fetch(`https://localhost:5001/api/CarRental/GetCars`)
      .then((response) => console.log(response));
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
