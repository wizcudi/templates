import React from 'react'
import AboutIMG from '../../assets/dai/dai_about.png'

export default function DaiAbout() {
    return (
        <div className='bg-slate-300'>
        <div
            className='
                grid 
                grid-cols-2
                gap-4
                p-10
                max-w-[1000px]
                mx-auto

                max-seven:grid-cols-1
                
                max-four-hundred:p-6
            '
        >
            <div
                className='
                    flex
                    flex-col
                    gap-2
                '
            >
                <h2
                    className='
                        font-bold
                        text-4xl
                        max-five-hundred:text-3xl
                       
                        
                    '
                >Who Are We</h2>
                <p
                    className='
                        text-base
                        max-four-hundred:text-sm
                        max-three-hundred:text-xs
                    '
                    
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
            </div>
            <div
                className='
                    
                    flex
                    justify-center

                    max-seven:justify-start
                '
            >
                <img 
                    src={AboutIMG} 
                    alt="About Image" 
                    className='
                        
                        
                        max-seven:max-h-[250px]
                    '
                />
            </div>
        </div>
        </div>
    )
}
