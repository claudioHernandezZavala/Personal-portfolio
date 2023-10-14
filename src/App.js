import React from 'react'
import {About,Footer,Header,Testimonial,Work,Skills,Certifications} from './container'
import {default as Navbar} from './components/NavBar/Navbar'
import './App.scss'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Certifications/>
      <Footer/>

    </div>
  );
}

export default App