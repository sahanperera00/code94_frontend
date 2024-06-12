import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Login from "../pages/Login";
import AddProduct from "../pages/AddProductPage";
import EditProduct from "../pages/EditProductPage";
import FavoriteProducts from "../pages/FavoriteProductsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit" element={<EditProduct />} />
      <Route path="/favorites" element={<FavoriteProducts />} />
    </Routes>
  );
}
