import React from 'react'
import CarolAssest1 from '../../assets/caroldental/CarolAssest1.png'
import CarolDentistVid from '../../assets/caroldental/CarolDentistVid.mp4'

export default function CarolCTAvid() {
    return (
        <div className='
           
            w-full
            h-full
            max-w-[1300px]
            relative
            overflow-hidden
            min-h-[500px]
        '>
            <video
                className='
                    object-cover
                    h-full
                    w-full
                    min-h-[500px]
                    brightness-[.7]  
                        
                           
                    
                '
                src={CarolDentistVid}  
                autoPlay
                loop
                muted
                playsInline 
            />

            <div className='

                
                
                

                absolute
                top-10
                right-6

                text-brand-purple
                bg-beige
                flex
                flex-col
                gap-5
                max-w-96

                p-6

                max-three-hundred:right-2

                max-five-hundred:w-[275px]

                md:top-28
                md:right-12

                lg:top-28
                lg:right-20
                lg:py-10
                lg:px-8

                

            '>
            <img 
                className='
                    w-[70px]
                    
                    rounded-full
                '
                src={CarolAssest1} 
                alt="Carol Logo Two" 
            />
            <h2 className='
                text-2xl
                font-bold
            '>Dental Crowns</h2>
            <p>Highlight specific services or products that are unique to your business here. It can be your flagship product, or a service that you've pioneered. Give it room to shine here.</p>
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
            '>Schedule</button>

            </div>

            
            
        </div>
    )
}

