import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home/index";
import LoginPage from "./pages/Login/index";
import RegisterPage from "./pages/Register";
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
};
