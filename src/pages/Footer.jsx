import { Link } from "react-router-dom"

function Footer() {
  return (
    <div>
        <div className="flex items-center justify-between py-10 px-10">
            <Link to='/blog' className="text-4xl font-bold ">BLOG</Link>
            <Link to='/about' className="text-4xl font-bold ">ABOUT US</Link>
            <Link to='/partner' className="text-4xl font-bold ">PARTNER</Link>
            <Link to='/career' className="text-4xl font-bold ">CAREER</Link>
        </div>
        <div className="flex gap-4 justify-between py-1 px-10">
            <h1 className="text-2xl font-semibold flex">Designed by
                Overflow
                 <span>
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLiinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                </span> 
            </h1>
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