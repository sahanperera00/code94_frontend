import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

export default function Dropdown({ show, setShow }) {
  const navigate = useNavigate();

  return (
    <div
      className={`absolute border bg-[] w-[200px] h-[80px] rounded-xl -bottom-[75px] right-0 py-5 flex justify-center shadow-lg ${
        show ? "block" : "hidden"
      }`}
    >
      <Button
        className="flex items-center gap-3"
        onClick={() => {
          setShow(false);
          navigate("/");
        }}
      >
        <span class="material-symbols-outlined">logout</span> Log out
      </Button>
    </div>
  );
}
