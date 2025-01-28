import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import './App.css'

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Header/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App
