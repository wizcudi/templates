import React from 'react'
import carolbanner from '../../assets/caroldental/carolbanner.png'


export default function CarolAbout() {
    

    return (
        <div
            className='
                flex
                flex-col
                w-full
                max-w-[1300px]
                p-5
                pt-15
                pb-15
                gap-7

                md:flex-row
            '
        >
            <div className='
                text-brand-purple
                lg:w-1/2
            '>
                <h2 className='
                    text-3xl
                    font-bold
                    mb-2
                    
                '><span className='border-b-2 border-brand-purple'>Meet</span> <br></br> 
                <span className='border-b-2 border-brand-purple'>Dr. Elvira Montanez</span>
                </h2>
                <p className='
                    text-base
                '>Write a paragraph that talks about your dental practice here. Convince your prospective clients to choose you and your clinic for their dental needs by talking about your philosophy or your background.</p>
            </div>

            <div className='
                flex
                flex-col
                gap-4

                lg:w-1/2
            '>
                <img 
                    className='
                        m-auto
                    '
                    src={carolbanner} alt="Carol in Office" 
                />
                <ol className='

                    flex
                    flex-col
                    text-brand-purple
                    ml-6
                '>
                    <li className='
                        relative
                        mb-2
                        before:content-["\27A4"]
                        before:text-brand-orange
                        before:absolute
                        before:-left-6
                    '>
                        <p className='
                            text-lg
                            font-bold
                        '>Special Interests</p>
                        <p className='
                            text-base
                        '>Support your statements above with two convincing arguments on why you're the best choice. Flesh it out in these short paragraph columns.</p>
                    </li>
                    <li className='
                        relative
                        mb-2
                        before:content-["\27A4"]
                        before:text-brand-orange
                        before:absolute
                        before:-left-6
                    '>
                        <p className='
                            font-bold
                            text-xl
                        '>Associations</p>
                        <p className='
                            text-base
                        '>Support your statements above with two convincing arguments on why you're the best choice. Flesh it out in these short paragraph columns.</p>
                    </li>
                </ol>
            </div>
        </div>
    )
}
