// src/pages/Donate.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import "../css/donate.css";
const Donate = () => {
  const amounts = ["$10", "$25", "$50", "$100"];

  return (
    <div className="app">
      <Navbar />
      <main>
        <Section className="donate">
          <Container>
            <SectionHeader
              title="Support Songa Scholars"
              subtitle="Your contribution powers mentorship sessions, scholarship guidance, and outreach to underserved schools."
            />
            <div className="donate-grid">
              <div className="donate-info">
                <p>
                  Your support helps us expand access to education and
                  mentorship for students in Rwanda and beyond.
                </p>
                <div className="donate-buttons">
                  <button className="btn">Donate Once</button>
                  <button className="btn ghost">Monthly Giving</button>
                </div>
              </div>
              <div className="donate-card">
                <div className="preset-amounts">
                  {amounts.map((amt) => (
                    <button key={amt} className="amount-btn">
                      {amt}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Custom amount"
                  className="custom-amount"
                />
                <button className="btn proceed-btn">Proceed to Payment</button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
