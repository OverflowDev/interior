import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

import BlogData from '../../data/BlogData'

function SingleBlog() {

  // const {id} = useParams()
  // const [blog, setBlog] = useState(null)

  // useEffect(() => {

  //   let blog = BlogData.find((blog) => blog.id === parseInt(id))

  //   if(blog) {
  //     setBlog(blog) 
  //   }

  // }, [])


  return (
    <div>
     {/* {
       blog 
       ? 
       <div>{console.log(blog)}</div>

       : <div></div>
     } */}
    </div>
  )
}

export default SingleBlog