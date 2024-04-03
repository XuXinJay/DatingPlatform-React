// import { useState } from "react";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
