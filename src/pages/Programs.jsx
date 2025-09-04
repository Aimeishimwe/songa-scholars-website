// src/pages/Programs.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import "../css/programs.css";

const Programs = () => {
  const items = [
    {
      title: "Mentorship & Career Guidance",
      text: "Interactive sessions from primary to university; CV & personal statement clinics; interview prep; career roadmaps.",
    },
    {
      title: "Scholarship Hub",
      text: "Verified, accessible scholarship updates and application tips across all levels—focused on fit, deadlines, and storytelling.",
    },
    {
      title: "Bootcamps & Prep Sessions",
      text: "Targeted support for high‑school graduates applying to universities and scholarships; weekend sprints and cohort‑based learning.",
    },
    {
      title: "Capacity Building & Leadership Training",
      text: "Skill‑based workshops: digital literacy, research, leadership, project management, and public speaking.",
    },
    {
      title: "Problem‑Solving & Grant Support",
      text: "Guide students to design community projects (climate, entrepreneurship, health) and apply for grants and fellowships.",
    },
    {
      title: "Girls & Women Empowerment",
      text: "Gender‑focused programs that uplift young women in education, leadership, and opportunity access.",
    },
    {
      title: "Podcasts & Online Content",
      text: "Inspire and inform through stories, how‑tos, and conversations with mentors and alumni.",
    },
    {
      title: "Community Reach",
      text: "Rural and primary school outreach; train‑the‑trainer with educators and local partners.",
    },
  ];

  return (
    <div className="app">
      <Navbar />
      <main>
        <Section className="programs">
          <Container>
            <SectionHeader
              eyebrow="What we do"
              title="Core Programs"
              subtitle="All designed to move students from interest → readiness → success."
            />
            <div className="program-cards">
              {items.map((item) => (
                <div key={item.title} className="program-card">
                  <div className="program-icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 20l9-5-9-5-9 5 9 5z" />
                      <path d="M12 12l9-5-9-5-9 5 9 5z" />
                    </svg>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
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

export default Programs;
