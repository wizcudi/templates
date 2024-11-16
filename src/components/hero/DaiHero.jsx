import React from 'react'
import HeroIMG from '../../assets/dai/UBD_Hero.png'

export default function DaiHero() {
    return (
        <div
            className='
                flex
                
                min-h-[500px]
                max-h-[550px]
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
                    

                    flex
                    flex-col
                    gap-4
                    
                    w-[90%]
                    max-w-[800px]
                    max-five-hundred:w-[95%]
                '
                
            >
                <div
                    className='
                        flex
                        flex-col
                        sm:gap-4
                        gap-2
                        py-10
                        px-4
                        bg-dai-60-percent/75
                        text-dai-30-percent
                        text-center
                        rounded
                    '
                >
                    <h1
                        className='
                            font-bold

                            text-6xl
                            
                            max-seven:text-5xl
                            max-six-hundred:text-4xl
                            max-three-hundred:text-3xl
                        '
                    >Utah Design & Build</h1>
                    <p
                        className='
                            font-semibold
                            text-2xl
                            max-five-hundred:text-base
                            
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
                        bg-dai-30-percent
                        text-dai-60-percent
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
