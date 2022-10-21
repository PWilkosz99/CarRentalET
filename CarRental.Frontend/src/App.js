import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await fetch('https://localhost:5001/api/CarRental/GetCars');
      const data = await res.json();
      setData(data);
      console.log(data);
    }
    getData();
  }, []);

  var cars = data?.map((car) => {
    return (
      <h1>{car.mileage}</h1>
    )
  })

  return (
    <div className="App">
      {cars}
    </div>
  );
}

export default App;
