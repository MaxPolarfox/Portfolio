import React from 'react'

import { Grid, Icon } from 'semantic-ui-react'

import './Footer.css'

export default function BottomBar() {
  return (
    <footer className="footer-bar">
      <Grid columns={2} devided>

        <Grid.Column>
          <a href='https://github.com/MaxPolarfox' target="_blank">
            <span className="iconify footerIcon" data-icon="zmdi:github-box" data-inline="false"></span>
          </a>
        </Grid.Column>

        <Grid.Column>
          <a href='https://www.linkedin.com/in/maksim-pesetski-a91581153/' target="_blank">
            <span className="iconify footerIcon" data-icon="icomoon-free:linkedin" data-inline="false"></span>
          </a>

        </Grid.Column>

      </Grid>
    </footer>


  )
}

