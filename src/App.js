import React from "react";
import './App.css';
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage"; // Make sure you import SearchPage
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          {/* Route for Search Page */}
          <Route path="/search" element={<SearchPage />} />

          {/* Route for Home Page */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
