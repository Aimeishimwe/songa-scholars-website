// src/pages/Scholarships.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import "../css/scholarships.css";

const Scholarships = () => {
  const scholarships = [
    {
      tag: "Undergraduate",
      name: "Mastercard Foundation Scholars Program",
      deadline: "Rolling / Partner schools",
    },
    {
      tag: "Graduate",
      name: "Chevening Scholarships",
      deadline: "Opens annually (Aug–Nov)",
    },
    {
      tag: "Research",
      name: "DAAD EPOS & Research Grants",
      deadline: "Varies by program",
    },
    {
      tag: "Undergraduate",
      name: "Ashinaga Africa Initiative",
      deadline: "Annually (Oct–Jan)",
    },
    {
      tag: "Fellowship",
      name: "Mandela Rhodes Foundation",
      deadline: "Annually (Mar–May)",
    },
    {
      tag: "Leadership",
      name: "Schwarzman Scholars",
      deadline: "Annually (Apr–Sep)",
    },
  ];

  return (
    <div className="app">
      <Navbar />
      <main>
        <Section className="scholarships">
          <Container>
            <SectionHeader
              eyebrow="Access & Opportunity"
              title="Scholarship Hub"
              subtitle="Browse featured, upcoming, and evergreen opportunities. Save what fits, track deadlines, and get application tips."
            />
            <div className="scholarship-cards">
              {scholarships.map((s, idx) => (
                <div key={idx} className="scholarship-card">
                  <div className="scholarship-tag">{s.tag}</div>
                  <h3>{s.name}</h3>
                  <p className="deadline">Deadline: {s.deadline}</p>
                  <div className="scholarship-buttons">
                    <Button variant="ghost" href="#">
                      Details
                    </Button>
                    <Button href="#">Save</Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="scholarship-cta">
              <Button variant="ghost" href="#contact">
                Request a 1:1 Application Review
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Scholarships;
