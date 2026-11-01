import React from 'react'
import './intro.css';
import {Link} from 'react-scroll'

 const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <h1>
              <span className='hello'>Hello,</span>
            </h1>
            <span className='typewriter'>This is Maimuna Tabassum</span>
            <span className='introText'>Bioinformatician | Frontend Developer | UI Designer</span>
            <p className='introPara'> I wish to develop new Bioinformatics projects with innovative creation using unique design </p>

            <div className="button-container">
              <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
          >
            <button className="intro-btn-contact">
              Contact me
            </button>
          </Link>
            </div>
        </div>
        
        <img src='/MT_logo.svg' alt='Profile' className="bg"/>

    </section>
  )
}
export default Intro
