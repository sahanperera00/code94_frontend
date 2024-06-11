import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../services/actions/authActions.js";

export default function Dropdown({ show, setShow }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    dispatch(logout());
    setShow(false);
    navigate("/");
  };

  return (
    <div
      className={`absolute border bg-[] w-[200px] h-[80px] rounded-xl -bottom-[75px] right-0 py-5 flex justify-center shadow-lg ${
        show ? "block" : "hidden"
      }`}
    >
      <Button
        className="flex items-center gap-3"
        onClick={() => {
          handleLogout();
        }}
      >
        <span className="material-symbols-outlined">logout</span> Log out
      </Button>
    </div>
  );
}
