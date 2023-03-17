import React from 'react'

const Hero = () => {
    return (
        <div className='bg-white px-6 py-8 flex items-center justify-center'>
            <div className='max-w-sm flex flex-col items-center justify-center'>
                <h1 className='text-[#1a0220] mb-6'>Get your packages shipped and delivered safely to you.</h1>
                <p className='text-center mb-8'>We pick-up from your desired location at your preferred date and time to the comfort of your home.</p>
                <div className='separator mb-8'></div>
                <div className='borde'>
                    <div className='inside-borde bg-primary flex justify-center items-center text-white cursor-pointer'>Get Started</div>
                </div>
            </div>
        </div>
    )
}

export default Hero