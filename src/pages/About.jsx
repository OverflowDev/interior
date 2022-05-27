import AboutImage from '../assets/svg/about.svg'
import AboutImage1 from '../assets/svg/aboutOne.svg'
import AboutImage2 from '../assets/svg/aboutTwo.svg'

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

      <section className='bg-secondary'>

      </section>

    </div>
  )
}

export default About