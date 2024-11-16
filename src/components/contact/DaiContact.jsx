import React from 'react'

export default function DaiContact() {
    return (
        <div
            className='
                py-10
                md:py-16

                lg:flex
                lg:px-10
                lg:gap-10
            '
        >
            <div
                className='
                    flex
                    flex-col
                    gap-2
                    max-seven-hundred:p-6
                    mx-auto
                    max-w-xl
                '
            >
                <h2
                    className='
                        font-semibold
                        text-4xl
                        max-five-hundred:text-3x
                    '
                >Ready to Transform Your Home?</h2>
                <p
                    className='
                        
                        text-base
                        max-five-hundred:text-lg
                    '
                >
                    From concept to completion, we're here to make your renovation dreams a reality. Contact us today for a free consultation and let’s start building your dream home!
                </p>
            </div>

            <form 
                className='
                    
                    space-y-8
                    p-10
                    mx-auto
                    max-w-xl

                    lg:w-full
                    lg:mt-0

                    md:mt-10
                    md:border-red-500

                    bg-indigo-600
                '
            >

                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className=" text-xl font-semibold text-white">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                            id="first-name"
                            name="first-name"
                            type="text"
                            autoComplete="given-name"
                            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className=" text-xl font-semibold text-white">
                        Last name
                    </label>
                    <div className="mt-2">
                        <input
                            id="last-name"
                            name="last-name"
                            type="text"
                            autoComplete="given-name"
                            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-4">
                    <label htmlFor="email" className=" text-xl font-semibold text-white">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="col-span-full">
                    <label htmlFor="description" className=" text-xl font-semibold text-white">
                        Description
                    </label>
                    <div className="mt-2">
                        <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        defaultValue={''}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="
                        rounded-md 
                        bg-black
                        px-8
                        py-2
                        text-sm 
                        font-semibold 
                        text-white 
                        shadow-sm 
                        hover:bg-indigo-500 
                        focus-visible:outline 
                        focus-visible:outline-2 
                        focus-visible:outline-offset-2 
                        focus-visible:outline-indigo-600
                        
                    "
                >
                    Submit
                </button>

            </form>

        </div>
    )
}
