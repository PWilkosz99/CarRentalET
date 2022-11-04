import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Rent from "./components/Rent";
import Reservations from './components/Reservations';

function App() {

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
      }
    )();
  });

  return (
    <div className="App">
      <Navbar name={name} setName={setName} />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home name={name} />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login name={name} setName={setName} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
