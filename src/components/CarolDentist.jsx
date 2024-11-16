import React from 'react'
import CarolHero from './hero/CarolHero.jsx'
import CarolAbout from './about/CarolAbout.jsx'
import CarolService from './services/CarolService.jsx'
import CarolCTA from './cta/CarolCTA.jsx'
import CarolCTAvid from './cta/CarolCTAvid.jsx'
import CarolTestimonial from './testimonials/CarolTestimonial.jsx'
import CarolBanner from './background/CarolBanner.jsx'
import CarolFooter from './footer/CarolFooter.jsx'


export default function CarolDentist() {
    return (
        <div>
            <CarolHero />
            <CarolAbout />
            <CarolService />
            <CarolCTA />
            <CarolCTAvid />
            <CarolTestimonial />
            <CarolBanner />
            <CarolFooter />
        </div>
    )
}
