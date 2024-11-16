import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export default function DaiFooter() {
    return (
        <div 
            className='
                py-10
                max-six-hundred:py-0
            '
        >

            <div className='
                flex
                flex-col
                gap-14
                w-[90%]
                mx-auto
                py-20

                rounded-xl
                border-2
                border-dai-30-percent

                bg-dai-60-percent

                text-dai-30-percent

                lg:flex-row
                lg:justify-between
                lg:px-10
                
                max-six-hundred:w-full
                max-six-hundred:rounded-none
                
                max-six-hundred:border-none
            '>
                <div 
                    className='
                        flex
                        justify-center
                        gap-10
                        text-3xl
                    '
                >
                    <FaInstagram className='cursor-pointer'  />
                    <FaFacebook className='cursor-pointer'  />
                    <FaTwitter className='cursor-pointer' />
                    <FaYoutube className='cursor-pointer'  />
                </div>

                <div
                    className='
                        text-sm
                        sm:text-base
                        text-center
                    '
                >
                    <p>&copy; {new Date().getFullYear()} Utah Design & Build, Inc. All rights reserved.</p>
                </div>
            </div>

        </div>
    )
}
