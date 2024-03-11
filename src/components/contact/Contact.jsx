import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsTelephoneOutbound, BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_gabw4hw",
      "template_1u38iqc",
      form.current,
      "dOZaBcLK680VdklXh"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>thumbidavid001@gmail.com</h5>
            <a
              href="mailto:thumbidavid001@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>+254757133215</h5>
            <a
              href="https://wa.me/+254757133215"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsTelephoneOutbound className="contact_option-icon" />
            <h4>Call</h4>
            <h5>+254757133215</h5>
            <a href="tel:+254757133215" target="_blank" rel="noreferrer">
              Call now
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
