// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  const translations = {
    EN: {
      home: "Home",
      about: "About",
      programs: "Programs",
      scholarships: "Scholarships",
      impact: "Impact",
      team: "Team",
      contact: "Contact",
      donate: "Donate",
    },
    FR: {
      home: "Accueil",
      about: "À propos",
      programs: "Programmes",
      scholarships: "Bourses",
      impact: "Impact",
      team: "Équipe",
      contact: "Contact",
      donate: "Faire un don",
    },
  };

  const t = translations[lang];

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src="/SONGA-SCHOLARS.jpg" alt="Songa Scholars" />
          <span>Songa Scholars Foundation</span>
        </Link>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/">{t.home}</Link>
          <Link to="/about">{t.about}</Link>
          <Link to="/programs">{t.programs}</Link>
          {/* <Link to="/scholarships">{t.scholarships}</Link> */}
          {/* <Link to="/impact">{t.impact}</Link> */}
          {/* <Link to="/team">{t.team}</Link> */}
          <Link to="/contact">{t.contact}</Link>
          </nav>
          <div className="donate-btn">
          <Link to="/donate" >
            {t.donate}
          </Link>
          </div>
      

        <div className="nav-actions">
          {/* Language Switcher with EN + FR inside circle */}
          {/* <div className="lang-circle">
            <span
              className={lang === "EN" ? "active" : ""}
              onClick={() => setLang("EN")}
            >
              EN
            </span>
            <span
              className={lang === "FR" ? "active" : ""}
              onClick={() => setLang("FR")}
            >
              FR
            </span>
          </div> */}

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setOpen(!open)}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
