import { useState } from "react";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: "",
    message: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, phoneNumber, topic, message } = formData;

    const yourEmail = "abdallahesmail075@gmail.com";

    const emailSubject = encodeURIComponent(`Portfolio Contact: ${topic}`);

    const emailBody = encodeURIComponent(
      `Name: ${firstName} ${lastName}\n` +
        `Phone: ${phoneNumber}\n\n` +
        `Message:\n${message}`,
    );

    window.location.href = `mailto:${yourEmail}?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <section id="Contact" className="contact--section">
      <div className="heading">
        <h2>Get In Touch</h2>
        <p className="text-lg">
          I am currently open to new opportunities in backend development.
          Whether you have a question about APIs, Node.js, databases, or just
          want to say hi, feel free to drop a message!
        </p>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="first-name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="last-name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phoneNumber"
              id="phone-number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
            id="choose-topic"
            name="topic"
            className="contact--input text-md"
            value={formData.topic}
            onChange={handleChange}
            required
          >
            <option value="">Select One...</option>
            <option value="Job Opportunity">Job Opportunity</option>
            <option value="Freelance Project">Freelance Project</option>
            <option value="API Integration & Backend Consulting">
              API Integration & Backend Consulting
            </option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            required
          />
        </label>

        <label htmlFor="checkbox" className="checkbox--label">
          <input
            type="checkbox"
            required
            name="termsAccepted"
            id="checkbox"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <span className="text-sm">I accept the terms</span>
        </label>

        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
