import React from 'react'
import { About } from './components/About/About'
import {Contact} from './components/Contact/Contact'
import {Header} from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Nav } from './components/Nav/Nav'
import { Portfolio } from './components/Portfolio/Portfolio'

const App = () => {
  return (
    <div>
        <Header/>
        <Nav/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App;