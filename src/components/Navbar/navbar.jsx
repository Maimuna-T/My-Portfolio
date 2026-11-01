import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='navbar'>

      <img
        src="/MT_logo.svg"
        alt="Logo"
        className="logo"
      />

      <div className='desktopMenu'>

        <Link
          className='desktopMenulist'
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
        >
          Home
        </Link>

        <Link
          className='desktopMenulist'
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
        >
          About
        </Link>

        <Link
          className='desktopMenulist'
          to="skills"
          smooth={true}
          duration={500}
          offset={-70}
        >
          Skills
        </Link>

        <Link
          className='desktopMenulist'
          to="experience"
          smooth={true}
          duration={500}
          offset={-70}
        >
          Experience
        </Link>

        <Link
          className='desktopMenulist'
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
        >
          Projects
        </Link>

        <Link
          className='desktopMenulist'
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
        >
          Contact
        </Link>

      </div>


    </nav>
  )
}

export default Navbar