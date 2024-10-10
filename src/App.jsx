// import { useState } from 'react'
import Dentist from './components/hero/tailwind/Dentist.jsx'
import AboutDentist from './components/about/Dentist.jsx'

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
      <Dentist />

      <AboutDentist />

    </div>
  )
}

export default App
