import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import "../css/gallery.css";

const Gallery = () => {
  const allItems = [
    {
      type: "image",
      src: "/images/impact1.jpg",
      thumb: "/images/impact1.jpg",
      alt: "Mentorship session",
    },
    {
      type: "image",
      src: "/images/impact2.jpg",
      thumb: "/images/impact2.jpg",
      alt: "Workshop with students",
    },
    {
      type: "image",
      src: "/images/impact3.jpg",
      thumb: "/images/impact3.jpg",
      alt: "Scholarship advisory",
    },
    {
      type: "image",
      src: "/images/impact4.jpg",
      thumb: "/images/impact4.jpg",
      alt: "Community outreach",
    },
    {
      type: "image",
      src: "/images/impact5.jpg",
      thumb: "/images/impact5.jpg",
      alt: "Leadership training",
    },
    // Add more images/videos as needed
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Section className="gallery-section">
          <Container>
            <SectionHeader
              eyebrow="Moments in Action"
              title="Gallery"
              subtitle="A closer look at our mentorship, workshops, and student engagement."
            />

            <div className="gallery-grid">
              {allItems.map((item, idx) => (
                <div
                  key={idx}
                  className="gallery-card"
                  onClick={() => setSelected(idx)}
                >
                  <img src={item.thumb} alt={item.alt} />
                  {item.type === "video" && (
                    <span className="play-icon">▶</span>
                  )}
                </div>
              ))}
            </div>

            {/* Lightbox */}
            {selected !== null && (
              <div className="lightbox" onClick={() => setSelected(null)}>
                <div
                  className="lightbox-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  {allItems[selected].type === "image" ? (
                    <img
                      src={allItems[selected].src}
                      alt={allItems[selected].alt}
                    />
                  ) : (
                    <video controls autoPlay>
                      <source src={allItems[selected].src} type="video/mp4" />
                    </video>
                  )}
                  <button
                    className="close-btn"
                    onClick={() => setSelected(null)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
