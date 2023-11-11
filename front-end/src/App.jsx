import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Billing from './Components/Billing';
import Login from './Components/Login';
import Inventory from './Components/Inventory';
import Transaction from './Components/Transaction';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/billing" element={<Billing/>} />
        <Route path="/transaction" element={<Transaction/>} />
        <Route path="/inventory" element={<Inventory/>} />
      </Routes>
      </div>

    </BrowserRouter>
  );
};

export default App;