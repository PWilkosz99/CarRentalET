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
import { AuthProvider } from './contexts/AuthContext'

function App() {

  const [name, setName] = useState();

  return (
    <>
      <AuthProvider>
        <div className="App">
          <Navbar name={name} setName={setName} />
          <div className="page-content">
            <Routes>
              <Route exact path="/" element={<Home name={name} />} />
              <Route path="/rent" element={<Rent />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login name={name} setName={setName} />} />
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
