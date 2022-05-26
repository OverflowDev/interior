import {Link} from 'react-router-dom'
import Faq from './Faq'
import Room from '../assets/svg/miniRoom1.svg'
import RoomOne from '../assets/svg/miniRoom2.svg'
import RoomTwo from '../assets/svg/miniRoom3.svg'
import feature from '../assets/svg/features.svg'
import unique from '../assets/svg/unique.svg'
import uniqueOne from '../assets/svg/unique2.svg'
import Session from '../assets/svg/session.svg'

function Home() {
  return (
    <>
    {/* Best at what we do  */}
    <section className="py-16 h-full flex flex-col items-center">
        <div className="">
            {/* Hide on Small screen  */}
            <h2 className="hidden md:block mb-4 text-center text-2xl lg:w-8/12 lg:mx-auto text-gray-900 font-semibold md:text-5xl">We are best at what we do</h2>
            {/* Hide on large Screen  */}
            <div className="md:hidden w-64 h-64 relative">
                <div className="absolute inset-0 bg-cover bg-center z-0 rotate-60 rounded w-72 h-80" style={{ backgroundImage: `url(${Room})` }}></div>
                <div className="absolute inset-0 bg-cover bg-center z-0 rotate-45 rounded w-72 h-80" style={{ backgroundImage: `url(${RoomOne})` }}></div>
                <div className="absolute inset-0 bg-cover bg-center z-0 rotate-12 rounded w-72 h-80" style={{ backgroundImage: `url(${RoomTwo})` }}></div>
                <div className="absolute inset-0 Z-10 text-center flex justify-center items-center text-5xl text-gray-900 font-bold">
                    We are the best at what we do 
                </div>
            </div>
        </div>

        <div className="flex flex-col items-center mt-36">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
            <h5 className='text-gray-400'>Scroll Down</h5>
        </div>  
    </section>

    {/* Featured Project  */}
    <section className='bg-gray-100 h-full flex flex-col m-auto p-auto'>
        <h3 className='ml-12 font-semibold text-5xl mt-8'>FEATURED PROJECTS</h3>

        <div className="flex overflow-x-scroll pb-10 scrollbar-hide">
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
                
                <div className="inline-block px-8 mr-7">
                    <div className="relative max-w-md w-96 h-96 py-4 px-8 my-16 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out object-contain">
                        <img src={feature} alt="Features" className='absolute inset-0 w-full h-full object-cover' />
                        <div className="absolute -left-14 top-40 -mt-16">
                            <div className="bg-white shadow-lg rounded w-44 h-44">
                                <div className="flex flex-col items-center">
                                    <h1 className='text-center font-bold text-4xl mt-3'>Just a touch</h1>
                                    <p className='mt-4 text-sm'>A full deco service</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className=" h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inline-block px-6 mr-7">
                    <div className="relative max-w-md w-96 h-96 py-4 px-8 my-16 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out object-contain">
                        <img src={feature} alt="Features" className='absolute inset-0 w-full h-full object-cover' />
                        <div className="absolute -left-14 top-40 -mt-16">
                            <div className="bg-white shadow-lg rounded w-44 h-44">
                                <div className="flex flex-col items-center">
                                    <h1 className='text-center font-bold text-4xl mt-3'>Just a touch</h1>
                                    <p className='mt-4 text-sm'>A full deco service</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className=" h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inline-block px-6 mr-7">
                    <div className="relative max-w-md w-96 h-96 py-4 px-8 my-16 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out object-contain">
                        <img src={feature} alt="Features" className='absolute inset-0 w-full h-full object-cover' />
                        <div className="absolute -left-14 top-40 -mt-16">
                            <div className="bg-white shadow-lg rounded w-44 h-44">
                                <div className="flex flex-col items-center">
                                    <h1 className='text-center font-bold text-4xl mt-3'>Just a touch</h1>
                                    <p className='mt-4 text-sm'>A full deco service</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className=" h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inline-block px-6 mr-7">
                    <div className="relative max-w-md w-96 h-96 py-4 px-8 my-16 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out object-contain">
                        <img src={feature} alt="Features" className='absolute inset-0 w-full h-full object-cover' />
                        <div className="absolute -left-14 top-40 -mt-16">
                            <div className="bg-white shadow-lg rounded w-44 h-44">
                                <div className="flex flex-col items-center">
                                    <h1 className='text-center font-bold text-4xl mt-3'>Just a touch</h1>
                                    <p className='mt-4 text-sm'>A full deco service</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className=" h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {/* best at what we do Booking  */}
    <section className='p-20 bg-tertiary-100 h-full flex flex-col items-center'>
        <h3 className="mb-4 text-center text-5xl lg:mx-auto text-gray-900 font-semibold md:text-6xl">We are best at what we do</h3>
        <div className='flex items-center justify-center p-6 md:w-6/12'>
            <p className='font-semibold text-gray-900'>
                Ile has been in the interior deco industry for over a decade now, so if you want that nice and unique touch to your house, workspace, office et.t.c. Ile is the right place for you.
            </p>
        </div>
        <div className='mt-7'>
            <Link to='/session' className='block bg-primary text-white px-10 py-3 text-xs font-light rounded-full tracking-wider'>Book Now</Link>
        </div>
    </section>

    {/* Satisfaction */}
    <section className='bg-white h-full flex items-center justify-center p-10'>
        <h3 className='text-5xl font-semibold'>Your satisfaction is what matters.</h3>
    </section>

    {/* We are Unique  */}
    <section className='bg-gray-100 md:h-screen flex md:p-8'>
        <div className='md:grid md:grid-cols-2 md:ml-12'>
            <div className="flex flex-col w-full p-6 justify-center">
                <h3 className='text-6xl font-bold'>We are unique</h3>
                <p className='text-gray-900 font-semibold mt-2'>
                    We understand empathy and at such we put our customers in our shoes in other to deliver what they want. Our approach to creating a unique feel is what we cherish, the experience you would love to have and the smile/laughter keeps us both going after work done.
                </p>
                <p className='text-gray-900 font-semibold mt-5'>
                    Customer Experience
                </p>
            </div>
            <div className="relative ml-12 w-80 h-80 mt-20 rounded-lg md:block hidden">
                <img src={unique} alt="Features" className='absolute inset-0 w-full h-full object-cover rotate-12' />
                <div className="absolute -bottom-36 -right-12 -mt-16">
                    <div className="rounded w-60 h-60">
                        <img src={uniqueOne} alt="Features" className='object-cover w-full h-full rotate-45' />
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* play */}
    <section className='h-full py-6 flex flex-col'>
        <div className="flex items-center justify-center">

            <div className="relative md:ml-12 md:w-80 md:h-80 w-64 h-64 mt-20 rounded-lg">
                <img src={Room} alt="Features" className='absolute inset-0 w-full h-full object-cover rotate-12' />
                <div className="rounded md:w-80 md:h-80 w-64 h-64 absolute md:inset-y-24 md:-right-48 inset-y-24 -right-30 -mt-16">
                    <img src={RoomOne} alt="Features" className='object-cover w-full h-full rotate-45' />
                    <div className='absolute -inset-0 mt-20'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
            </div>

        </div>
        <div className='bg-secondary-100 w-full h-10 mt-40 mb-18 p-1 -rotate-12'>
            <div className="grid grid-cols-3">
                <h3 className='text-white font-bold text-2xl'>Delivery</h3>
                <h3 className='text-white font-bold text-2xl'>Comfort</h3>
                <h3 className='text-white font-bold text-2xl'>Welcoming</h3>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg> */}
        </div>

    </section>

    {/* FaQ  */}
    <section className="text-gray-900 bg-gray-100 py-8 md:mt-36 mt-8">
        <div className="container px-5 py-8 mx-auto">
            <div className="text-center mb-8">
                <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                Frequently Asked Question
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                The most common questions about how our business works and what
                can do for you.
                </p>
            </div>
            
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="w-full lg:w-1/2 px-4 py-2">
                    <Faq />
                </div>
            </div>
        </div>
    </section>

    {/* I cant hear you  */}
    <section className='bg-white py-16 flex flex-col items-center'>
        <div className=''>
            <h3 className='text-6xl font-bold'>I CAN'T HEAR YOU</h3>
        </div>
        <div className="max-w-md py-4 px-16 bg-gray-200 shadow-lg rounded-lg mt-20 mb-2">
            <div className="flex justify-center md:justify-end -mt-16">
                <img className="w-20 h-20 object-cover rounded-full border-2 border-secondary-200" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt='Icon'/>
            </div>
            <div>
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                </div>
                <p className="mt-2 text-gray-900">
                    I actually gave Ile Wa a trial after I saw their online ads on Instagram and they have done more than what I can call amazing. They did an amazing job and provided a world class customer service during and after the project.
                </p>
            </div>
            <div className="flex justify-end mt-4">
                <a href="/" className="text-xl font-medium text-gray-900">Anjorin Folake</a>
            </div>
        </div>

        <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 hover:text-secondary-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-secondary-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </div>
    </section>

    {/* Book a session */}
    <section className='h-56 flex flex-col justify-center items-center p-16' style={{ backgroundImage: `url(${Session})` }}>
        <div className="">
            <h4 className="text-5xl text-white">BOOK A SESSION</h4>
        </div>
        <div>
            <Link to='/session' className='mt-5 block bg-secondary-100 text-white px-10 py-3 text-xs font-light rounded-full tracking-wider'>Book Now</Link>
        </div>
    </section>

    </>
  )
}

export default Home 