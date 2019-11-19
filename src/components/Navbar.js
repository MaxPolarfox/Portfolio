import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
      // <Sticky>
      <div className={this.state.isTop ? 'clearNavBar navBar' : 'greyNavBar navBar'}>



        <div>
          <a href="#about" className='navBarElement'>ABOUT</a>
        </div>

        <div>
          <a href="#projects" className='navBarElement'>PROJECTS</a>
        </div>

        <div>
          <a href="#skills" className='navBarElement'>SKILLS</a>
        </div>

        <div>
          <a href="#contact" className='navBarElement'>CONTACT</a>
        </div>

        <div>

          <Link className='navBarElement' to='/resume'>RESUME</Link>
        </div>

      </div>
      // </Sticky>
    )
  }

}

