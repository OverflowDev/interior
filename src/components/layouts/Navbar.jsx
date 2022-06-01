// import ScriptTag from 'react-scripts'
import Logo from '../../assets/svg/ilewa.svg'
import { useState } from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false)
    
  return (
    <div>

        <nav className='mb-2 mt-2'>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link to='/' className='flex'>
                                <img src={Logo} alt="Ilewa Logo" className='w-20'/>
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            
                            <Link to='/about' className='block font-semibold text-gray-600 py-2 pr-4 pl-3 tracking-wider'>About</Link>
                            <Link to='/blog' className='block font-semibold text-gray-600 py-2 pr-4 pl-3 tracking-wider'>Blog</Link>
                            <Link to='/session' className='block bg-gray-200 text-gray-700 p-3 text-xs font-bold rounded-full tracking-wider'>Book a Session</Link>
                        
                        </div>
                    </div>

                    {/* menu Icon */}
                    <div className="mr-2 flex md:hidden">
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            type='button'
                            className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >

                            <span className='sr-only'>Main Men</span>
                            {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                                ) :
                                (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                            )}

                        </button>
                    </div>
                    {/* menu Icon */}

                </div>
            </div>
            {isOpen ? (
                <div className="md:hidden" id='mobile-menu'>
                    <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <li>
                            <Link to='/about' className='block font-semibold text-gray-600 py-2 pr-4 pl-3 tracking-wider'>About</Link>
                        </li>
                        <li> 
                            <Link to='/blog' className='block font-semibold text-gray-600 py-2 pr-4 pl-3 tracking-wider'>Blog</Link>
                        </li>
                        <li>
                            <Link to='/session' className='inline-block bg-gray-200 text-gray-700 p-3 text-xs font-bold rounded-full tracking-wider'>Book a Session</Link>
                        </li>
                    </ul>
                </div>
            ) : (
                <></>
            )}

         </nav>

    </div>
  )
}

export default Navbar