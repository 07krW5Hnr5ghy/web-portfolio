import Header from './Pages/Header'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Skills from './Pages/Skills'
import './App.css'

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
    </div>
  )
}

export default App
