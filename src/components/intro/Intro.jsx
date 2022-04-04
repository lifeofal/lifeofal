import React from 'react'
import "./intro.scss"

import {ArrowCircleDown} from '@mui/icons-material';

export default function Intro() {
  return (
    <div className='intro' id='intro'>

      <div className="left">
          <div className="imgContainer">
            <img src="assets/profile-modified.png" alt="My face" />
          </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello Friend, I'm</h2>
          <h1>Alejandro Cervantes</h1>
          <h3>Software Engineer</h3>
        </div>
        <a href="#portfolio">
          <ArrowCircleDown className='ArrowCircleDown'/>
        </a>

      </div>
    </div>
  )
}
