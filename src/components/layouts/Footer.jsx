import { Link } from "react-router-dom"

function Footer() {
  return (
    <div>
        <div className="md:flex md:items-center md:justify-between flex justify-around py-10 px-2">
            <Link to='/blog' className="md:text-4xl text-md  font-bold ">BLOG</Link>
            <Link to='/about' className="md:text-4xl text-md font-bold ">ABOUT US</Link>
            <Link to='/partner' className="md:text-4xl text-md font-bold ">PARTNER</Link>
            <Link to='/career' className="md:text-4xl text-md font-bold ">CAREER</Link>
        </div>
        <div className="md:flex md:justify-between py-1 flex justify-around">
            {/* <h1 className="md:text-2xl font-semibold md:flex">Designed by
                Overflow
                 <span>
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLiinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                </span> 
            </h1> */}
            
            <div className="">
                <Link to='/' className="mr-5 font-semibold">Linkedln</Link>
                <Link to='/' className="mr-5 font-semibold">Facebook</Link>
                <Link to='/' className="mr-5 font-semibold">Twitter</Link>
                <Link to='/' className="mr-5 font-semibold">Instagram</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer