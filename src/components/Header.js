import React from 'react'
import './Header.css'

export default function Header() {
  return (

    <header className="hero">
      <div id='heroImage'>
        <img src="id.jpg" alt='MP' />
      </div>

      <div className="welcome-container">
        <h1 className="hello">Hello!</h1><h1 className="welcome-message">I'm <span><a href="https://www.linkedin.com/in/maksim-pesetski-a91581153/" target="_blank">Maksim Pesetski</a></span>, a software engineer and problem solver based out of New York, NY.</h1>
      </div>
      <span className="iconify" data-icon="ic:round-double-arrow" data-inline="false" data-rotate="90deg"></span>
    </header>
  )
}



