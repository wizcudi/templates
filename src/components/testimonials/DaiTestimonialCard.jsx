import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';



export default function DaiTestimonialCard({ testimonial }) {
    const scrollRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollAmount = container.offsetWidth; // Use container width for full image scroll
            
            const targetScroll = direction === 'right' 
                ? container.scrollLeft + scrollAmount
                : container.scrollLeft - scrollAmount;
            
            container.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    // Check scroll position
    const checkScrollPosition = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            
            // Add a small threshold (1px) for more reliable end detection
            const isEnd = Math.abs(scrollWidth - (scrollLeft + clientWidth)) <= 1;
            
            setIsAtStart(scrollLeft <= 0);
            // setIsAtEnd(Math.ceil(scrollLeft + clientWidth) >= scrollWidth);
            setIsAtEnd(isEnd);
        }
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        // Check position after images load
        const handleLoad = () => {
            checkScrollPosition();
        };

        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', checkScrollPosition);
            
            // Add load event listeners to all images
            const images = scrollContainer.getElementsByTagName('img');
            Array.from(images).forEach(img => {
                img.addEventListener('load', handleLoad);
            })

            // Initial check
            checkScrollPosition();

        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', checkScrollPosition);

                const images = scrollContainer.getElementsByTagName('img');
                Array.from(images).forEach(img => {
                    img.removeEventListener('load', handleLoad);
                });
            }
        };
    }, [testimonial]);

    return (
        <div >
            <div className="relative max-w-[1000px] mx-auto">
                {!isAtStart && (
                    <button
                        onClick={() => handleScroll('left')}
                        className="absolute left-0 top-1/2 bg-black/40 text-white p-2 rounded-full z-10 -ml-5"
                    >
                        <FaChevronLeft />
                    </button>
                )}

                <div
                    ref={scrollRef}
                    className="flex flex-row justify-start overflow-x-auto gap-5 h-96 scrollbar-hide"
                >
                    {testimonial.images.map((image, index) => (
                        <img 
                            key={index}
                            src={image}
                            alt={`Renovation ${index + 1}`}
                            className="object-cover rounded-lg"
                        />
                    ))}
                </div>

                {!isAtEnd && (
                    <button
                        onClick={() => handleScroll('right')}
                        className="absolute right-0 top-1/2 bg-black/40 text-white p-2 rounded-full z-10 -mr-5"
                    >
                        <FaChevronRight />
                    </button>
                )}
            </div>
            
            <div className="max-w-[1000px] mx-auto mt-6">
                <h2 className="italic text-2xl font-semibold">{testimonial.name}</h2>
                <div className="h-0.5 w-full bg-black mt-2 mb-2"></div>
                <p>{testimonial.text}</p>
            </div>
        </div>
    )
}
