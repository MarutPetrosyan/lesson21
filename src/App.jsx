import './App.css'
import { useRef } from 'react'
import About from './Components/About/About'
import Section from './Components/Section/Section'
import Header from './Components/Header/Header.jsx'
import Home from './Components/Home/Home.jsx'
import Page from './Components/Page/Page.jsx'

function App() {

  const aboutRef = useRef(null)
  const sectionRef = useRef(null)
  const pageRef = useRef(null)

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({behavior: 'smooth'})
  }

  const scrollToPage = () =>{
    pageRef.current.scrollToPage({behavior: 'smooth'})
  }

  return (
    <div className='container'>
      <Header scrollToAbout={scrollToAbout}  scrollToSection={scrollToSection}  scrollToPage={scrollToPage}/>
      <Home/>
      <Section  sectionRef={sectionRef}/>
      <Page pageRef={pageRef}/>
      <About aboutRef={aboutRef} />
    </div>
  )
}

export default App
