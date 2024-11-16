import React from 'react'
import AboutIMG from '../../assets/dai/dai_about.png'

export default function DaiAbout() {
    return (
        <div 
            id='about'
            className='
                bg-dai-60-percent
            '
        >
            <div
                className='
                    grid 
                    grid-cols-2
                    gap-x-6
                    gap-y-8
                    py-14
                    px-8
                    max-w-[1000px]
                    mx-auto
                    text-dai-30-percent
                    
                    max-seven:grid-cols-1
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
                            rounded-md
                            shadow
                            max-seven:max-h-[250px]
                        '
                    />
                </div>
            </div>
        </div>
    )
}
