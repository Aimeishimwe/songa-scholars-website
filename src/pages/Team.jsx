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

  // Function to generate headers based on position
  const getHeader = (position) => {
    if (position === "Executive Board") {
      return {
        eyebrow: "Leadership",
        subtitle: "Our leadership driving Songa Scholars Foundation forward.",
      };
    }
    if (position === "Partnerships & Fundraising Officers") {
      return {
        eyebrow: "Partnerships & Fundraising",
        subtitle:
          "Our partnerships and fundraising team mobilizing resources and building collaborations.",
      };
    }
    return {
      eyebrow: "Programs & Initiatives",
      subtitle: "Dedicated professionals managing our programs and outreach.",
    };
  };

  return (
    <div className="app">
      <Navbar />
      <main>
        <Section className="team">
          <Container>
            {Object.keys(positions).map((position, i) => {
              const { eyebrow, subtitle } = getHeader(position);
              return (
                <div key={i} className="team-position-section">
                  <SectionHeader
                    eyebrow={eyebrow}
                    title={position}
                    subtitle={subtitle}
                    className="mt-10"
                  />

                  {position === "Executive Board" ? (
                    <>
                      {/* Top row: first 3 members */}
                      <div className="team-grid executive-top">
                        {positions[position].slice(0, 3).map((member, j) => (
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
                                  to={`/team/${member.name.replace(
                                    /\s+/g,
                                    "-"
                                  )}`}
                                  className="team-profile-link"
                                >
                                  View Profile
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Bottom row: next 3 members */}
                      <div className="team-grid executive-bottom">
                        {positions[position].slice(3, 6).map((member, j) => (
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
                                  to={`/team/${member.name.replace(
                                    /\s+/g,
                                    "-"
                                  )}`}
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
              );
            })}
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
