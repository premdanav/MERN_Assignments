import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Logout from "./components/Logout.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import { useSelector } from "react-redux";

const App = () => {
  //check authentication from redux
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(`from app js is auth ${isAuthenticated}`);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route
            path="/register"
            element={isAuthenticated ? <Navigate to="/home" /> : <Register />}
          />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/home" /> : <Login />}
          />
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route
            path="/logout"
            element={isAuthenticated ? <Navigate to="/home" /> : <Logout />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
