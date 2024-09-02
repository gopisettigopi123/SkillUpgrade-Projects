import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login"; // Adjust the path according to your project structure
import Dashboard from "./Dashboard"; // Adjust the path according to your project structure
import ProtectedRoute from "./ProtectedRoute"; // Adjust the path according to your project structure
import './styles.css';


function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the root path ("/") */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Route for the login page */}
        <Route path="/login" element={<Login />} />

        {/* Route for the dashboard, protected by authentication */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Fallback route for any undefined paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
