import React from 'react'
import HeroIMG from '../../assets/dai/UBD_Hero.png'

export default function DaiHero() {
    return (
        <div
            className='
                flex
                max-h-[500px]
                relative
            '
        >
            < img 
                src={HeroIMG} 
                alt="Dai Hero" 
                className='
                    object-cover 
                '
            />
            <div
                className='
                    
                    absolute
                    top-1/2
                    left-1/2
                    transform
                    -translate-x-1/2
                    -translate-y-1/2
                    text-center

                    flex
                    flex-col
                    gap-4
                    
                    w-[90%]

                    max-w-[800px]

                    max-five-hundred:gap-2

                    max-three-hundred:w-[95%]
                '
                
            >
                <div
                    className='
                        flex
                        flex-col
                        sm:gap-4
                        gap-2
                        py-8
                        p-4
                        bg-slate-200/75
                        
                        rounded

                        max-five-hundred:py-5
                        max-four-hundred:py-4
                        max-four-hundred:gap-1
                    '
                >
                    <h1
                        className='
                            font-bold

                            text-6xl
                            
                            max-seven:text-5xl
                            max-six-hundred:text-4xl
                            max-five-hundred:text-3xl
                            max-four-hundred:text-2xl
                        '
                    >Utah Design & Build</h1>
                    <p
                        className='

                            font-semibold
                            text-3xl
                            max-seven:text-2xl
                            max-six-hundred:text-xl
                            max-five-hundred:text-base
                            max-four-hundred:text-sm
                            max-three-hundred:text-xs
                        '
                    >
                        From modern makeovers to timeless renovations, our experts bring your vision to life.
                    </p>
                </div>
                <button
                    className='
                        shadow-md
                        px-10
                        py-2
                        bg-[#27327f]
                        text-white
                        font-semibold
                        text-lg
                        uppercase
                        rounded-md
                        mx-auto
                        cursor-pointer

                        hover:bg-[#3e3358]

                        max-five-hundred:text-base
                        max-four-hundred:text-sm
                        max-three-hundred:text-xs
                        max-four-hundred:px-6
                        max-three-hundred:px-4
                    '
                >
                    Free Consultation
                </button>
            </div>
        </div>
    )
}
