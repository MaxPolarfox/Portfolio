import React, { Component } from 'react'

import './NavBar.css'

export default class Navbar extends Component {
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
    this.setState({ isTop });
  }

  render() {
    return (
      <div className={this.state.isTop ? 'clearNavBar navBar' : 'greyNavBar navBar'}>
        <div>
          <a href="#about" className={this.state.isTop ? 'navBarElement' : "greynNavBarElement"}>ABOUT</a>
        </div>

        <div>
          <a href="#projects" className={this.state.isTop ? 'navBarElement' : "greynNavBarElement"}>PROJECTS</a>
        </div>

        <div>
          <a href="#skills" className={this.state.isTop ? 'navBarElement' : "greynNavBarElement"}>SKILLS</a>
        </div>

        <div>
          <a href="#contact" className={this.state.isTop ? 'navBarElement' : "greynNavBarElement"}>CONTACT</a>
        </div>


        <div>
          <a href="https://shanuyzelen.wixsite.com/human-tetris" className={this.state.isTop ? 'navBarElement' : "greynNavBarElement"} target="_blank" rel="noopener noreferrer">BLOG</a>
        </div>

        <div>

          <a href='https://drive.google.com/open?id=18jBbOu3jgwHCoGObEFyxv9otE2S3M6I3' className={this.state.isTop ? 'navBarElement' : "greynNavBarElement"} target="_blank" rel="noopener noreferrer" >RESUME</a>
        </div>

      </div>
    )
  }

}

