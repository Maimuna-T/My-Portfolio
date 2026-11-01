
import './App.css'
import Navbar from './components/Navbar/navbar'; 
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Experience from './components/Experience/experience';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';


const App = () => {
  return (
    <>
      <Navbar />

      <div>
        <Intro />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
