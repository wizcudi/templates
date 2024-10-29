import React from 'react'
import FB from '../../assets/caroldental/FB.png'
import IG from '../../assets/caroldental/IG.png'
import Twitter from '../../assets/caroldental/Twitter.png'


export default function CarolFooter() {
    return (
        <div className='
            bg-beige
            
            flex
            flex-col
            w-full
            max-w-[1300px]
            gap-10
            gap-y-14
            p-10
        '>
            <h2 className='
                text-4xl
            '><span className='
                
                border-b-2
                border-brand-purple
            '>Sterriton <br></br> Branch  </span></h2>
            <div className='
                flex
                flex-col
                md:flex-row
                justify-between
                gap-6

                
            '>
                <div>
                    <p className='
                        text-xl
                        font-semibold
                    '>This establishment is wheelchair accessible.</p>
                </div>
                <div className='
                    flex
                    flex-col
                    justify-between
                    gap-4
                    
                '>
                    <p className='text-xl'>LOCATION</p>
                    <p className='
                        font-semibold
                    '>123 Anywhere St. <br></br> Any City, ST 12345</p>
                    <p>(123) 456-7890</p>
                    <p>hello@reallygreatsite.com</p>
                </div>
                <div className='
                    flex
                    flex-col
                    justify-between
                    gap-4
                    
                '>
                    <p className='
                        text-xl
                        uppercase
                    '>Clinic Hours</p>
                    
                    <div>
                        <p className='
                            font-semibold
                        '>Monday, Wednesday & Friday</p>
                        <p>9:00am to 5:00pm</p>
                    </div>

                    <div>
                        <p className='
                            font-semibold
                        '>Tuesday, Thursday & Saturday</p>
                        <p>8:00am to 4:00pm</p>
                    </div>

                    <p className='
                        font-semibold
                    '>Closed on Sundays</p>
                </div>
                
                
            </div>

            <div className='
                flex
                flex-row
                gap-5
                justify-end

                
            '>
                <img 
                    src={FB} 
                    alt="Facebook Icon" 
                    className='
                        w-[40px]
                        h-[40px]
                        cursor-pointer
                    '
                />
                <img 
                    src={IG} 
                    alt="Instagram Icon" 
                    className='
                        w-[40px]
                        h-[40px]
                        cursor-pointer
                    '
                />
                <img 
                    src={Twitter} 
                    alt="Twitter Icon" 
                    className='
                        w-[40px]
                        h-[40px]
                        cursor-pointer
                    '
                />
            </div>
        </div>
    )
}
