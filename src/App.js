import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import URLShortener from "./URLShortener";
import QRCodeGenerator from "./QRCodeGenerator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/url-shortener" element={<URLShortener />} />
        <Route path="/qr-generator" element={<QRCodeGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
