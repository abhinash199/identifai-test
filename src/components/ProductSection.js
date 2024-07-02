import React from "react";
import Icon from "../assets/analytics.png"; // Importing the AI icon
import Icon2 from "../assets/technology.png"; // Importing the integration icon

const ProductSection = () => {
  return (
    <section id="product" className="product-section">
      <div className="content">
        <h2>Our Latest Product</h2>
        <p>Discover our cutting-edge technology.</p>
        <div className="features">
          {/* Feature 1: AI-Powered Analytics */}
          <div className="feature">
            <img src={Icon} alt="AI Icon" />
            <h3>AI-Powered Analytics</h3>
            <p>
              Leverage advanced AI algorithms to gain deeper insights into your
              data. Our AI-powered analytics tool helps you make smarter
              decisions by identifying trends and patterns with unprecedented
              accuracy.
            </p>
          </div>
          {/* Feature 2: Seamless Integration */}
          <div className="feature">
            <img src={Icon2} alt="Integration Icon" />
            <h3>Seamless Integration</h3>
            <p>
              Easily integrate our product with your existing systems. Our
              seamless integration feature ensures smooth and efficient
              connectivity with various platforms, enhancing your workflow and
              productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
