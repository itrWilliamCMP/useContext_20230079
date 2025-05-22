import "./App.css";
import { AuthProvider } from "./Context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Information from "./Pages/Informacion";
import Dashboard from "./Pages/dashboard";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
               <Route path="/information" element={<Information />} />
            </Route>
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;