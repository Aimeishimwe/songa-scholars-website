// src/pages/Programs.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import "../css/programs.css";
import "../css/scholarships.css"; // for scholarship styles

const Programs = () => {
  const programItems = [
    {
      id: "mentorship",
      title: "Mentorship & Career Guidance",
      text: "Interactive sessions from primary to university; CV & personal statement clinics; interview prep; career roadmaps.",
    },
    {
      id: "bootcamps",
      title: "Bootcamps & Prep Sessions",
      text: "Targeted support for high‑school graduates applying to universities and scholarships; weekend sprints and cohort‑based learning.",
    },
    {
      id: "capacity-building",
      title: "Capacity Building & Leadership Training",
      text: "Skill‑based workshops: digital literacy, research, leadership, project management, and public speaking.",
    },
    {
      id: "problem-solving",
      title: "Problem‑Solving & Grant Support",
      text: "Guide students to design community projects (climate, entrepreneurship, health) and apply for grants and fellowships.",
    },
    {
      id: "girls-empowerment",
      title: "Girls & Women Empowerment",
      text: "Gender‑focused programs that uplift young women in education, leadership, and opportunity access.",
    },
    {
      id: "podcasts",
      title: "Podcasts & Online Content",
      text: "Inspire and inform through stories, how‑tos, and conversations with mentors and alumni.",
    },
    {
      id: "community-reach",
      title: "Community Reach",
      text: "Rural and primary school outreach; train‑the‑trainer with educators and local partners.",
    },
  ];

  const scholarships = [
    {
      id: "mastercard",
      tag: "Undergraduate",
      name: "Mastercard Foundation Scholars Program",
      deadline: "Rolling / Partner schools",
    },
    {
      id: "chevening",
      tag: "Graduate",
      name: "Chevening Scholarships",
      deadline: "Opens annually (Aug–Nov)",
    },
    {
      id: "daad",
      tag: "Research",
      name: "DAAD EPOS & Research Grants",
      deadline: "Varies by program",
    },
    {
      id: "ashinaga",
      tag: "Undergraduate",
      name: "Ashinaga Africa Initiative",
      deadline: "Annually (Oct–Jan)",
    },
    {
      id: "mandela",
      tag: "Fellowship",
      name: "Mandela Rhodes Foundation",
      deadline: "Annually (Mar–May)",
    },
    {
      id: "schwarzman",
      tag: "Leadership",
      name: "Schwarzman Scholars",
      deadline: "Annually (Apr–Sep)",
    },
  ];

  return (
    <div
      className="app"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        {/* Programs Section */}
        <Section className="programs">
          <Container>
            <SectionHeader
              eyebrow="What we do"
              title="Core Programs"
              subtitle="All designed to move students from interest → readiness → success."
            />
            <div className="program-cards">
              {programItems.map((item) => (
                <div key={item.id} id={item.id} className="program-card">
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

        {/* Scholarships Section */}
        <Section className="scholarships">
          <Container>
            <SectionHeader
              eyebrow="Access & Opportunity"
              title="Scholarship Hub"
              subtitle="Browse featured, upcoming, and evergreen opportunities. Save what fits, track deadlines, and get application tips."
            />
            <div className="scholarship-cards" id="scholarships">
              {scholarships.map((s) => (
                <div key={s.id} className="scholarship-card">
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
              <Button variant="ghost" href="/contact">
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

export default Programs;
