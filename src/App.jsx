import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home/index";
import LoginPage from "./pages/Login/index";
import RegisterPage from "./pages/Register";
import DashboardPage from "./pages/Dashboard";
import Products from "./pages/Dashboard/components/Products";
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
};
