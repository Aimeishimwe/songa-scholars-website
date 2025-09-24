import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import { teamData } from "../data/teamData";
import "../css/team.css";
import "../css/teamProfile.css";

const TeamProfile = () => {
  const { memberName } = useParams();
  const member = teamData.find(
    (m) =>
      m.name.replace(/\s+/g, "-").toLowerCase() === memberName.toLowerCase()
  );

  if (!member) {
    return (
      <div className="app">
        <Navbar />
        <Container>
          <h2 className="team-name mt-10">Member not found</h2>
          <Link to="/team" className="team-profile-link">
            Back to Team
          </Link>
        </Container>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar />
      <Container className="team-profile-container">
        <div className="team-profile-card">
          <img
            src={member.img}
            alt={member.name}
            className="team-profile-img"
          />
          <h2 className="team-name">{member.name}</h2>
          <h3 className="team-role">{member.role}</h3>
          <p className="team-bio">{member.bio}</p>
          <Link to="/team" className="team-profile-link mt-4">
            Back to Team
          </Link>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default TeamProfile;
