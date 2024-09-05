import React, { useState } from "react";

export default function Contact() {
  const initialFormData = {
    fullName: "",
    email: "",
    mobileNumber: "",
    subject: "",
    message: ""
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here, such as sending the data to a server
    console.log(formData); // Example: Log the form data to the console
    setSubmitted(true);
    setFormData(initialFormData); // Reset form data after submission
  };

  const handleAlertClose = () => {
    setSubmitted(false);
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Mobile Number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <textarea
          cols="30"
          rows="10"
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
      {submitted && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleAlertClose}>
              &times;
            </span>
            <p>Form submitted successfully!</p>
          </div>
        </div>
      )}
    </section>
  );
}
