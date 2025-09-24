// src/components/Button.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../css/button.css";

const Button = ({ children, to = "/", variant = "solid", onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`button ${variant === "solid" ? "solid" : "ghost"}`}
    >
      {children}
    </Link>
  );
};

export default Button;
