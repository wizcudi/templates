import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/dai/dai_logo.jpg';

const navigation = [
    // { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Our Work', href: '#work' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
];

export default function DaiNav() {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClick = (e, href) => {
        e.preventDefault();
        // setIsOpen(false); // Close mobile menu
        
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav className="bg-dai-60-percent text-dai-30-percent">

            {/* Main navbar */}
            <div className="flex justify-between items-center max-w-[1000px] mx-auto py-8 px-6">
                <div className='
                    
                '>
                    < img 
                        src={logo} 
                        alt="Dai Logo" 
                        className='
                            h-8
                            w-8
                            rounded-full
                        '
                    />
                </div>

                {/* Desktop Nav */}
                <div className="hidden sm:flex w-4/5 justify-between">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-xl font-semibold hover:opacity-80"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Hamburger */}
                <button 
                    className="sm:hidden"
                    onClick={() => {
                        setIsOpen(!isOpen);
                        console.log('Button clicked, new state will be:', !isOpen); // Debug log
                    }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            <div 
                className={`
                    sm:hidden 
                    ${isOpen ? 'block' : 'hidden'}
                    border-t-2 
                    border-b-2
                    border-dai-30-percent
                    p-6
                `}
            >
                <div className="flex flex-col items-center gap-6">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-xl font-semibold hover:opacity-80"
                            onClick={(e) => handleClick(e, item.href)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>

        </nav>
    );
}
