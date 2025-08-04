import React, { useRef } from "react";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import { FiPhoneCall } from "react-icons/fi";
import { MdMarkEmailRead } from "react-icons/md";
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const SERVICE_TEMPLATE_ID = import.meta.env.VITE_SERVICE_TEMPLATE_ID;
const PUBLIC_KEY= import.meta.env.VITE_PUBLIC_KEY;

console.log("Service ID:", SERVICE_ID);
console.log("Template ID:", SERVICE_TEMPLATE_ID);
console.log("Public Key:", PUBLIC_KEY);
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID,SERVICE_TEMPLATE_ID,form.current,PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
           toast.success("Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send Email");
        }
      );
  };

  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-heading">Contact With Me</h2>
      <div className="contact-wrapper">
         
        <div className="contact-left">
          <img
            src="https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg"
            alt="Handshake"
            className="contact-img"
          />
          <h3>Swapnil Ramteke</h3>
          <p className="position">Full Stack Developer</p>
          <p className="about">
            Open to full-time opportunities. Feel free to connect via email or through my social profiles.
          </p>
          <p className="info"><FiPhoneCall color="#ee076e" size={20}/> +91 8329207372</p>
          <p className="info"><MdMarkEmailRead color="#ee076e" size={22}/> swapnilramteke004@gmail.com</p>

          <div className="social-icons">
            <a  href="https://github.com/swapnilpreet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-link">
              <i className="fab fa-github"></i>
            </a>
            <a  href="https://www.linkedin.com/in/swapnil-ramteke-460609283/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="resume-link" href="mailto:swapnilramteke004@gmail.com">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>

         
        <form ref={form} className="contact-right" onSubmit={sendEmail}>
          <input type="hidden" name="to" value="swapnilramteke004@gmail.com" />
          <div className="form-row">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />

            <input type="email" name="email" placeholder="Email" required />

            <input type="text" name="subject" placeholder="Subject" required />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            SEND MESSAGE <span>→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
