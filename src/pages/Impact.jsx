// src/pages/Impact.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import "../css/impact.css";

const Impact = () => {
  const stats = [
    { number: "5k+", label: "Students reached" },
    { number: "120+", label: "Workshops & sessions" },
    { number: "200+", label: "Scholarship advisories" },
    { number: "30+", label: "Partner schools" },
  ];

  const highlightPhotos = [
    { src: "/images/impact1.jpg", alt: "Mentorship session" },
    { src: "/images/impact2.jpg", alt: "Workshop with students" },
    { src: "/images/impact3.jpg", alt: "Scholarship advisory" },
  ];

  return (
    <div className="app">
      <Navbar />
      <main>
        <Section className="impact">
          <Container>
            <SectionHeader
              eyebrow="Why it matters"
              title="Our Growing Impact"
              subtitle="Designed to scale sustainably while keeping mentorship personal."
            />

            {/* Stats Section */}
            <div className="impact-stats">
              {stats.map((s) => (
                <div key={s.label} className="impact-card">
                  <div className="impact-number">{s.number}</div>
                  <div className="impact-label">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Highlight Photos */}
            <div className="impact-photos">
              {highlightPhotos.map((p, i) => (
                <div key={i} className="impact-photo-card">
                  <img src={p.src} alt={p.alt} />
                </div>
              ))}
            </div>

            {/* View More Gallery Button */}
            <div className="impact-gallery-btn">
              <Link to="/gallery" className="btn-golden">
                View Full Gallery →
              </Link>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Impact;
