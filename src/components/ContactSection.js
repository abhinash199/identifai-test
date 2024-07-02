import React, { useState } from "react";

const ContactSection = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Function to update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <section id="contact" className="contact-section">
      <div className="content">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          {/* Input fields for name and email */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {/* Submit button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
