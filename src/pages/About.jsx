import { Link } from 'react-router-dom'
import AboutImage from '../assets/svg/about.svg'
import AboutOne from '../assets/svg/aboutOne.svg'
import AboutTwo from '../assets/svg/aboutTwo.svg'
import AboutThree from '../assets/svg/aboutThree.svg'
import AboutFour from '../assets/svg/aboutFour.svg'
import Session from '../assets/svg/session.svg'

function About() {
  return (
    <div className=''>

      <section className='flex flex-col py-16'>
        <h3 className='px-16 font-bold text-4xl'>ABOUT US</h3>
        <div className="md:px-64 px-8">
          <p className='font-semibold inline-block'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem in vel est a nisi similique consectetur laborum accusamus rerum. Eos, laboriosam. Nostrum repellendus dolorem assumenda maiores harum culpa, perspiciatis eius.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatem, quisquam libero enim et illum asperiores quidem corporis! Iste tenetur molestiae modi quia quod obcaecati minus sapiente amet eaque accusantium.
            Harum voluptas doloremque corrupti reiciendis quas libero facilis explicabo esse ut molestias a quasi omnis sequi culpa error dolor, nulla deleniti earum quidem accusantium nam suscipit ex! Temporibus, ipsum repellendus.
            Perferendis ipsumis ex fugiat est, voluptatem ducimus architecto? Quae at maiores itaque quibusdam laboriosam labore, praesentium ea eum fuga doloremque maxime totam quisquam minima eveniet!
          </p>
        </div>
      </section>

      <section>
        <div>
          <img src={AboutImage} alt="About" className='object-cover'/>
        </div>
      </section>

      <section className='bg-tertiary-200 py-6 h-96 flex justify-center items-center'>
      <div class="mx-auto p-12">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 animate-pulse hover:animate-none opacity-75" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
        </svg>
      </div>
      </section>

      <section className='bg-gray-900 h-full flex flex-col text-white py-10'>
        <h3 className='px-20 text-3xl md:text-5xl  font-bold'>OUR PROCESS</h3>

        <div className="md:grid md:grid-cols-4 md:gap-6 px-6 md:mt-6">

          <div className="md:flex md:flex-col gap-4 md:justify-self-center items-center mb-8 px-2">
            <h3 className='text-2xl mb-3 font-semibold'>Book a session</h3>
            <p>
            This is the first stage of our process. When you book us we provide all packages needed on the platform ranging from sight seeing to getting the job done. We can only know what’s on mind when you book us. We only offer four (4) kind of services and they include;
              <ul className='list-decimal ml-4'>
                <li>Consultancy</li>
                <li>Visuals</li>
                <li>Partial Deco</li>
                <li>Full Deco</li>
              </ul>
              Book now! Online appointment scheduling and booking. Be rest assured, we don’t dissappoint our track record speaks for us.
            </p>
          </div>
          <div className="md:flex md:flex-col md:justify-self-center items-center mb-8 px-2">
            <h3 className='text-2xl mb-3 font-semibold'>Possible visuals</h3>
            <p>
            After booking a session with us, we go for sight seeing where we take notes of so many things. We collect enough data in this stage in other to satisfy you without leaving any stone untouched. Most client have idea of what they want but can’t really visualize it. We’ve got you covered. We bring your ideas to live using our modern 3D visual software to enhance the visuals of the idea. We then make possible suggestions and catalogue of what might be possible.
            Also, we don’t just assume, we have a streamlined process to providing the best scenerio that suit our clients in all industry. 
            </p>
          </div>
          <div className="md:flex md:flex-col md:justify-self-center items-center mb-8 px-2">
            <h3 className='text-2xl mb-3 font-semibold'>Make payment</h3>
            <p>
            Payment is the next thing on the process. This might look scary buh don’t worry as we’ve got the perfect payment plan and system just for you. Our payments are flexible. After possible visuals we then draft out a budget to you for just visualizing or we can add execution to it if you want.
            Don’t worry, we are pocket friendly.
            </p>
          </div>
          <div className="md:flex md:flex-col md:justify-self-center items-center mb-8 px-2">
            <h3 className='text-2xl mb-3 font-semibold'>Project delivered</h3>
            <p>
            Depending on what you want, we can just provide the visual of the kind of feel you want or we can run partial deco package where we handle the execution alone without worrying on the kind of materials inplace (though we’ll suggestion the best options and possible vendors) or we go all in with the full deco package where we get the necessary materials, then, execute the desired visual while you relax and watch us do what we know how to do best. We give specific days to when the project will be done and also employ our clients to come for regular check on what is going on while we deliver the best calmness as expected.
            </p>

          </div>

        </div>

        <div className='md:grid md:grid-cols-4 md:gap-6 px-6 h-48 mb-8 hidden'>
          <div className='rounded' style={{ backgroundImage: `url(${AboutOne})` }}></div>
          <div className='rounded' style={{ backgroundImage: `url(${AboutTwo})` }}></div>
          <div className='rounded' style={{ backgroundImage: `url(${AboutThree})` }}></div>
          <div className='rounded' style={{ backgroundImage: `url(${AboutFour})` }}></div>
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

export default About