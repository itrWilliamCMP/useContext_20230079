import React from "react";
import "../styles/Dashboard.css";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

// Dashboard.jsx

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    if (logOut()) {
      navigate("/");
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1 className="dashboard-title">¡Bienvenido al Dashboard!</h1>
        <p className="dashboard-user">
          Hola, <span>{user || "Usuario logueado"}</span>
        </p>
        <button className="dashboard-button" onClick={handleLogout}>
          Cerrar sesion
        </button>
      </div>
    </div>
  );
};

export default Dashboard;