import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import {
  loginSuccess,
  loginFailure,
} from "../../services/actions/authActions.js";
import Button from "../../components/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/user/login", { email, password });
      const { token, user } = response.data;

      localStorage.setItem("jwtToken", token);

      dispatch(loginSuccess(user.userId));

      navigate("/main");
    } catch (error) {
      console.error("Login failed:", error);
      dispatch(loginFailure(error.message));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/main");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp > currentTime) {
        dispatch(loginSuccess(decodedToken.userId));
        navigate("/main");
      } else {
        localStorage.removeItem("jwtToken");
      }
    }
  }, [dispatch, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white text-[#162427] p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block font-medium mb-2" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <Button buttonClass="primary" type="submit" className="w-full">
            Login
          </Button>
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <span
              className="text-blue-500 hover:text-blue-700 cursor-pointer"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
