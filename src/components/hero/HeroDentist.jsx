import React from 'react'
import DentistImage from '../../assets/dentist/AmyDentist.png'

export default function HeroDentist() {
    return (
        <div

            className='
                flex
                flex-row
                mx-auto
                max-w-5xl
                bg-white
                flex-col
                md:flex-row
                gap-x-2
                gap-y-12
            '
        >
            <div
                className='
                    flex-1
                    flex
                    flex-col
                    justify-center
                    gap-6
                    md:w-1/3
                    
                    
                '
            >
                <h1
                    className='
                        font-bold
                        md:text-6xl
                        max-nine-hundred:text-5xl
                        max-seven-hundred:text-6xl
                        max-seven-hundred:text-center
                        max-six-hundred:text-5xl
                        max-three-hundred:text-4xl
                    '
                >Experienced Dental Care in Orlando</h1>
                <p
                    className='
                        font-semibold
                        lg:text-2xl
                        md:text-xl
                        max-seven-hundred:text-2xl
                        max-seven-hundred:text-center
                        max-six-hundred:text-xl
                        max-five-hundred:text-lg
                        
                    '
                >You deserve a healthy, beautiful smile. Our team provides personalized solutions to help you get the smile you deserve.</p>
                
                <div
                    className='
                        flex
                        flex-col
                        gap-3
                        px-6
                        mt-4
                        max-seven-hundred:w-4/5
                        max-seven-hundred:mx-auto
                        max-six-hundred:w-full
                    '
                >
                    <button
                        className='
                            border-2
                            border-black
                            p-2
                            font-bold
                            hover:bg-black
                            hover:text-white
                            transition-colors
                            text-lg
                        '
                    >Book an Appointment</button>
                    <button
                        className='
                            border-2
                            border-black
                            p-2
                            font-bold
                            hover:bg-black
                            hover:text-white
                            transition-colors
                            text-lg
                        '
                    >(000) 000-0000</button>
                </div>
            </div>

            <div
                className='
                    flex
                    justify-center
                    md:w-1/3
                    
                    max-six-hundred:h-96
                '
            >
                <img 
                    src={DentistImage} 
                    alt="dentist"
                    className='
                        object-cover
                    '
                />
            </div>
        </div>
    )
}
