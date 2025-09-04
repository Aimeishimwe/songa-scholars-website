// src/pages/About.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import "../css/about.css";

const About = () => {
  const cards = [
    {
      title: "Mission",
      text: "To empower students through mentorship, career guidance, scholarships information, capacity building, and innovative learning opportunities—helping them step forward into education, leadership, and problem‑solving.",
    },
    {
      title: "Vision",
      text: "To become a leading, innovative hub for student empowerment and scholarship access, maximizing reach through both online and offline platforms, and nurturing the next generation of changemakers.",
    },
    {
      title: "Approach",
      text: "Innovative, resource‑conscious, hybrid (in‑person & online), inclusive, and impact‑driven—designed to scale from local communities to global audiences.",
    },
  ];

  return (
    <div className="app">
      <Navbar />
      <main>
        <Section className="about">
          <Container>
            <SectionHeader
              eyebrow="Who we are"
              title="Songa Scholars Foundation"
              subtitle="A hybrid hub for mentorship, career guidance, scholarships, and capacity building—reaching learners both online and in schools across Rwanda and beyond."
            />
            <div className="about-cards">
              {cards.map((c) => (
                <div key={c.title} className="about-card">
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
