import React, {useState} from 'react'
import DaiTestimonialCard from './DaiTestimonialCard'
import Renovation1 from '../../assets/dai/Renovation1.png';
import Renovation2 from '../../assets/dai/Renovation2.png';
import Renovation3 from '../../assets/dai/Renovation3.png';
import Renovation4 from '../../assets/dai/Renovation4.png';
import Renovation5 from '../../assets/dai/Renovation5.png';
import Renovation6 from '../../assets/dai/Renovation6.png';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonialData = [
    {
        name: "Andrew Shultz",
        text: "Daishaun and Tony transformed our outdated kitchen into a modern masterpiece. Their attention to detail and commitment to quality made the whole process stress-free. We couldn't be happier with the results!",
        bgColor: "bg-red-300",
        images: [
            
            Renovation2, 
            
            Renovation4, 
           
            Renovation6
        ]
    },
    {
        name: "Will Doe",
        text: "Outstanding work on our bathroom renovation! The team's expertise and professionalism exceeded our expectations. They completed the project on time and within budget.",
        bgColor: "bg-blue-300",
        images: [
            
            Renovation4, 
            Renovation5, 
            Renovation6
        ]
    },
    {
        name: "Jill Doe",
        text: "Outstanding work on our bathroom renovation! The team's expertise and professionalism exceeded our expectations. They completed the project on time and within budget.",
        bgColor: "bg-green-300",
        images: [
            Renovation1, 
            Renovation2, 
            Renovation3, 
            
        ]
    },
];

export default function DaiTestimonial() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
    };


    return (
        <div className={`
            flex
            flex-col
            sm:gap-12
            gap-10
            ${testimonialData[currentIndex].bgColor}
            transition-colors
            duration-300
            p-10
        `}>
            <DaiTestimonialCard testimonial={testimonialData[currentIndex]} />

            

            <div className="flex justify-evenly max-w-xl w-full mx-auto ">
                <button
                    onClick={handlePrevious}
                    className="
                        px-6 
                        py-2 
                        bg-black/40 
                        text-white 
                        rounded-full 
                        hover:bg-black/60 
                        transition
                        flex
                        items-center
                        gap-2
                    "
                >
                    <FaChevronLeft />
                    <span>Prev</span>
                </button>

                <button
                    onClick={handleNext}
                    className="
                        px-6 
                        py-2 
                        bg-black/40 
                        text-white 
                        rounded-full 
                        hover:bg-black/60 
                        transition
                        flex
                        items-center
                        gap-2
                    "
                >
                    <span>Next</span>
                    <FaChevronRight />
                </button>
            </div>
        </div>
    )
}
