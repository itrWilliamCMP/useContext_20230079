import React from "react";
import "../styles/Profile.css";
import invensibleCanibal from "../Img/invensible_canibal.jpg";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src={invensibleCanibal}
          alt="Avatar"
          className="profile-avatar"
        />
        <h2 className="profile-name">AdminX</h2>

        <div className="profile-info">
          <p>
            <strong>Email:</strong> William@pixelon.com
          </p>
          <p>
            <strong>Rol:</strong> Administrador
          </p>
          <p>
            <strong>Miembro desde:</strong> Enero 2023
          </p>
        </div>

        <div className="profile-actions">
          <button>Editar Perfil</button>
          <button>Cerrar Sesión</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
