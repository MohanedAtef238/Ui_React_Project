import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './assets/Sources/css/ContactUs.css'; 


const Contact = () => {
  return (
    <section className="contact">
      <form>
        <h2>Contact Form</h2>
        
        {/* Full Name Field */}
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your name"
            required
          />
        </div>
        
        {/* Email Address Field */}
        <div className="input-box">
          <label>Email Address</label>
          <input
            type="email"
            className="field"
            placeholder="Enter your email"
            required
          />
        </div>
        
        {/* Message Field */}
        <div className="input-box">
          <label>Your Message</label>
          <textarea
            name="message"
            id="message"
            className="field message"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        
        {/* Submit Button */}
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
