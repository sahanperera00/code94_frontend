import { useEffect } from "react";
import Header from "./Layouts/Header";
import "./assets/styles/App.css";
import AppRoutes from "./routes";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function App() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}
