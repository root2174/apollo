import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import FriendFinder from './components/FriendFinder/FriendFinder';

function App() {
  return (
    <div className="App">
      <Router>
        <FriendFinder />
      </Router>
    </div>
  );
}

export default App;
