import Header from './Pages/Header'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'
import './App.css'

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App
