// src/App.jsx

import React from 'react';
import './App.css';
// import Header from './components/Header/Header';  // Import Header component
import { Routes, Route, Outlet } from 'react-router-dom';


const App = () => {
  
  return (
      <div className="app-container">
        <div className="header-container">
          {/* <Header /> */}
        </div>
        <div className="main-container">
          <div className="sidenav-container"></div>
          <div className="app-content">
            <Outlet />
          </div>
        </div>
      </div>

  );
};

export default App;
