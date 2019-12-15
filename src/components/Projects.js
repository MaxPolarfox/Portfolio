import React from 'react'
import { Grid } from 'semantic-ui-react'

import './Projects.css'

export default function Projects() {
  return (
    <div className="project-work" id="projects">
      <header>
        <h1 className="section-head">Things I've Built</h1>
      </header>

      <Grid columns={3} stackable>
        <Grid.Column>
          <iframe width="560" height="315" title="Human Tetris Presentation" src="https://www.youtube.com/embed/TcYCWliA7PI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        </Grid.Column>


      </Grid>
    </div>
  )
}
