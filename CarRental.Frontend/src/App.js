import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Register from "./components/Register";

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
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Dashboard />} />
        </Routes>
        {/* {cars} */}
      </div>
    </div>
  );
}

export default App;
