
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login'; // Import your Login component

function Navbar() {
  return (
    <Router>
      <div>
      hi
        <Routes>
          <Route path="/" component={Login} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default Navbar;

