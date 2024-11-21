import React from 'react'
import Carol from '../../assets/caroldental/CarolFront.png'

export default function CarolHero() {
    return (
        <div className='
            flex  w-full max-w-[1300px] 
            h-[880px]
            
            max-five-hundred:h-[786px]
            md:max-h-[475px] lg:max-h-[535px]
            bg-beige
            relative
        '>
            <div className='
                flex
                flex-col
                p-10
                gap-4
                
                h-full
                bg-transparent

                max-three-hundred:p-4

                max-four-hundred:gap-3
                
                max-five-hundred:p-6

                md:gap-6
                md:justify-center
                md:w-3/5
                md:pl-8
                md:pr-16
                md:pt-0
                md:pb-0
               
                lg:pl-20
                lg:pr-0
                
                
            '>

                <h1 className='
                    font-bold
                    text-4xl
                    text-brand-purple
                '>Dr. Elvira Montanez</h1>
                <p className='
                    font-semibold
                    text-2xl
                    uppercase
                    text-brand-purple
                '>Dentist</p>
                <p className='
                    text-brand-purple
                    text-base
                '>Dr. Montanez received her Doctorate of Dental Medicine from De Loureigh University where she currently teaches part time. She has 13 years of experience and was named one of Bockford's Top Dentists in 2021 and 2022.</p>
                <button className='
                    max-w-60
                    bg-brand-orange
                    text-white
                    font-bold
                    py-3
                    rounded-full
                    hover:bg-orange-700
                    hover:drop-shadow-xl
                    max-four-hundred:text-sm
                    max-four-hundred:mt-2
                '>Book an Appointment</button>
            </div>

            <div 
                className='
                    bg-brand-orange 
                    absolute
                    h-[466px]
                    w-[350px]

                    drop-shadow-xl

                    bottom-12
                    left-9

                    
                    max-three-hundred:bottom-5
                    max-three-hundred:h-[330px]
                    max-three-hundred:w-[250px]
                    
                    max-four-hundred:w-[275px]
                    max-four-hundred:h-[365px]
                    max-four-hundred:left-4
                    max-four-hundred:bottom-6
                    
                    max-five-hundred:bottom-7
                    max-five-hundred:left-12
                    max-five-hundred:h-[399px]
                    max-five-hundred:w-[300px]
                    
                    
                    md:right-0
                    md:left-auto
                    md:top-0
                    md:h-[400px]
                    md:w-[300px]

                    lg:h-[470px]
                    lg:w-[350px]
                '
            >
                
            </div>
            <img 
                className='
                    absolute

                    w-[350px]
                    
                    

                    bottom-0
                    left-20

                    max-three-hundred:w-[250px]

                    
                    max-four-hundred:left-8
                    max-four-hundred:w-[275px]

                    max-five-hundred:w-[300px]

                    md:drop-shadow-md
                    md:top-12
                    md:right-12
                    md:left-auto
                    md:w-[300px]


                    lg:top-12
                    lg:right-12
                    lg:w-[350px]
                '
                src={Carol} 
            />


        </div>
    )
}
