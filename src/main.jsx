import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import App from "./App";
import Survey from "./Survey";
import Instructions from "./Instructions";
import Highlight from "./Highlight";
import WebsiteEvaluations from "./WebsiteEvaluations";
import IntroForm from "./IntroForm";
import Contract from "./Contract";
import Inventory from "./Inventory";
import Gallery from "./Gallery";
import './App.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="survey" element={<Survey />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="instructions" element={<Instructions />} />
          <Route path="highlight" element={<Highlight />} />
          <Route path="website-evaluations" element={<WebsiteEvaluations />} />
          <Route path="intro-form" element={<IntroForm />} />
          <Route path="contract" element={<Contract />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);