import React from 'react'
import './about.css'
import interests from '../../assets/about'

const About = () => {
    return (
        <section id="about">

            <div className="about">

                <div className="about-title">
                    <h1>Get to know <span>Me</span></h1>
                    <p>A glimpse into my journey, interests, and goals.</p>
                </div>

                <div className="about-container">

                    <div className="about-card about-who">

                        <h2>Who I Am</h2>

                        <p>
                            I am a Bioinformatics Engineering student with a strong
                            interest in computational biology, drug design, software
                            development, and creative work. My journey involves
                            exploring how technology can be used to solve biological
                            problems while allowing me to express my creativity through
                            programming, design, and personal projects.
                        </p>

                        <p>
                            I enjoy learning new technologies, experimenting with ideas,
                            and turning concepts into meaningful and practical solutions.
                            My goal is to build a career where biology, technology,
                            research, and creativity come together.
                        </p>

                    </div>

                    <div className="about-card education">

                        <h2>Educational Background</h2>

                        <div className="education-item">

                            <div>
                                <h3>B.Sc. in Bioinformatics Engineering</h3>
                                <p>Bangladesh Agricultural University</p>
                            </div>

                            <span>2022 – Present</span>

                        </div>

                        <div className="education-item">

                            <div>
                                <h3>Higher Secondary Certificate</h3>
                                <p>Uttara High School and College</p>
                                
                            </div>
                            <span>2019-2021</span>

                        </div>
                            <div className="education-item">

                            <div>
                                <h3>Secondary School Certificate</h3>
                                <p>Uttara High School and College</p>
                                
                            </div>
                            <span>2017-2019</span>

                        </div>

                    </div>

                    <div className="interests-section">

                        <h2>My Interests</h2>

                        <div className="interests-container">

                            {interests.map((interest, index) => {
                                return (
                                    <div key={index} className="interest-card">

                                        <h3>{interest.i_name}</h3>

                                        <p>{interest.i_desc}</p>

                                    </div>
                                )
                            })}

                        </div>

                        

                    </div>

                </div>

            </div>

        </section>
    )
}

export default About