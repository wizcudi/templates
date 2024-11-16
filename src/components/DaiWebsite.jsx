import React from 'react'
import DaiHero from './hero/DaiHero.jsx'
import DaiAbout from './about/DaiAbout.jsx'
import DaiCTA from '../components/cta/DaiCTA.jsx'
import DaiTestimonial from './testimonials/DaiTestimonial.jsx'
import DaiContact from './contact/DaiContact.jsx'
import DaiFooter from './footer/DaiFooter.jsx'
import DavNav from './navbar/DaiNav.jsx'

export default function DaiWebsite() {
    return (
        <div 
            className='
                max-w-[1550px]

                
            '
        >   
            <DavNav />
            <DaiHero />
            <DaiAbout />
            <DaiCTA />
            <DaiTestimonial />
            <DaiContact />
            <DaiFooter />
        </div>
    )
}
