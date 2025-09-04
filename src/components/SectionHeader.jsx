// src/components/SectionHeader.jsx
import React from "react";
import "../css/sectionHeader.css";

const SectionHeader = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="section-header">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className="title">{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
