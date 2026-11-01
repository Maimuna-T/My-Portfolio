

import React from 'react'
import './skills.css'
import works from '../../assets/works'

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className='title'>
        <h1>My Skills</h1>
      </div>

      <div className='skills-container'>
        {works.map((skill, index) => {
          return (
            <div key={index} className='skills-format'>
              <h3>{skill.s_no}</h3>
              <h2>{skill.s_name}</h2>
              <p>{skill.s_desc}</p>
             
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
