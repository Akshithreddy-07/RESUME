import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact form submitted:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="contact section">
      <div className="section-title">
        <p>Get In Touch</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's build something together.</h3>

          <p>
            Have a project idea, collaboration opportunity, or just want to
            connect? Feel free to send me a message.
          </p>

          <div className="contact-details">
            <div>
              <span>📧</span>
              <div>
                <h4>Email</h4>
                <p>gangidipullareddy@gmail.com</p>
              </div>
            </div>

            <div>
              <span>📍</span>
              <div>
                <h4>Location</h4>
                <p>India</p>
              </div>
            </div>

            <div>
              <span>💼</span>
              <div>
                <h4>LinkedIn</h4>
                <p>https://www.linkedin.com/in/g-akshith-reddy-401522375/</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>

          {submitted && (
            <p className="success-message">
              ✓ Message submitted successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;