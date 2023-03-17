import { maveairlogo, logo1, notification, vector, logincurve } from '../assets/all'
import { sidebarMaps } from './maps'
const Nav = ({ show, setShow }) => {

    return (
        <>
            <article className={`fixed flex flex-col left-0 top-0 bg-primary ${show ? 'w-4/5' : 'w-0'} z-10 h-screen`}>
                <div className='h-1/4 p-6 flex items-center justify-center'>
                    <img src={maveairlogo} alt='logo' />
                </div>
                {
                    show ? (
                        <div className='bg-white h-3/4 p-6 side-bottom'>
                            <div className='flex flex-col space-y-8'>
                                {
                                    sidebarMaps.map((option) => {
                                        return (
                                            <div key={option.name} className='flex flex-row space-x-12 cursor-pointer'>
                                                <img src={option.image} alt={option.name} />
                                                <span>{option.name}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='absolute left-0 right-0 bottom-0 p-6 flex flex-row space-x-12 hover:shadow-sm cursor-pointer'>
                                <img src={logincurve} alt='logout' />
                                <span>Logout</span>
                            </div>
                        </div>
                    ) : (<></>)
                }

            </article>
            <nav className='p-6 md:px-12 md:py-4'>
                <div className='flex justify-between flex-row'>
                    <div><img src={notification} alt='notification' className='hidden sm:block' /></div>

                    <div><img src={logo1} alt='logo' /> </div>
                    <div onClick={() => setShow(!show)} className='z-10 cursor-pointer'><img src={vector} alt='vector' /></div>


                </div>
            </nav>
        </>

    )
}

export default Nav