// src/pages/Contact.jsx
import React from "react";
import Navbar from "../components/Navbar";
import "../css/contact.css";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import IconLocation from "../icons/IconLocation";
import IconMail from "../icons/IconMail";
import IconGlobe from "../icons/IconGlobe";

const Contact = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Section className="contact">
          <Container>
            <SectionHeader
              eyebrow="Stay connected"
              title="Contact & Newsletter"
              subtitle="Invite us to your school, ask about scholarships, or join as a mentor/partner."
            />

            <div className="contact-grid">
              {/* Contact Form */}
              <form
                className="contact-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="form-grid">
                  <div>
                    <label>Full name</label>
                    <input type="text" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label>Email</label>
                    <input type="email" placeholder="you@gmail.com" />
                  </div>
                  <div className="full-width">
                    <label>Message</label>
                    <textarea rows="4" placeholder="How can we help?" />
                  </div>
                </div>

                <div className="form-footer">
                  <div className="reply-time">We’ll reply within 24 hours.</div>
                  <button className="btn">Send</button>
                </div>
              </form>

              {/* Newsletter & Info */}
              <div className="newsletter">
                <h3>Newsletter</h3>
                <p>Get monthly scholarship highlights and program updates.</p>
                <div className="newsletter-form">
                  <input type="email" placeholder="Email address" />
                  <button className="btn">Subscribe</button>
                </div>

                <div className="newsletter-info">
                  <div className="info-item">
                    <IconLocation size={20} color="#d4af37" />
                    <span>Kigali, Rwanda</span>
                  </div>
                  <div className="info-item">
                    <IconMail size={20} color="#d4af37" />
                    <span>songascholars@gmail.com</span>
                  </div>
                  <div className="info-item">
                    <IconGlobe size={20} color="#d4af37" />
                    <span>@Songa_Scholars_Foundation (socials)</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
