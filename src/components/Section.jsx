// src/components/Section.jsx
import React from "react";
import "../css/section.css";

const Section = ({ id, className = "", children }) => {
  return (
    <section id={id} className={`section ${className}`}>
      {children}
    </section>
  );
};

export default Section;
