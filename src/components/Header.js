import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      isTop: true
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }

  onScroll(isTop) {
    console.log(typeof isTop);
    this.setState({ isTop });
  }

  render() {
    return (
      <header className="hero" >
        <div className='heroImage'></div>
        <div className="welcome-container">
          <h1 className="welcome-message">Hello!</h1>
          <h1 className="welcome-message">I'm <span><a href="https://www.linkedin.com/in/maksim-pesetski-a91581153/" target="_blank" rel="noopener noreferrer">Maksim Pesetski</a></span>, a software engineer and problem solver based out of New York, NY.</h1>
        </div>
        <span className="iconify" data-icon="ic:round-double-arrow" data-inline="false" data-rotate="90deg" data-flip={this.state.isTop ? null : "horizontal,vertical"}></span>
      </header>
    )
  }
}
