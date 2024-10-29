import CarolHero from './components/hero/CarolHero.jsx'
import AboutDentist from './components/about/AboutDentist.jsx'
import ServiceDentist from './components/services/ServiceDentist.jsx'
import CTADentist from './components/cta/CTADentist.jsx'
import CTADentistVid from './components/cta/CTADentistVid.jsx'
import CarolDentistTestimonial from './components/testimonials/CarolDentistTestimonial.jsx'
import Background from './components/background/Background.jsx'
import CarolFooter from './components/footer/CarolFooter.jsx'

function App() {

  return (
    <div className='
      h-screen
      min-h-screen
      bg-white
    '>
      
      <CarolHero />
      <AboutDentist />
      <ServiceDentist />
      <CTADentist />
      <CTADentistVid />
      <CarolDentistTestimonial />
      <Background />
      <CarolFooter />

    </div>
  )
}

export default App
