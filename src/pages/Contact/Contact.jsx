import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {

      e.preventDefault();

      emailjs
          .sendForm(
              "service_uwgmcrf",
              "template_l5ngd1c",
              form.current,
              "nle3l3iyCmuuV6So4"
          )
          .then(
              () => {

                  alert("✅ Message sent successfully!");

                  form.current.reset();

              },
              () => {

                  alert("❌ Failed to send message.");

              }
          );

  };

  return (
    <div className="contact" id="contact">

      <div className="title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        {/* LEFT INFO */}

        <div className="contact-info">

          <h3>Let's Build Something Great</h3>

          <p>
            Whether you're looking for a developer, have a project idea,
            or simply want to connect, I'd love to hear from you.
            Feel free to reach out anytime.
          </p>

          <div className="info-item">
            <FaEnvelope className="contact-icon"/>
            <a href="mailto:viveksuman1873@gmail.com" className="contact-link">
                viveksuman1873@gmail.com
            </a>
          </div>

          <div className="info-item">
            <FaPhone className="contact-icon"/>
            <a href="https://wa.me/919174106850" target="_blank" rel="noreferrer" className="contact-link">
                +91 9174106850
            </a>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon"/>
            <span>Patna,Bihar</span>
          </div>

        </div>

        {/* RIGHT FORM */}

        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <textarea
          name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );

}

export default Contact;