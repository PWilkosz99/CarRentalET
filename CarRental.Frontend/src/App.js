import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {

  const [data, setData] = useState(null);
  const [name, setName] = useState();

  useEffect(() => {
    (
      async () => {
        const responde = await fetch('http://localhost:5000/auth/user', {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
        });

        const content = await responde.json();
        setName(content.name);
        //console.log(content.name)

      }
    )();
  });


  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch('https://localhost:5001/api/CarRental/GetCars');
  //     const data = await res.json();
  //     setData(data);
  //     console.log(data);
  //   }
  //   getData();
  // }, []);

  var cars = data?.map((car) => {
    return (
      <h1>{car.mileage}</h1>
    )
  })

  return (
    <div className="App">
      <Navbar name={name}/>
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home name={name}/>} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* {cars} */}
      </div>
    </div>
  );
}

export default App;
