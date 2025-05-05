import Image from 'next/image'
import React from 'react'

interface Props {
    
}

const LandingHeader = (props: Props) => {
    return (
        <div className='w-full flex items-center sticky top-0 z-50 px-4 shadow-sm shadow-gray-50  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90'>
            <div className='flex items-center gap-6'>
                <div>
                    <Image src='/logo.png' width={140} height={140} alt='stamply logo'/>
                </div>
                <ul className='flex gap-5 text-[1.1rem] text-[#54616c] font-medium max-md:hidden'>
                    <li>
                        <a href="" className='px-4 py-2 rounded-4xl hover:bg-gray-100 hover:text-[#000000d3]'>Features</a>
                    </li>
                    <li>
                        <a href="" className='px-4 py-2 rounded-4xl hover:bg-gray-100 hover:text-[#000000d3]'>How It Works</a>
                    </li>
                    <li>
                        <a href="" className='px-4 py-2 rounded-4xl hover:bg-gray-100 hover:text-[#000000d3]'>Why Stamply.ai</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LandingHeader
