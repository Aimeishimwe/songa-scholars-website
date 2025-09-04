// src/pages/Team.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import "../css/team.css";
const Team = () => {
  const members = [
    {
      name: "Aime Ishimwe",
      role: "Co‑Founder & Lead, Programs",
      img: "/SONGA-SCHOLARS.jpg",
    },
    {
      name: "Program Mentor",
      role: "Scholarships & Career Guidance",
      img: "/SONGA-SCHOLARS.jpg",
    },
    {
      name: "Operations Lead",
      role: "Partnerships & Outreach",
      img: "/SONGA-SCHOLARS.jpg",
    },
  ];

  return (
    <div className="app">
      <Navbar />
      <main>
        <Section className="team">
          <Container>
            <SectionHeader
              eyebrow="People behind the work"
              title="Our Team & Mentors"
              subtitle="A collaborative network of students, professionals, and educators."
            />
            <div className="team-grid">
              {members.map((m, i) => (
                <div key={i} className="team-card">
                  <div className="team-member">
                    <img src={m.img} alt={m.name} className="team-img" />
                    <div>
                      <div className="team-name">{m.name}</div>
                      <div className="team-role">{m.role}</div>
                    </div>
                  </div>
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

export default Team;
