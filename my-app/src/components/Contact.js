import React from 'react'
import {useRef} from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jbro1gl', 'template_xnrljlm', form.current, 'y1qPBzn4JqiRGKYs2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
        <h2 className="text-center">Contact Us</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text"
            placeholder='Full Name'
            name='user_name' />
            <input type="email"
            placeholder='Email'
            name='user_email' required />
            <input type="text"
            placeholder='Subject'
            name='subject' required />
            <textarea name="message" cols="30" rows="10"></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
      </div>
      </div>
      </div>
    </section>
  )
}
