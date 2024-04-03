// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Notify from "./pages/Notify";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/notify" element={<Notify />} />
      </Routes>
    </div>
  );
}

export default App;
