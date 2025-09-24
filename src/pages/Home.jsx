import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Section from "../components/Section";
import Container from "../components/Container";
import { FaGraduationCap, FaBook, FaBullseye } from "react-icons/fa";

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
          {/* Floating decorative icons */}
          <FaGraduationCap className="floating" />
          <FaBook className="floating" />
          <FaBullseye className="floating" />

          <Container>
            <Pill>
              <span className="dot" /> Step Forward — "Songa"
            </Pill>
            <h1>
              Empowering Students to Step Forward in Education, Skills &
              Leadership
            </h1>
            <p className="hero-text">
              Songa Scholars Foundation is a youth-led nonprofit closing the gap
              between academics and real success. We mentor, guide, and equip
              students from primary school to university with scholarship
              access, career support, soft skills, and innovation opportunities{" "}
              so they can succeed and lead change in their communities.
            </p>
            <div className="hero-buttons">
              <Button to="/programs">Explore Our Programs →</Button>
              <Button variant="ghost" to="/contact">
                Get in Touch
              </Button>
            </div>
          </Container>
        </Section>

        {/* Quick Intro Section */}
        <Section className="intro">
          <Container className="intro-content">
            <SectionHeader
              eyebrow="Who We Are"
              title="A Generation Stepping Forward"
              subtitle="We believe every child deserves not just an education, but the tools, mentorship, and opportunities to succeed beyond the classroom."
            />
            <p className="intro-text">
              At Songa Scholars Foundation, we are driven by the belief that
              every student has untapped potential waiting to be discovered.
              From mentorship and career guidance to scholarship access and
              digital learning, we equip students with the skills, confidence,
              and tools needed to thrive academically and beyond. We bridge the
              gap between classroom learning and real-world success, offering
              practical workshops, leadership training, and opportunities for
              personal growth. Our mission is to empower youth to not only excel
              in education but to become leaders and change-makers in their
              communities, shaping a brighter future for all.
            </p>

            {/* Who We Are Cards */}
            <div className="who-we-are-grid">
              <div className="who-card">
                <FaGraduationCap className="icon" />
                <h4>Mentorship & Career Guidance</h4>
                <p>
                  Helping students build confidence, skills, and clear pathways
                  for success.
                </p>
              </div>
              <div className="who-card">
                <FaBook className="icon" />
                <h4>Scholarship Hub</h4>
                <p>
                  Connecting learners with verified scholarships at every level
                  of education.
                </p>
              </div>
              <div className="who-card">
                <FaBullseye className="icon" />
                <h4>Leadership & Skills Training</h4>
                <p>
                  Empowering youth with practical tools to solve real-world
                  challenges.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Testimonials Section */}
        <Section className="testimonials">
          <Container>
            <SectionHeader
              eyebrow="Voices of Change"
              title="Students & Partners Stepping Forward"
              subtitle="Stories of transformation through mentorship, guidance, and opportunity."
            />
            <div className="testimonial-grid">
              <div className="testimonial-card">
                <blockquote>
                  “Songa guided me through my personal statement and
                  applications. I earned a full scholarship that changed my
                  future.”
                </blockquote>
                <figcaption>— Claudine A., Undergraduate Scholar</figcaption>
              </div>
              <div className="testimonial-card">
                <blockquote>
                  “Our senior students gained real skills in CV building,
                  applications, and interview preparation. The workshops were
                  practical and inspiring.”
                </blockquote>
                <figcaption>— Head Teacher, Kigali, Partner School</figcaption>
              </div>
              <div className="testimonial-card">
                <blockquote>
                  “I learned how to apply for scholarships confidently and now
                  guide my classmates too. Songa helped me step forward with
                  courage.”
                </blockquote>
                <figcaption>— Jean P., High School Student</figcaption>
              </div>
              {/* New testimonial cards */}
              <div className="testimonial-card">
                <blockquote>
                  “The mentorship I received from Songa gave me clarity in my
                  career path and boosted my confidence.”
                </blockquote>
                <figcaption>— Alice K., University Student</figcaption>
              </div>
              <div className="testimonial-card">
                <blockquote>
                  “Through Songa’s guidance, I connected with scholarships I
                  never thought were possible.”
                </blockquote>
                <figcaption>— Eric M., Graduate Student</figcaption>
              </div>
              <div className="testimonial-card">
                <blockquote>
                  “Partnering with Songa has brought real opportunities to our
                  school. Their dedication is unmatched.”
                </blockquote>
                <figcaption>— School Partner, Rwanda</figcaption>
              </div>
            </div>
          </Container>
        </Section>

        {/* Call to Action Section */}
        <Section className="cta">
          <Container>
            <h2 className="center-text">
              Join us in shaping the next generation of changemakers
            </h2>
            <p className="center-text">
              Whether as a mentor, partner, or supporter—your contribution helps
              students step forward into education, leadership, and opportunity.
            </p>
            <div className="hero-buttons">
              <Button to="/contact">Join as a Mentor</Button>
              <Button variant="ghost" to="/contact">
                Partner With Us
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
