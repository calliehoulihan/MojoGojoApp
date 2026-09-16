import React from 'react';
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Explore from "./pages/explore";
import Itinerary from "./pages/itinerary";
import Expenses from "./pages/expenses";
import '@fontsource/roboto/300.css';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/expenses" element={<Expenses />} />
        </Routes>
    </>
  );
}

export default App;
