import {useState} from 'react'
import BlogData from '../../data/BlogData'
import BlogItem from './BlogItem'
// import BlogList from './BlogList'
import BlogTab from './BlogTab'

function Blog() {

  const [blog, setBlog] = useState(BlogData)

  // new array that will contain only the values of the key category and display them using the map method.
  // Set() value so that only 3 or 4 values that are unique will be displayed and also to ensure that there are no repeated values.
  // spread operator here so that every value we get by displaying the above array has the same UI
  const blogItems = [...new Set(BlogData.map((Val) => Val.type ))]

  const filterBlog = (curType) => {
    const newBlog = BlogData.filter((newVal) => {
      return newVal.type === curType
    })
    setBlog(newBlog)
  }
  
  // if(!blog || blog.length === 0 ) {
  //       return <p>No Blog</p>
  //   }

  return (
    <div className='container py-10'>
      <div className="flex flex-col">
        <h3 className='font-bold text-5xl ml-16'>THE BLOG</h3>
      </div>

      {/* Type Button */}
      <div>
        <BlogTab 
          filterBlog={filterBlog}
          setBlog={setBlog}
          blogItems={blogItems}
        
        />
      </div>

      <div className=''>
          <BlogItem blog={blog} />
      </div>

      {/* Pagination  */}
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