import React from "react";
import { Navigate, Outlet} from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = () => {
    const { isLoggedIn } = useAuth();
    //Si el usuario no está logueado, lo redirigimos a la página de inicio
    return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;