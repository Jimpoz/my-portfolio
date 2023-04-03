import React from 'react';
import './contact.css';

function Contact() {
  return (
    <section id='contact'>
      <h2>Contact me!</h2>
      <form>
        <div className="form-field">
          <label htmlFor="name">Your name:</label>
          <input type="text" id="name" name="name" />
        </div>

        <div className="form-field">
          <label htmlFor="subject">Your e-mail:</label>
          <input type="text" id="subject" name="subject" />
        </div>

        <div className="form-field">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
