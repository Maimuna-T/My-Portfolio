import React from 'react';
import './projects.css';
import projects_data from '../../assets/projects';

const Projects = () => {
  return (
    <div className="projects" id="projects">
        <div className='projects-title'>
            <h1>My Latest Projects</h1>
        </div>
        <div className='project-container'>
            {projects_data.map((project,index)=>{
                return (
                    <div key={index} className='project-card'>
                        <img src={project.p_img} alt={project.p_name} />
                    </div>
        )     
            })}
        </div>

        <div className='project-readmore'>
            <p>Show more</p>
        </div>

    </div>
  )
}

export default Projects