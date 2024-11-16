import React from 'react'
import Quotes from '../../assets/caroldental/quotes.png'

export default function CarolTestimonial() {
    return (
        <div className='
            bg-brand-purple
            text-white
            flex
            flex-col
            w-full
            max-w-[1300px]
            justify-center
            items-center
            gap-20
            px-10
            py-20
            
        '>
            <div className='
                flex
                flex-col
                gap-2
            '>
                
                <h2 className='
                    text-3xl
                    text-center
                    border-b-2
                    border-white
                '>What my patients are saying</h2>
                <p className='
                    text-xl
                    text-center
                '>Reviews and Testimonials</p>
            </div>

            <div className='
                flex
                flex-col
                sm:flex-row
                gap-10
                gap-y-20
            '>
                <div className='
                    
                    flex
                    flex-col
                    gap-5
                '>
                    <img 
                        src={Quotes} 
                        alt="Quotes"
                        className='
                            h-8
                            w-8
                        ' 
                    />
                    <p>
                    Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.
                    </p>
                    <p>Casper Berkley</p>
                </div>
                <div className='
                    
                    flex
                    flex-col
                    gap-5
                '>
                    <img 
                        className='
                            h-8
                            w-8
                        ' 
                        src={Quotes} 
                        alt="Quotes" 
                    />
                    <p>
                    Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.
                    </p>
                    <p>Larissa Charter</p>
                </div>
                <div className='
                    
                    flex
                    flex-col
                    gap-5
                '>
                    <img 
                        className='
                            h-8
                            w-8
                        ' 
                        src={Quotes} 
                        alt="Quotes" 
                    />
                    <p>
                    Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.
                    </p>
                    <p>Kiara Austen</p>
                </div>
            </div>
        </div>
    )
}
