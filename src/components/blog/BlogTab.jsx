import {useState} from 'react'


function BlogTab({blog}) {

  return (
    <div className='mt-6'>

      <div className='md:flex md:items-center ml-12'>

        <div className='flex flex-wrap md:flex mt-4'>
          <button className='rounded-full font-semibold text-white mb-4 mr-4 py-2 px-8 border-2 border-primary bg-primary'>
              All
          </button>
          <button className='rounded-full hover:bg-primary hover:bg-opacity-75 hover:border-0 hover:text-white  font-semibold text-primary mb-4 mr-4 py-2 px-8 border-2 border-primary '>
              Furniture
          </button>
          <button className='rounded-full hover:bg-primary hover:bg-opacity-75 hover:border-0 hover:text-white font-semibold text-primary mb-4 mr-4 py-2 px-8 border-2 border-primary '>
              Wall
          </button>
          <button className='rounded-full hover:bg-primary hover:bg-opacity-75 hover:border-0 hover:text-white font-semibold text-primary mb-4 mr-4 py-2 px-8 border-2 border-primary '>
              Indoor
          </button>
          <button className='rounded-full hover:bg-primary hover:bg-opacity-75 hover:border-0 hover:text-white font-semibold text-primary mb-4 mr-4 py-2 px-8 border-2 border-primary '>
              Outdoor
          </button>


      </div>
        {/* Search  */}
        <div className="relative text-primary md:ml-32">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" className="p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </span>
          <input 
            type="search" 
            name="q" 
            className="py-3 text-sm text-primary bg-gray-300 rounded-full pl-10" placeholder="Enter search here" 
            onChange={(e) => (e.target.value)}
          />
        </div>
      </div>

    </div>
  )
}

export default BlogTab