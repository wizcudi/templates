// import { useState } from 'react'
import HeroDentist from './components/hero/HeroDentist.jsx'
import AboutDentist from './components/about/AboutDentist.jsx'

function App() {

  return (
    <div 
      className='
        min-h-screen
        bg-white
        p-6
        flex
        flex-col
        gap-20
      '
    >
      <HeroDentist />

      <AboutDentist />

    </div>
  )
}

export default App
