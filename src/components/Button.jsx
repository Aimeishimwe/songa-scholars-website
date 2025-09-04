// src/components/Button.jsx
import React from "react";
import "../css/button.css";

const Button = ({ children, href = "#", variant = "solid", onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`button ${variant === "solid" ? "solid" : "ghost"}`}
    >
      {children}
    </a>
  );
};

export default Button;
