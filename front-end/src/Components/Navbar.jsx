import React from "react";
import {useNavigate} from 'react-router-dom'
import "./Navbar.css"; 

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ background: "white" }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto item">
            <li className="nav-item">
              <button
                className="nav-link"
                style={{
                  color: "black",
                  paddingRight: "30px",
                  fontWeight: "600",
                }}
                onClick={()=>navigate('/')}
              >
                Login
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                style={{
                  color: "black",
                  paddingRight: "30px",
                  fontWeight: "600",
                }}
                onClick={()=>navigate('/register')}
              >
                Register
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                style={{
                  color: "black",
                  paddingRight: "30px",
                  fontWeight: "600",
                }}
                onClick={()=>navigate('/billing')}
              >
                Billing
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                style={{
                  color: "black",
                  paddingRight: "30px",
                  fontWeight: "600",
                }}
                onClick={()=>navigate('/transaction')}
              >
                Transaction
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                style={{
                  color: "black",
                  paddingRight: "30px",
                  fontWeight: "600",
                }}
                onClick={()=>navigate('/inventory')}
              >
                Inventory
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;