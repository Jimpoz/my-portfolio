import React from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9bh8mll', 'template_vnpsfrj', form.current, 'PQOvmaUGlXzOfknpe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <section id='contact'>
      <form ref={form} onSubmit={sendEmail}>
        <h2>Contact me!</h2>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </section>
  );
}

export default Contact;
