import React from 'react'
import { arrowright } from '../assets/all'
import { servicesMaps } from './maps'

const Services = () => {
    return (
        <div className='w-full mt-8 bg-white px-6'>
            <div className='flex flex-row justify-between'>
                <div className='font-bold'>Services</div>
                <div className='flex flex-row'><span className='text-primary'>See All</span><img src={arrowright} alt='' /></div>
            </div>
            <div className='flex flex-row space-x-6 overflow-scroll scroll py-6'>
                {
                    servicesMaps.map((service) => {
                        return (
                            <div key={service.name} className='flex items-center justify-center flex-col space-y-2 bg-secondary services rounded-md'>
                                <div className='rounded-full bg-white p-2'><img src={service.image} alt={service.name} /></div>
                                <span>{service.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Services