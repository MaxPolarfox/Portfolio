import React from 'react'

import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-details-container">
        <h1 className="section-head">Say Hello!</h1>
        <p>If you'd like to work with me, please <span><a href="maksim.pesetski@gmail.com" target="_blank">reach out!</a></span></p>
        <div className="contact-details">
          <p>maksim.pesetski@gmail.com</p>
          <p>347.495.4023</p>
        </div>
      </div>
    </section>
  )
}
