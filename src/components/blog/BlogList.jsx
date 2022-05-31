import React from 'react'
import BlogItem from './BlogItem'

function BlogList({blog}) {
   if(!blog || blog.length === 0 ) {
       return <p>No Blog</p>
   }
  return (
    <div className='container'>
        {/* {blog.map((item) => (
            <BlogItem key={item.id} blog={item}  />
        ))} */}
        <BlogItem />
    </div>
  )
}

export default BlogList