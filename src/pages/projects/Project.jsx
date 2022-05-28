import { Link } from 'react-router-dom'
import feature from '../../assets/svg/features.svg'
import touch from '../../assets/svg/touch.svg'
import Session from '../../assets/svg/session.svg'



function Project() {

  return (
    <div>
      <header className='flex flex-col'>
          <h3 className='text-3xl px-10 font-bold'>Just a touch</h3>
          <div className=''>
              <img src={feature} alt="feature" className='h-48 object-cover w-full'/>
          </div>
      </header>

      <section className='px-6 md:px-48 py-8 md:py-20'>
        <p className='flex justify-items-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo aut cumque doloribus dolor beatae excepturi. Eos earum, esse aliquam tempore distinctio accusantium nihil reiciendis adipisci ut laborum sunt expedita.
          Laborum, reiciendis ullam ipsum quam quas cupiditate aliquid, deleniti, dolore excepturi doloremque nihil provident explicabo. Sequi, vitae odio enim voluptatibus iure deserunt repudiandae laborum provident incidunt animi libero doloribus! Porro.
          Nam facilis ullam ex, quo consectetur at earum sit totam maxime dolores debitis distinctio nulla eaque ipsa quae corrupti quas rerum laudantium iure eum molestiae vero cupiditate quasi? Nulla, dolore!
          Eveniet, cupiditate magnam. Quas corporis deleniti aut atque, quae ab rerum. Nulla reiciendis, reprehenderit necessitatibus beatae nemo magni sequi quos impedit ea autem, sed tempore ut amet accusantium, numquam minima.
          Eligendi, autem! Repellat, illo in! Libero in delectus quos officia minus, corporis veritatis quam impedit porro fugit facere aspernatur consectetur maxime odio dolore velit a eos hic aliquid commodi debitis!
        </p>
      </section>

      <section className='flex justify-center items-center py-24   bg-gray-100'>
        <div className='w-64 h-64 relative'>
          <div className="absolute inset-0 bg-cover z-0 rotate-60 rounded w-72 h-80" style={{ backgroundImage: `url(${touch})` }}></div>
          <div className='absolute -left-16 -top-8 text-4xl font-black'>ENJOY THE MOMENT</div>
        </div>
      </section>

      <section className='flex justify-center py-6'>

        <div className="h-full">
          <div className="container md:mx-auto lg:px-20" >
            <div className='md:grid md:grid-cols-3 h-full pb-40'>

              <div className="md:w-64">
                <div className="hover:text-gray-800 py-12 pb-3 mt-20 md:mt-72 h-5/6 relative bg-purple-100 group hover:bg-purple-300 cursor-pointer transition ease-out duration-300"> 
                  <div>
                      <div className="hidden md:block w-4 h-1/5 bg-tertiary-100	absolute right-0 -top-12 group-hover:bg-purple-200"></div>
                      <img src="https://i.ibb.co/FzkhpcD/pngegg.png" alt="https://www.pngegg.com/en/png-nllal/download" />
                  </div>
                  <div className="px-7 mt-20">
                      <h1 className="text-3xl font-bold group-hover:text-gray-600 transition ease-out duration-300">01.</h1>
                      <h2  className="text-1xl mt-4 font-bold">Roof light lamp</h2>
                      <p className="mt-2 opacity-60 group-hover:opacity-70 ">Diverse collection of roof lights of quality</p>
                  </div>
                </div>
              </div>
              <div className="md:w-64">
                <div className="hover:text-gray-800 py-12 pb-3 mt-5 md:mt-32 h-5/6 relative bg-indigo-100 group hover:bg-indigo-300 cursor-pointer transition ease-out duration-300"> 
                    <div>
                        <div className="hidden md:block w-4 h-1/5 bg-secondary-300	absolute right-0 -top-12 group-hover:bg-indigo-300"></div>
                        <img src="https://i.ibb.co/JB4GWMJ/pngegg-1.png" alt="https://www.pngegg.com/en/png-zquqj/download" />
                    </div>
                  <div className="px-7 mt-20">
                        <h1 className="text-3xl font-bold group-hover:text-gray-600 transition ease-out duration-300">02.</h1>
                        <h2  className="text-1xl mt-4 font-bold">Lounge Chair</h2>
                        <p className="mt-2 opacity-60 group-hover:opacity-70 ">Comfortable collection of perfect lounge chairs</p>
                    </div>
                </div>
              </div>
              <div className="md:w-64">
                <div className="hover:text-gray-800 py-12 pb-3 mt-5 h-4/6 relative bg-red-100 group hover:bg-red-300 cursor-pointer transition ease-out duration-300"> 
                    <div>
                        <div className="hidden md:block w-4 h-1/5 bg-secondary-200 absolute left-0 -bottom-12 group-hover:bg-red-200"></div>
                        <img src="https://i.ibb.co/MgnH44p/pngegg-2.png" alt="https://www.pngegg.com/en/png-epwii/download" />
                    </div>
                    <div className="px-7 mt-5">
                        <h1 className="text-3xl font-bold group-hover:text-gray-600 transition ease-out duration-300">03.</h1>
                        <h2  className="text-1xl mt-4 font-bold">Scandinavia Couch</h2>
                        <p className="mt-2 opacity-60 group-hover:opacity-70 ">Best selection of scandinavia couch for your home</p>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

        {/* Book a session */}
        <section className='h-56 flex flex-col justify-around items-center ' style={{ backgroundImage: `url(${Session})` }}>
            <div className="">
                <h4 className="md:text-5xl text-3xl font-bold text-white text-center">BOOK A SESSION</h4>
            </div>
            <div>
                <Link to='/session' className='block bg-secondary-100 text-white font-bold px-10 py-3 text-xs rounded-full tracking-wider'>Book Now</Link>
            </div>
        </section>
        
    </div>
  )
}

export default Project