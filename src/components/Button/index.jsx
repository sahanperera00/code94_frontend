import React from "react";

export default function Button({ type, onClick, children, className }) {
  const getButtonClass = () => {
    if (type === "primary") {
      return "bg-[#001eb9] text-white";
    } else if (type === "secondary") {
      return "border border-[#001eb9] text-[#001eb9]";
    }
    return "";
  };

  return (
    <button
      className={`p-3 rounded-xl font-semibold text-m ${getButtonClass()} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
