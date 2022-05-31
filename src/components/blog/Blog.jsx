import {useState} from 'react'
import BlogData from '../../data/BlogData'
import BlogItem from './BlogItem'
// import BlogList from './BlogList'
import BlogTab from './BlogTab'

function Blog() {

  const [blog, setBlog] = useState(BlogData)

  return (
    <div className='container py-10'>
      <div className="flex flex-col">
        <h3 className='font-bold text-5xl ml-16'>THE BLOG</h3>
      </div>

      <BlogTab blog={blog} />

      <div className='md:grid md:grid-cols-3 md:gap-3 px-6 md:px-24 py-12'>
        {blog.map((item) => (
              <BlogItem key={item.id} blog={item}  />
          ))}
      </div>
      <div className="flex justify-center">
        <div className='flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <div className=''>
            <button className='rounded-full h-8 w-8 bg-gray-200 font-bold mr-2'>1</button>
            <span className='font-semibold'>/</span>
            <button className='font-bold ml-2'>3</button>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>

        </div>
      </div>
    </div>
  )
}

export default Blog