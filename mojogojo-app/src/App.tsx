import React from 'react';
import headerBackground from './jujutsu-kaisen-gojo-geto.avif';
import './App.css';

function App() {
  return (
    <div className="dashboard">
      <div className="header">
        <img src={headerBackground} alt="App Logo" />
          <div className="header-content">
            <h1>Japan Trip</h1>
    
            <p> Dates</p>
          </div>

        <div className="header sidebar">
          <ul>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="">|</a></li>
            <li><a href="#users">Itinerary</a></li>
            <li><a href="">|</a></li>
            <li><a href="#reports">Explore</a></li>
            <li><a href="">|</a></li>
            <li><a href="#settings">Expenses</a></li>
          </ul>
        </div>
      </div>

      <main className="content">
          <div className="card">Card 1</div>
          <div className="card">Card 2</div>
          <div className="card">Card 3</div>
          <div className="card">Card 4</div>
      </main>
    </div>
  );
}

export default App;
