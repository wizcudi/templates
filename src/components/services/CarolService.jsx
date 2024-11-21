import React from 'react'
import DentalSurgery from '../../assets/caroldental/DentalSurgery.png' 
import DentalCosmitic from '../../assets/caroldental/DentalCosmitic.png'
import DentalGenral from '../../assets/caroldental/DentalGenral.png'

export default function CarolService() {
    return (
        <div className='
            flex
            flex-col
            w-full
            max-w-[1300px]
            gap-8
            p-5
            pt-15
            pb-15
            bg-beige
            text-brand-purple
        '>
            <h2 className='
                text-3xl
                
                border-b-2
                border-brand-purple
                w-fit
            '>
                Services and Treatment
            </h2>
            <div className='
                flex
                flex-col
                gap-10
                md:flex-row
            '>
                <div className='
                    flex 
                    flex-col 
                    gap-2 
                    pb-8
                    relative  

                    after:content-["\27A4"]  
                    after:text-brand-orange  
                    after:absolute  
                    after:bottom-1 
                    after:left-0

                '>
                    <img src={DentalGenral} alt='Dental General' />
                    <h3 className='font-bold text-xl'>General</h3>
                    <p>Share your product or service offerings here. Give your prospective clients an overview of why they should use it. Differentiate it from the others listed on this page.</p>
                    <div></div>
                </div>
                <div className='
                    flex 
                    flex-col 
                    gap-2 
                    pb-8
                    relative  

                    after:content-["\27A4"]  
                    after:text-brand-orange  
                    after:absolute  
                    after:bottom-1 
                    after:left-0
                '>
                    <img src={DentalSurgery} alt='Dental Surgery' />
                    <h3 className='font-bold text-xl'>Surgical</h3>
                    <p>Share your product or service offerings here. Give your prospective clients an overview of why they should use it. Differentiate it from the others listed on this page.</p>
                    
                </div>
                <div className='
                    flex 
                    flex-col 
                    gap-2 
                    pb-8
                    relative  

                    after:content-["\27A4"]  
                    after:text-brand-orange  
                    after:absolute  
                    after:bottom-1 
                    after:left-0
                '>
                    <img src={DentalCosmitic} alt='Dental Cosmitic'  />
                    <h3 className='font-bold text-xl'>Cosmetic</h3>
                    <p>Share your product or service offerings here. Give your prospective clients an overview of why they should use it. Differentiate it from the others listed on this page.</p>
                    
                </div>
            </div>
        </div>
    )
}
