import { BrowserRouter, Routes, Route , Link } from 'react-router-dom';
import CarolDentist from './components/CarolDentist.jsx'
import DaiWebsite from './components/DaiWebsite.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className='
        h-screen
        min-h-screen
        bg-white
      '>

        <Routes>
          <Route path="/" element={<CarolDentist />} />
          <Route path="/dai" element={<DaiWebsite />} />
          {/* <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} /> */}
        </Routes>
        
        {/* <nav className="
            p-4 
            bg-teal-800 
            text-white 
            text-lg
        ">
            <div className="
                max-w-4xl 
                mx-auto 
                flex 
                items-center
                justify-between
                gap-7
            ">
                <Link 
                    to="/" 
                    className="
                        
                    "
                >
                    Carol
                </Link>
                
            </div>
        </nav> */}

      </div>
    </BrowserRouter>
  )
}

export default App
