// src/pages/Programs.jsx
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import "../css/programs.css";
import "../css/scholarships.css";

const Programs = () => {
  const programItems = [
    {
      id: "mentorship",
      title: "Mentorship & Career Guidance",
      text: "Helping students build confidence, leadership, and make informed career choices through interactive mentorship and career support.",
      image: "/images/mentorship.jpg",
    },
    {
      id: "scholarship-access",
      title: "Scholarship Access & University Preparation",
      text: "Bootcamps, application assistance, and a scholarship database targeting both local and international opportunities.",
      image: "/images/scholarship.jpg",
    },
    {
      id: "digital-learning",
      title: "Digital Learning & Capacity Building",
      text: "Webinars, podcasts, and online challenges to expand reach and engage students at scale.",
      image: "/images/digital-learning.jpg",
    },
    {
      id: "student-empowerment",
      title: "Student Empowerment & Innovation",
      text: "Fostering entrepreneurship, design thinking, and talent development for impactful student initiatives.",
      image: "/images/empowerment.jpg",
    },
    {
      id: "community-knowledge",
      title: "Community & Knowledge Sharing",
      text: "Peer learning circles and collaborative platforms for continuous growth and stronger community ties.",
      image: "/images/community.jpg",
    },
    {
      id: "alumni-network",
      title: "Alumni Engagement & Networking",
      text: "Connecting program alumni for mentorship, collaboration, and knowledge sharing across communities.",
      image: "/images/alumni.jpg",
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

  // Fade-in animation
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

    const elements = document.querySelectorAll(
      ".program-card, .scholarship-card"
    );
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="app">
      <Navbar />

      {/* Hero Banner */}
      <Section className="programs-hero">
        <Container>
          <h1 className="programs-hero-title">Our Programs</h1>
          <p className="programs-hero-subtitle">
            Songa Scholars Foundation runs programs across six pillars,
            empowering students through mentorship, scholarships, innovation,
            and community engagement.
          </p>
        </Container>
      </Section>

      <main>
        {/* Programs Section */}
        <Section className="programs">
          <Container>
            <SectionHeader
              eyebrow="What we do"
              title="Our Programs"
              subtitle="We run programs across six pillars, tailored to student levels and contexts."
            />
            <div className="program-cards">
              {programItems.map((item) => (
                <div key={item.id} className="program-card">
                  <img src={item.image} alt={item.title} />
                  <div className="program-content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="programs-cta">
              <Button href="/contact">Join Our Programs</Button>
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
            <div className="scholarship-cards">
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
