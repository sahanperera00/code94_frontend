import React from "react";

export default function Button({ type, onClick, children, className }) {
  const getButtonClass = () => {
    if (type === "primary") {
      return "bg-[#001eb9] text-white hover:bg-[#001e99]";
    } else if (type === "secondary") {
      return "border border-[#001eb9] text-[#001eb9] hover:bg-[#001eb9] hover:text-white";
    }
    return "bg-gray-200 text-gray-700 hover:bg-gray-300";
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
