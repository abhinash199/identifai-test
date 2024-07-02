import React from "react";
import Banner from "../assets/banner.jpg"; // Importing the banner image

const OpeningSection = () => {
  return (
    <section id="home" className="opening-section">
      <div className="banner">
        {/* Banner Image */}
        <img src={Banner} alt="Banner" />
        {/* Content Overlay */}
        <div className="content">
          <h1>Welcome to Tech Innovators</h1>
          <p>Your gateway to innovation.</p>
          {/* Call-to-Action Button */}
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default OpeningSection;
