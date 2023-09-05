import React from 'react'
import {useRef} from 'react'

export default function Contact() {
  const form = useRef()

  const sendEmail = () => {};
  return (
    <section>
      <div className="container">
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
    </section>
  )
}
