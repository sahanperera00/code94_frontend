import React, { useState } from "react";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginSuccess,
  loginFailure,
} from "../../services/actions/authActions.js";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth", { username, password });
      const { token, user } = response.data;

      localStorage.setItem("jwtToken", token);

      dispatch(loginSuccess(user));

      navigate("/main");
    } catch (error) {
      console.error("Login failed:", error);
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
