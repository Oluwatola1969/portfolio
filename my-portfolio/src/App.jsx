import React from 'react'
import { About } from './components/About/About'
import {Contact} from './components/Contact/Contact'
import {Header} from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Nav } from './components/Nav/Nav'
import { Experience } from './components/Experience/Experience'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Service } from './components/Service/Service'

const App = () => {
  return (
    <div>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Service/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App;