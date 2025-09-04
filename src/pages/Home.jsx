// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Section from "../components/Section";
import Container from "../components/Container";
import Pill from "../components/Pill";
import SectionHeader from "../components/SectionHeader";
import "../css/home.css";

const Home = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* Hero Section */}
        <Section className="hero">
          <Container>
            <Pill>
              <span className="dot" /> Step Forward — "Songa"
            </Pill>
            <h1>
              Empowering Students to Step Forward in Education & Leadership
            </h1>
            <p>
              We mentor, inform, and equip students from primary school to
              university with scholarships guidance, skill‑building, and
              practical opportunities—so they can lead change in their
              communities.
            </p>
            <div className="hero-buttons">
              <Button to="/programs">Explore Programs</Button>
              <Button variant="ghost" to="/scholarship">
                Find Scholarships
              </Button>
            </div>
          </Container>
        </Section>

        {/* Testimonials */}
        <Section className="testimonials">
          <Container>
            <SectionHeader
              eyebrow="What students say"
              title="Stories of stepping forward"
              subtitle="Real feedback from mentees and collaborators."
            />
            <div className="testimonial-grid">
              <div className="testimonial-card">
                <blockquote>
                  “Songa gave me the structure and feedback I needed for my
                  personal statement. I won a full scholarship!”
                </blockquote>
                <figcaption>— Claudine A., Undergraduate Scholar</figcaption>
              </div>
              <div className="testimonial-card">
                <blockquote>
                  “Our seniors finally understood how to build a strong CV and
                  apply on time. The workshops were practical and engaging.”
                </blockquote>
                <figcaption>— Head Teacher, Kigali, Partner School</figcaption>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
