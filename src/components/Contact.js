import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { message } from "antd";
import { FaFacebookF, FaEnvelope, FaPhone, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Contact(props) {
  const [messageApi, contextHolder] = message.useMessage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    emailjs
      .sendForm(
        "service_wri17be",
        "template_ojy5qsr",
        form.current,
        "2gusaS8T8iXJEFP99"
      )
      .then(
        (result) => {
          console.log(result.text);
          messageApi
            .open({
              type: "loading",
              content: "Action in progress..",
              duration: 1,
            })
            .then(() => message.info("Sending", 1))
            .then(() => message.success("Message Sent Successfully", 2.5));
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  
  const handleFacebook = () => {
    window.open("https://www.facebook.com/yourpage", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:youremail@gmail.com";
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/yourpage", "_blank");
  };

  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/yourpage", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+1234567890";
  };

  const form = useRef();

  return (
    <>
    <form className="form" ref={form} onSubmit={handleSubmit}>
      <h2 className="form-title">Get in Touch</h2>
      <div className="form-group">
        <label htmlFor="name" style={{ color: "black" }}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            backgroundColor: "white",
            border: "1px solid #40a9ff",
            padding: "10px",
            borderRadius: "5px",
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" style={{ color: "black" }}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            backgroundColor: "white",
            border: "1px solid #40a9ff",
            padding: "10px",
            borderRadius: "5px",
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="telephoneNumber" style={{ color: "black" }}>
          Telephone Number:
        </label>
        <input
          type="tel"
          id="telephoneNumber"
          name="telephoneNumber"
          value={formData.telephoneNumber}
          onChange={handleChange}
          required
          style={{
            backgroundColor: "white",
            border: "1px solid #40a9ff",
            padding: "10px",
            borderRadius: "5px",
          }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" style={{ color: "black" }}>
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{
            backgroundColor: "white",
            border: "1px solid #40a9ff",
            padding: "10px",
            borderRadius: "5px",
          }}
        />
      </div>
      <>
        {contextHolder}
        <button className="form-button" type="submit">
          Submit
        </button>
      </>
    </form>
    < div className="contact-container">
        <button className="social-button facebook" onClick={handleFacebook}>
        <FaFacebookF />
      </button>
      <button className="social-button email" onClick={handleEmail}>
        <FaEnvelope />
      </button>
      <button className="social-button instagram" onClick={handleInstagram}>
        <FaInstagram />
      </button>
      <button className="social-button linkedin" onClick={handleLinkedIn}>
        <FaLinkedinIn />
      </button>
      <button className="social-button call" onClick={handleCall}>
        <FaPhone />
      </button>
        </div>
    </>
    
  );
}

export default Contact;
