import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import AddCar from "./components/Dashboard/AddCar";
import AddCarModel from "./components/Dashboard/AddCarModel";
import EditCar from "./components/Dashboard/EditCar";
import EditCarModel from "./components/Dashboard/EditCarModel";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Rent from "./components/Rent/Rent";
import RentDetails from "./components/Rent/RentDetails";
import Payment from "./components/Rent/Payment";
import Reservations from './components/Reservations/Reservations';
import { AuthProvider } from './contexts/AuthContext'
import { BlobProvider } from './contexts/BlobContext';

function App() {

  const [name, setName] = useState();

  return (
    <>
      <AuthProvider>
        <BlobProvider>
          <div className="App">
            <Navbar />
            <div className="page-content">
              <Routes>
                <Route exact path="/" element={<Home name={name} />} />
                <Route path="/rent" element={<Rent />} />
                <Route path="/rentdetails" element={<RentDetails />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login name={name} setName={setName} />} />
                <Route path="/addcar" element={<AddCar />} />
                <Route path="/addcarmodel" element={<AddCarModel />} />
                <Route path="/editcar" element={<EditCar />} />
                <Route path="/editcarmodel" element={<EditCarModel />} />
                {/* About */}
              </Routes>
              <Footer />
            </div>
          </div>
        </BlobProvider>
      </AuthProvider>
    </>
  );
}

export default App;
