import { BrowserRouter, Routes, Route , Link } from 'react-router-dom';
import CarolDentist from './components/CarolDentist.jsx'
import DaiWebsite from './components/DaiWebsite.jsx'
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className='
        h-screen
        min-h-screen
        bg-white
        
        relative
      '>

        <Routes>
          <Route path="/carol" element={<CarolDentist />} />
          <Route path="/" element={<DaiWebsite />} />
          {/* <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} /> */}
        </Routes>
        
        <nav 
          className="
            fixed
            bottom-2
            right-2

            flex
            flex-row
            items-center
            justify-center
            gap-8
            bg-black/50
            text-white
            py-2
            px-4
            text-sm
            font-semibold   
            rounded-md
          "
        >
          {/* Hamburger */}
          <button 
            className=""
            onClick={() => {
              setIsOpen(!isOpen);
              console.log('Button clicked, new state will be:', !isOpen); // Debug log
            }}
          >
            {isOpen ? <X size={24} /> : 'More Templates'}
            {/* <Menu size={24} /> */}
          </button>
            
          <div 
            className={`
               
              gap-8
              flex-row
              ${isOpen ? 'flex ' : 'hidden'}
            `}
          >

            <Link 
              to="/" 
              className="
                border-b
                border-white
              "
            >
              Dai Website
            </Link>

            <Link 
              to="/carol" 
              className="
                border-b
                border-white
              "
            >
              Carol Website
            </Link>

          </div>

          
      
        </nav>

      </div>
    </BrowserRouter>
  )
}

export default App
