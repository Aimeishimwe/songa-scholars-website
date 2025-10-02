import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";

// React Icons
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";

import "../css/contact.css";

const Contact = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Section className="contact">
          <Container>
            <SectionHeader
              eyebrow="Stay Connected"
              title="Contact Us"
              subtitle="We’d love to hear from you. Invite us to your school, ask about scholarships, or join as a mentor/partner."
            />

            <div className="contact-wrapper">
              {/* Left Side: Contact Info */}
              <div className="contact-card">
                <div className="card-header">Get in Touch</div>
                <div className="card-body">
                  {/*<p className="card-text">
                    Reach out via phone, email, or visit us. You can also follow
                    us on socials for updates.
                  </p>*/}
                  <div className="info-list">
                    <div className="info-item">
                      <FaMapMarkerAlt className="icon" />
                      <span>Kigali, Rwanda</span>
                    </div>
                    <div className="info-item">
                      <FaPhoneAlt className="icon" />
                      <span>+250 791 264 907 (Call / WhatsApp)</span>
                    </div>
                    <div className="info-item">
                      <FaEnvelope className="icon" />
                      <span>songascholars@gmail.com</span>
                    </div>
                    <div className="info-item">
                      <FaGlobe className="icon" />
                      <span>@Songa_Scholars_Foundation (Socials)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Contact Form */}
              <div className="contact-card">
                <div className="card-header">Send Us a Message</div>
                <form
                  className="card-body contact-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="form-grid">
                    <div>
                      <label>Full Name</label>
                      <input type="text" placeholder="Aime Ishimwe" />
                    </div>
                    <div>
                      <label>Email</label>
                      <input type="email" placeholder="myemail@gmail.com" />
                    </div>
                    <div className="full-width">
                      <label>Message</label>
                      <textarea rows="4" placeholder="How can we help?" />
                    </div>
                  </div>

                  <div className="form-footer">
                    <div className="reply-time">
                      We’ll reply within 24 hours.
                    </div>
                    <button className="btn">Send</button>
                  </div>
                </form>
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
