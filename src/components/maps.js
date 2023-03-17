import { ellipse, truckfast, box, securityuser, tag, truck } from "../assets/all"

const sidebarMaps = [
    {
        name: 'Profile',
        image: ellipse
    },
    {
        name: 'History',
        image: box
    },
    {
        name: 'Shipping',
        image: truckfast
    },
    {
        name: 'Offers and Promo',
        image: tag
    },
    {
        name: 'Privacy Policy',
        image: securityuser
    }
]

const servicesMaps = [
    {
        name: 'Shipping',
        image: truckfast
    },
    {
        name: 'Track Orders',
        image: box
    },
    {
        name: 'Moving',
        image: truck
    }
]

const destinationsMaps = [
    {
        name: 'Paris',
        code: 'FR'
    },
    {
        name: 'Toronto',
        code: 'CA'
    },
    {
        name: 'Lagos',
        code: 'NG'
    }
]

export { sidebarMaps, servicesMaps, destinationsMaps }