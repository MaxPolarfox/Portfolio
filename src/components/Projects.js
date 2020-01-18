import React from 'react'
import { Grid } from 'semantic-ui-react'

import './Projects.css'
import offTheBarrel from './offTheBarrel.png';

export default function Projects() {
  return (
    <div className="project-work" id="projects">
      <header>
        <h1 className="section-head">Things I've Built</h1>
      </header>

      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <iframe title="Human Tetris Presentation" src="https://www.youtube.com/embed/TcYCWliA7PI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Grid.Column>
          <Grid.Column>
            <h2>
              <span>
                <a href="http://humantetris.web.app/" target="_blank" rel="noopener noreferrer" >Human Tetris</a>
              </span>
            </h2>
            <h3>
              A web game based on the Japanese game show called Brain Wall that users can play on a website. The player sees their body on the monitor using a webcam, where the objective is to try and fit their body into a “safe zone” before an eight-second timer ends. If the player is able to fit their whole body inside, they move onto the next level with a differently shaped “safe zone”. If they fail to do this, the game ends and their score is recorded to a database.
          </h3>
            <h3> Feel free to check out the <span><a href="https://shanuyzelen.wixsite.com/human-tetris" target="_blank" rel="noopener noreferrer" >blog</a></span> about how Human Tetris was built</h3>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <img src={offTheBarrel} alt="Off The Barrel" />
          </Grid.Column>
          <Grid.Column>
            <h2>
              <span>
                <a href="http://off-the-barrel.herokuapp.com/" target="_blank" rel="noopener noreferrer" >Off The Barrel</a>
              </span>
            </h2>
            <h3>
              Off the Barrel is a fully functional e-commerce website dedicated to selling whiskey.
              Off the Barrel’s back-end consist primarily of Express.js,Sequelize, and PostgreSQL for api-routing, model querying, and database, respectively. Heroku was used for deployment of app.
              Off the Barrel’s front-end consist primarily of React, Redux, and CSS. Modular React and Redux components allowed for easy design implementation throughout. Personal CSS contributed to most of the UI/UX of the site.
            </h3>
          </Grid.Column>
        </Grid.Row>


      </Grid>
    </div>
  )
}
