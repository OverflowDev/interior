
import feature from '../../assets/svg/features.svg'

function Project() {

  return (
    <div>
        <header className='flex flex-col'>
            <h3 className='text-3xl px-10 font-bold'>Just a touch</h3>
            <div className=''>
                <img src={feature} alt="feature" className='h-48 object-cover w-full'/>
            </div>
        </header>
        
    </div>
  )
}

export default Project