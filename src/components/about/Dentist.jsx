import React from 'react'

import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import DentistImage1 from '../../assets/dentist/SaraDentist.png'
import DentistImage2 from '../../assets/dentist/TomasDentist.png'
import DentistImage3 from '../../assets/dentist/TimDentist.png'
import DentistImage4 from '../../assets/dentist/SueDentist.png'

export default function Dentist() {
    const scrollRef = useRef(null);

    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    // Check scroll position
    const checkScrollPosition = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setIsAtStart(scrollLeft <= 0);
            setIsAtEnd(Math.ceil(scrollLeft + clientWidth) >= scrollWidth);
        }
    };

    // Add scroll event listener
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', checkScrollPosition);
            // Initial check
            checkScrollPosition();

        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', checkScrollPosition);
            }
        };
    }, []);

    

    return (
        <div
            className='
                flex
                flex-col
                gap-8
                max-w-4xl
                mx-auto
            '
        >
            <h2
                className='
                    font-bold
                    text-center
                    md:text-5xl
                    max-seven-hundred:text-4xl
                    max-four-hundred:text-3xl
                '
            >
                Meet Our Experienced Dental Team
            </h2>

            


            <div className='relative'>

                {!isAtStart && (
                    <button
                        className='
                            absolute
                            left-0
                            top-1/2
                            bg-black/40
                            text-white 
                            p-2
                            rounded-full
                            z-10
                            -ml-5
                        '
                    >
                        <FaChevronLeft />
                    </button>
                )}

                <div
                    ref={scrollRef}
                    className='
                        flex
                        flex-row
                        justify-start
                        overflow-x-auto
                        gap-4
                        h-96
                        scrollbar-hide
                        
                    '
                >
                    <img
                        src={DentistImage1} 
                        alt="Sara the Dentist"
                        className='
                            object-cover
                            rounded-lg
                        '
                    />
                    <img 
                        src={DentistImage2} 
                        alt="Sara the Dentist"
                        className='
                            object-cover
                            rounded-lg
                        ' 
                    />
                    <img
                        src={DentistImage3} 
                        alt="Tim the Dentist"
                        className='
                            object-cover
                            rounded-lg
                        '
                    />
                    <img
                        src={DentistImage4} 
                        alt="Sue the Dentist"
                        className='
                            object-cover
                            rounded-lg
                        '
                    />
                </div>

                {!isAtEnd && (
                    <button
                        className='
                            absolute
                            right-0
                            

                            top-1/2
                            bg-black/40
                            text-white 
                            p-2
                            rounded-full
                            z-10
                            -mr-5
                        '
                    >
                        <FaChevronRight />
                    </button>
                )}

            </div>


            <div
                className='
                    flex
                    flex-col
                    gap-4
                '
            >
                <p
                    className='
                        font-bold
                        text-center
                        md:text-4xl
                        max-seven-hundred:text-3xl
                        max-four-hundred:text-2xl

                        max-six-hundred:text-start
                    '
                >Our Amazing Dental Team</p>
                <p
                    className='
                        text-xl
                        text-center
                        max-six-hundred:text-start
                    '
                >
                    Our team is proud to bring quality dental care to Orlando. 
                    Our dentists are dedicated to helping patients of all ages 
                    achieve the healthy, confident smiles they deserve. We offer 
                    personalized treatments, from general dentistry to advanced 
                    orthodontic care, all while focusing on your comfort and 
                    long-term oral health.
                </p>
            </div>
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
                    max-w-lg
                    w-full
                    mx-auto
                    max-six-hundred:w-3/4
                '
            >Meet The Team</button>
        </div>
    )
}
