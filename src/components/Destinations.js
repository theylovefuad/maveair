import React from 'react'
import { more } from '../assets/all'
import { destinationsMaps } from './maps'

const Destinations = () => {
    return (
        <div className='p-6 mt-6 bg-white'>
            <h1 className='text-left mb-4'>Top Destinations</h1>
            <div className='flex flex-col space-y-3'>
                {
                    destinationsMaps.map((destination) => {
                        return (
                            <div key={destination.name} className='w-full destination flex items-center justify-between px-6'>
                                <span>{destination.name}, {destination.code}</span>
                                <img src={more} alt='' title='Book Now' className='cursor-pointer' />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Destinations