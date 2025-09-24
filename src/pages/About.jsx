// src/pages/About.jsx
import React, { useEffect } from "react";
import {
  FaBullseye,
  FaLightbulb,
  FaHandsHelping,
  FaUsers,
  FaChartLine,
  FaGraduationCap,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import "../css/about.css";

const About = () => {
  const cards = [
    {
      icon: <FaBullseye />,
      title: "Mission",
      text: "To inspire, mentor, and equip students from primary school to university with career guidance, scholarship access, skills development, and innovative opportunities—helping them step forward into education, leadership, and community impact.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Vision",
      text: "A generation of Rwandan youth empowered with knowledge, skills, and opportunities to succeed academically, professionally, and as changemakers in their communities.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      text: "We use creative approaches to empower students with modern skills, digital learning, and innovative solutions.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Collaboration",
      text: "We grow stronger through partnerships, mentorship, and peer learning to maximize community impact.",
    },
    {
      icon: <FaUsers />,
      title: "Equity",
      text: "We believe every child deserves equal access to opportunities, regardless of their background.",
    },
    {
      icon: <FaChartLine />,
      title: "Impact",
      text: "We focus on measurable change in students’ lives, not just activities.",
    },
  ];

  // Scroll fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".about-text, .about-card");
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="app">
      <Navbar />

      <main>
        {/* About Hero Section */}
        <Section className="about-hero">
          <Container>
            <h1 className="about-hero-title">Who We Are</h1>
            <p className="about-hero-subtitle">
              Songa means 'Step Forward.' We are a youth-led, Rwanda-based
              nonprofit helping students step forward into education,
              leadership, and opportunity.
            </p>
          </Container>
        </Section>

        {/* About Intro */}
        <Section className="about">
          <Container>
            <SectionHeader
              eyebrow="Who We Are"
              title="Songa Scholars Foundation"
              subtitle="Songa means 'Step Forward.' We are a youth-led, Rwanda-based nonprofit helping students step forward into education, leadership, and opportunity by closing the gap between classroom learning and real-life success."
            />
            <p className="intro-text about-text">
              At Songa, we combine mentorship, scholarships, digital learning,
              and innovative programs to empower students at every stage of
              their academic journey. Our goal is to equip young Rwandans with
              the knowledge, skills, and confidence to thrive in school, higher
              education, and leadership opportunities—creating a ripple effect
              of change in communities across Rwanda.
            </p>

            {/* About Cards */}
            <div className="about-cards">
              {cards.map((c, idx) => (
                <div key={idx} className="about-card">
                  <div className="icon">{c.icon}</div>
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
