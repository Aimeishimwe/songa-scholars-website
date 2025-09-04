// src/components/Footer.jsx
import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <a href="/" className="footer-logo">
            <img src="/SONGA-SCHOLARS.jpg" alt="Songa Scholars" />
            <span>Songa Scholars</span>
          </a>
          <p>Step Forward in education, leadership, and impact.</p>
        </div>

        <div className="footer-section">
          <h4>Programs</h4>
          <ul>
            <li>
              <a href="/programs">Mentorship</a>
            </li>
            <li>
              <a href="/scholarships">Scholarships</a>
            </li>
            <li>
              <a href="/programs">Bootcamps</a>
            </li>
            <li>
              <a href="/programs">Capacity Building</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Organization</h4>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/impact">Impact</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/donate">Donate</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>info@songascholars.org</li>
            <li>Kigali, Rwanda</li>
            <li>@SongaScholars</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          © {new Date().getFullYear()} Songa Scholars Foundation. All rights
          reserved.
        </div>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
