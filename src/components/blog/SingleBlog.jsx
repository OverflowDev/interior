import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

import BlogData from '../../data/BlogData'

function SingleBlog() {

  const params = useParams()
  const [blog, setBlog] = useState(null)

  const [linkCopied, setLinkCopied] = useState(null)

  // ✅ Find first object that matches condition
  // const found = BlogData.find(obj => {
  //   return obj.id == params.id ;
  // });

  useEffect(() => {

    const findBlog = BlogData.find(blog => 
        blog.id == params.id
      );

      if(findBlog){
        setBlog(findBlog)
      }

  }, [params.id])

  return (
    <div className='container'>

      {
        blog && (
          <div className='flex justify-center'>

            <header className=''>
              <h3 className='font-bold text-3xl md:text-6xl '>{blog.name}</h3>
              
              <div className='flex mt-8 md:mt-10'>

                <div className='flex items-center'>
                  <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" alt="author" className='my-auto h-10 w-10 border-gray-500 rounded-full border-4"'/>
                  <h5 className='font-semibold ml-2'>{blog.author}</h5>
                </div>

                <div className='flex items-center ml-2 md:ml-5'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className='font-light ml-2'>3 mins read</h3>
                </div>
                <div className='flex items-center ml-2 md:ml-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className='font-light tracking-wider'>12.3k</span>
                </div>

                <div className="flex items-center ml-2 md:mx-auto" onClick={() =>{
                  navigator.clipboard.writeText(window.location.href)
                  setLinkCopied(true)
                  setTimeout(() => {
                      setLinkCopied(false)
                  }, 2000)
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  {linkCopied && <p className='z-2 bg-primary rounded p-2 text-white font-bold'>Link copied</p>}
                </div>

              </div>
            </header>

            <div className='flex'>
              {/* <img src={blog.imgUrl} alt="" /> */}
            </div>

          </div>
        )
      }

    </div>
  )
}

export default SingleBlog