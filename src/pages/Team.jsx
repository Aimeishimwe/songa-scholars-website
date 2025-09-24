import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import { teamData } from "../data/teamData";
import "../css/team.css";

const Team = () => {
  // Group members by position
  const positions = {};
  teamData.forEach((member) => {
    if (!positions[member.position]) positions[member.position] = [];
    positions[member.position].push(member);
  });

  return (
    <div className="app">
      <Navbar />
      <main>
        <Section className="team">
          <Container>
            {Object.keys(positions).map((position, i) => (
              <div key={i} className="team-position-section">
                <SectionHeader
                  eyebrow={
                    position === "Executive Board"
                      ? "Leadership"
                      : "Programs & Initiatives"
                  }
                  title={position}
                  subtitle={
                    position === "Executive Board"
                      ? "Our leadership driving Songa Scholars Foundation forward."
                      : "Dedicated professionals managing our programs and outreach."
                  }
                  className="mt-10"
                />

                {position === "Executive Board" ? (
                  <>
                    {/* Top row: first 2 members */}
                    <div className="team-grid executive-top">
                      {positions[position].slice(0, 2).map((member, j) => (
                        <div key={j} className="team-card">
                          <div className="team-member">
                            <img
                              src={member.img}
                              alt={member.name}
                              className="team-img"
                            />
                            <div>
                              <div className="team-name">{member.name}</div>
                              <div className="team-role">{member.role}</div>
                              <Link
                                to={`/team/${member.name.replace(/\s+/g, "-")}`}
                                className="team-profile-link"
                              >
                                View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom row: remaining 3 members */}
                    <div className="team-grid executive-bottom">
                      {positions[position].slice(2).map((member, j) => (
                        <div key={j} className="team-card">
                          <div className="team-member">
                            <img
                              src={member.img}
                              alt={member.name}
                              className="team-img"
                            />
                            <div>
                              <div className="team-name">{member.name}</div>
                              <div className="team-role">{member.role}</div>
                              <Link
                                to={`/team/${member.name.replace(/\s+/g, "-")}`}
                                className="team-profile-link"
                              >
                                View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="team-grid">
                    {positions[position].map((member, j) => (
                      <div key={j} className="team-card">
                        <div className="team-member">
                          <img
                            src={member.img}
                            alt={member.name}
                            className="team-img"
                          />
                          <div>
                            <div className="team-name">{member.name}</div>
                            <div className="team-role">{member.role}</div>
                            <Link
                              to={`/team/${member.name.replace(/\s+/g, "-")}`}
                              className="team-profile-link"
                            >
                              View Profile
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
