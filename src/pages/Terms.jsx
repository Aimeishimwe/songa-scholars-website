// src/pages/Terms.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Container from "../components/Container";

const Terms = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Section>
          <Container>
            <h1>Terms of Use</h1>

            <p>
              Welcome to the Songa Scholars Foundation website. By using this
              website, you agree to comply with the following terms and
              conditions.
            </p>

            <h2>1. Use of Content</h2>
            <p>
              All content, including text, images, and resources, is for
              informational purposes. You may not reproduce, distribute, or
              create derivative works without permission.
            </p>

            <h2>2. User Responsibilities</h2>
            <p>
              Users must not engage in illegal, harmful, or disruptive
              activities on this site. Respect other users and avoid sharing
              personal information without consent.
            </p>

            <h2>3. External Links</h2>
            <p>
              Our website may contain links to third-party sites. We are not
              responsible for their content, policies, or practices.
            </p>

            <h2>4. Disclaimers</h2>
            <p>
              While we aim to provide accurate information, we do not guarantee
              completeness, accuracy, or suitability for specific purposes. Use
              of the site is at your own risk.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              Songa Scholars Foundation will not be liable for any damages
              arising from your use of the website or inability to access
              content.
            </p>

            <h2>6. Updates to Terms</h2>
            <p>
              We may update these Terms of Use at any time. The updated version
              will be posted on this page. Continued use of the website
              constitutes acceptance of the updated terms.
            </p>

            <h2>7. Contact</h2>
            <p>
              For questions about these Terms of Use, contact us at:{" "}
              <a href="mailto:info@songascholars.org">info@songascholars.org</a>
            </p>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
