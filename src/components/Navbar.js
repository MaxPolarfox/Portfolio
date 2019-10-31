import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Grid } from 'semantic-ui-react'

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

        <Grid columns={5} inverted devided >

          <Grid.Row>

            <Grid.Column>
              <a href="#about" className='navBarElement'>ABOUT</a>
            </Grid.Column>

            <Grid.Column>
              <a href="#projects" className='navBarElement'>PROJECTS</a>
            </Grid.Column>

            <Grid.Column>
              <a href="#skills" className='navBarElement'>SKILLS</a>
            </Grid.Column>

            <Grid.Column>
              <a href="#contact" className='navBarElement'>CONTACT</a>
            </Grid.Column>

            <Grid.Column>

              <Link className='navBarElement' to='/resume'>RESUME</Link>
            </Grid.Column>

          </Grid.Row>

        </Grid>

      </div>
      // </Sticky>
    )
  }

}

