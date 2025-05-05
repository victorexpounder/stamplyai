import React from 'react'

interface Props {
    
}

const Hero = (props: Props) => {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='flex gap-2'>
                <div>
                    <video preload="auto" className="w-full h-auto rounded-4xl max-w-[320px] lg:max-w-[420px]" poster="https://sb.kaleidousercontent.com/67418/840x560/686381d375/emilia-poster.jpg"   src="https://sb.kaleidousercontent.com/67418/x/681f13b37d/emilia_compressed.mp4"></video>
                    <div>
                        <h1>Stamp And Sign Documents</h1>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Hero
