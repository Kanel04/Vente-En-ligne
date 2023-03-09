import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/About/index";
import ChoixPage from "./pages/Choix";
import CoursePage from "./pages/Cours";
import DonneurPage from "./pages/Donneur";
import EnseignantPage from "./pages/Enseignant";
import ErrorPage from "./pages/Error";
import EtudiantPage from "./pages/Etudiant";
import DasbordPage from "./pages/EtudiantDasbord";
import HomePage from "./pages/Home/index";
import InvestisseurPage from "./pages/Investisseur";
import LoginPage from "./pages/Login";


export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/choix" element={<ChoixPage />}></Route>
        <Route path="/donneur" element={<DonneurPage />}></Route>
        <Route path="/etudiant" element={<EtudiantPage />}></Route>
        <Route path="/investisseur" element={<InvestisseurPage />}></Route>
        <Route path="/etudiantdasbord" element={<DasbordPage />}></Route>
        <Route path="/enseignant" element={<EnseignantPage />}></Route>
        <Route path="/cours" element={<CoursePage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
};
