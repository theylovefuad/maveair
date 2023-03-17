import React from 'react'
import { rafiki } from '../assets/all'

const Banner = () => {
    return (
        <div className='z-0 py-4 w-full bg-secondary flex items-center justify-center' id='banner'>
            <img src={rafiki} alt='rafiki' className='z-0' />
        </div>
    )
}

export default Banner