import React from 'react'

import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-details-container">
        <h1 className="section-head">Say Hello!</h1>
        <h1>If you'd like to work with me, please <span>
          <a href="mailto:maksim.pesetski@gmail.com" target="_blank" rel="noopener noreferrer">reach out!</a>
        </span></h1>
        <div className="contact-details">
          <h4>maksim.pesetski@gmail.com</h4>
          <h4>347.495.4023</h4>
        </div>
      </div>
    </section>
  )
}
