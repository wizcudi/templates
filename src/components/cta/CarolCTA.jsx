import React from 'react'
import CarolWorking from '../../assets/caroldental/CarolWorking.png'
import CarolAssest1 from '../../assets/caroldental/CarolAssest1.png'

export default function CarolCTA() {
    return (
        <div className='
            flex
            flex-col
            w-full
            max-w-[1300px]
            pb-14
            
            sm:flex-row
        '>
            <img 
                className='
                    
                    md:w-1/3
                '
                src={CarolWorking} 
                alt="Carol Working" 
            />
            <div className='
                flex
                flex-col
                justify-end
                gap-5
                p-6
                text-brand-purple

                md:w-1/2

                lg:p-16
                md:w-2/3

            '>
                <div>
                    <img 
                        className='
                            w-[50px]
                            md:w-[70px]
                            lg:w-[100px]
                        '
                        src={CarolAssest1} 
                        alt="Carol Logo" 
                    />
                </div>  
                <h2 className='
                    text-2xl
                    font-bold
                '>Dental Exam and Cleaning</h2>
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
