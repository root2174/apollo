import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
