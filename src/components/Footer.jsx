// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Description */}
        <div className="footer-section">
          <Link to="/" className="footer-logo">
            <img src="/SONGA-SCHOLARS.jpg" alt="Songa Scholars" />
            <span>Songa Scholars</span>
          </Link>
          <p>Step Forward in education, leadership, and impact.</p>
        </div>

        {/* Programs Section */}
        <div className="footer-section">
          <h4>Programs</h4>
          <ul>
            <li>
              <Link to="/programs">Core Programs</Link>
            </li>
            <li>
              <Link to="/programs#scholarships">Scholarship Hub</Link>
            </li>
            <li>
              <Link to="/programs#bootcamps">Bootcamps</Link>
            </li>
            <li>
              <Link to="/programs#capacity-building">Capacity Building</Link>
            </li>
          </ul>
        </div>

        {/* Organization Section */}
        <div className="footer-section">
          <h4>Organization</h4>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/impact">Impact</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:info@songascholars.org">info@songascholars.org</a>
            </li>
            <li>Kigali, Rwanda</li>
            <li>@SongaScholars</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div>
          © {new Date().getFullYear()} Songa Scholars Foundation. All rights
          reserved.
        </div>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
