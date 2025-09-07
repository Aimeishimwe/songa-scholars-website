// src/pages/PrivacyPolicy.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Container from "../components/Container";

const PrivacyPolicy = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Section>
          <Container>
            <h1>Privacy Policy</h1>

            <p>
              Songa Scholars Foundation is committed to protecting and
              respecting your privacy. This Privacy Policy sets out our data
              processing practices and your rights regarding the ways in which
              your personal information is collected and used.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We may collect information about you:</p>
            <ul>
              <li>
                Directly when you interact with us (e.g., contact us, register
                for events, subscribe to newsletters).
              </li>
              <li>
                Indirectly from third-party partners or platforms (e.g.,
                scholarship portals).
              </li>
              <li>
                Automatically when you visit our website (IP address, browser
                type, cookies).
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>Your personal information may be used to:</p>
            <ul>
              <li>Respond to queries and requests.</li>
              <li>
                Provide services you requested, including mentoring, workshops,
                and scholarship guidance.
              </li>
              <li>Communicate updates, events, and opportunities.</li>
              <li>Administer our website and maintain security.</li>
              <li>
                Comply with legal obligations and for internal record keeping.
              </li>
            </ul>

            <h2>3. Sharing Your Information</h2>
            <p>
              We do not sell your personal information. We may share it with:
            </p>
            <ul>
              <li>
                Partners and collaborators relevant to programs and events.
              </li>
              <li>
                Service providers such as IT, cloud storage, and payment
                processors.
              </li>
              <li>Regulatory authorities when required by law.</li>
            </ul>

            <h2>4. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information.</li>
              <li>Request corrections or deletions of your data.</li>
              <li>Withdraw consent for marketing communications.</li>
              <li>Object to processing or request data portability.</li>
            </ul>

            <h2>5. Cookies & Analytics</h2>
            <p>
              Our website uses cookies to enhance your experience and analyze
              site usage. You can manage or disable cookies in your browser
              settings, though some features may not work correctly.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              For questions about this Privacy Policy or your personal
              information, contact us at:{" "}
              <a href="mailto:info@songascholars.org">info@songascholars.org</a>
            </p>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
