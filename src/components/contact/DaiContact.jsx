import React from 'react'

export default function DaiContact() {
    return (
        <div
           id='contact'
            className='
                sm:mt-10
                grid
                grid-cols-2
                max-nine:grid-cols-1
                py-16
                px-8
                gap-6
                max-w-[1000px]
                mx-auto
            '
        >
            <div
                
                className='
                    flex
                    flex-col
                    gap-2
                    
                    text-dai-30-percent
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
                >Transform Your Home!</h2>
                <p
                    className='
                        text-base
                        max-four-hundred:text-sm
                        max-three-hundred:text-xs
                    '
                >
                    From concept to completion, we're here to make your renovation dreams a reality. Contact us today for a free consultation and let’s start building your dream home!
                </p>
            </div>

            

            <form 
                className='
                    space-y-8
                    p-8
                    bg-dai-30-percent
                    max-nine:max-w-[580px]
                    w-full
                    mx-auto
                    
                '
            >

                <div className="sm:col-span-3">
                    <label htmlFor="first-name" 
                    className=" text-xl font-semibold text-dai-60-percent">
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
                    <label htmlFor="last-name" 
                    className=" text-xl font-semibold text-dai-60-percent">
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
                    <label htmlFor="email" 
                    className=" text-xl font-semibold text-dai-60-percent">
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
                    <label htmlFor="description" 
                    className=" text-xl font-semibold text-dai-60-percent">
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
                        bg-dai-accent-one
                        px-8
                        py-2
                        text-base 
                        font-semibold 
                        text-dai-30-percent 
                        shadow-sm 
                        hover:bg-dai-60-percent
                    "
                >
                    Submit
                </button>

            </form>

        </div>
    )
}
