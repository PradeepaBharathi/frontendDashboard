import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { Outlet, useNavigate } from "react-router";
import './nav.css'


function NavBar() {
  const nav = useNavigate()
  
  const handleLogout = () => {
    nav("/login")
    localStorage.removeItem("token")
    localStorage.removeItem("name")
  }
   const handleSelectChange = (event) => {
     nav(`/${event.target.value}`);
   };

  return (
    <div className="header">
      <div>
        <AppBar className="app-bar">
          <Toolbar className='tool'>
            <div className="left">
              <Link to="dashboard">Home</Link>
              <Link to="graph">Graph</Link>
            </div>
            <div className="right">
              <input type="search" className="srch" />
              <button>Search</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div class="nav-bar-small">
        <div class="menu">
          <select name="Menu" id="Menu" onChange={handleSelectChange}>
            <option value="">Menu</option>
            <option value="dashboard">Home</option>
            <option value="graph">Graph</option>
            <option value="login">Logout</option>
          </select>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default NavBar;
