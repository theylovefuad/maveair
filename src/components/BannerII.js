import React from 'react'
import { rafiki2 } from '../assets/all'

const BannerII = () => {
    return (
        <div className='bg-white p-6 mt-6'>
            <div className='flex flex-row space-between'>
                <div>
                    <h1 className='text-left'>Book an International Delivery now</h1>
                    <div className='delivery__button mt-6'>
                        <div className='delivery__button-inside bg-primary flex justify-center items-center text-white cursor-pointer'>Book Now</div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={rafiki2} alt='' />
                </div>
            </div>
        </div>
    )
}

export default BannerII