import './App.css'
import { useRef } from 'react'
import About from './Components/About/About'
import Section from './Components/Section/Section'
import Header from './Components/Header/Header.jsx'
import Home from './Components/Home/Home.jsx'

function App() {

  const aboutRef = useRef(null)
  const sectionRef = useRef(null)

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({})
  }

  return (
    <div className='container'>
      <Header scrollToAbout={scrollToAbout} />
      <Home/>
      <Section  sectionRef={sectionRef}/>
      <About aboutRef={aboutRef} />
    </div>
  )
}

export default App
