import React from 'react'

import './Skills.css'

// import { Grid, Image } from 'semantic-ui-react'

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <header>
        <h1 className="section-head">My toolbox:</h1>
      </header>

      <div id='skillsList'>
        <div className='skill'>
          <span className="iconify"
            data-icon="logos:javascript"
            data-inline="false"></span>
        </div>

        <div className='skill'>
          <span className="iconify"
            data-icon="logos:react"
            data-inline="false"></span>
        </div>

        <div className='skill'>
          <span className="iconify"
            data-icon="logos:redux"
            data-inline="false"></span>
        </div>

        <div className='skill'>
          <span className="iconify"
            data-icon="logos:sequelize"
            data-inline="false"></span>
        </div>

        <div className='skill'>
          <span className="iconify"
            data-icon="fa-brands:node"
            data-inline="false"></span>
        </div>

        <div className='skill'>
          <span className="iconify"
            data-icon="ant-design:html5-fill"
            data-inline="false"></span>
        </div>

        <div className='skill'>
          <span className="iconify"
            data-icon="fa-brands:css3-alt"
            data-inline="false"></span>
        </div>
      </div>



    </div >
  )
}

