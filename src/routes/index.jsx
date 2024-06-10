import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
