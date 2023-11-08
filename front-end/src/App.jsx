import React from 'react';
import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';
import Login from './Login';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav style ={{padding:'20px'}}>
          <NavLink style={{margin:'10px'}} to="/">Login</NavLink>
          <NavLink style={{margin:'10px'}} to="/bill">Billing</NavLink>
          <NavLink style={{margin:'10px'}} to="/history">Transaction History</NavLink>
          <NavLink style={{margin:'10px'}} to="/inventory">Inventory</NavLink>
        </nav>

      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/bill" element={<Billing/>} />
        <Route path="/history" element={<Transactions/>} />
        <Route path="/inventory" element={<Inventory/>} />
      </Routes>
      </div>

    </BrowserRouter>
  );
};


const Billing = () => {
  return <h1>Billing</h1>;
};

const Transactions = () => {
  return <h1>Transactions</h1>;
};

const Inventory = () => {
  return <h1>Inventory</h1>;
};
export default App;
