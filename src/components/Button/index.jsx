import React from "react";

export default function Button({
  buttonClass,
  onClick,
  children,
  className,
  title,
  type,
}) {
  const getButtonClass = () => {
    if (buttonClass === "primary") {
      return "bg-[#001eb9] text-white";
    } else if (buttonClass === "secondary") {
      return "border border-[#001eb9] text-[#001eb9]";
    }
    return "";
  };

  return (
    <button
      className={`p-3 rounded-xl font-semibold text-m ${getButtonClass()} ${className}`}
      onClick={onClick}
      title={title}
      type={type}
    >
      {children}
    </button>
  );
}
