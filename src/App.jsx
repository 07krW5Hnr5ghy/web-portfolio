import Header from './pages/Header.jsx'
import Hero from './pages/Hero.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './pages/Footer.jsx'
import './App.css'

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
