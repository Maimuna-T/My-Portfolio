import React from 'react'
import './experience.css'
import experiences from '../../assets/experience'

const Experience = () => {
    return (
        <div className="experience" id="experience">

            <div className="experience-title">
                <h1>
                    Work <span>Experience</span>
                </h1>

                <p>My professional journey so far.</p>
            </div>

            <div className="experience-timeline">

                {experiences.map((experience, index) => {

                    return (
                        <div key={index} className="experience-item">

                            <div className="experience-dot"></div>

                            <div className="experience-card">

                                <div className="experience-card-header">

                                    <h2>{experience.e_name}</h2>

                                    <span className="experience-date">
                                        {experience.e_date}
                                    </span>

                                </div>

                                <h3>
                                    {experience.e_company}
                                </h3>

                                {experience.e_desc.map((description, descIndex) => (
                                    <p key={descIndex}>
                                        {description}
                                    </p>
                                ))}

                            </div>

                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default Experience