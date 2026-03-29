import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import App from "./App";
import Introduction from "./Introduction";
// import other pages
// import Survey from "./Survey";
// import Gallery from "./Gallery";
// etc.

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<App />} />
                    <Route path="introduction" element={<Introduction />} />
                    {/* Add routes for your other pages here */}
                    {/* <Route path="survey" element={<Survey />} /> */}
                </Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>
);