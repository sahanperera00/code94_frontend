import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import {
  loginSuccess,
  loginFailure,
} from "../../services/actions/authActions.js";

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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#c2c2c2]"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#c2c2c2]"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
