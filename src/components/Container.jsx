// src/components/Container.jsx
import React from "react";
import "../css/container.css";

const Container = ({ className = "", children }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
