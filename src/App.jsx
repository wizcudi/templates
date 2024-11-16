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
            bg-teal-600
            text-white 
            text-lg
            font-semibold
            mt-40
            py-10
        ">
          
            <div className="
                max-w-4xl 
                mx-auto 
                flex
                flex-col
                gap-2
            ">
                <p >
                  Check out my Website Template made
                  <br></br>
                  <span className='italic '>bythankyouamour</span>
                </p>

                <div className="
                  flex
                  
                  
                  gap-4
                ">

                  <Link 
                      to="/" 
                      className="
                        border-b-2 border-white
                      "
                  >
                      Carol Website
                  </Link>
                  <Link 
                      to="/dai" 
                      className="
                        border-b-2 border-white
                      "
                  >
                      Dai Website
                  </Link>

                </div>
            </div>
        </nav> */}

      </div>
    </BrowserRouter>
  )
}

export default App
