// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserPage from "./pages/UserPage";
import RolePage from "./pages/RolePage";
import PermissionPage from "./pages/PermissionPage";
import HomePage from "./pages/HomePage";
import './styles/global.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<UserPage />} />
      <Route path="/roles" element={<RolePage />} />
      <Route path="/permissions" element={<PermissionPage />} />
    </Routes>
  </Router>
);

export default App;
