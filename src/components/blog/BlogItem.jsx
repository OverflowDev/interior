// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function BlogItem({blog}) {
  
  if(!blog || blog.length === 0 ) {
    return <p>No Blog</p>
  }

  return (
    <div className='container '>

      <div className='md:grid md:grid-cols-3 md:gap-3 px-6 md:px-24 py-12'>
    
        {blog.map((blogVal) => {
          return (
            <Link to={`/blog/${blogVal.id}`} className="rounded-full max-w-sm mb-2" key={blogVal.id} >
              <div className="bg-cover bg-center max-w-sm h-80 shadow-md hover:shadow-lg" style={{ backgroundImage: `url(${blogVal.imgUrl})` }}></div>
              <h4 className='font-semibold text-primary text-1xl tracking-normal uppercase'>{blogVal.type}</h4>
              <h3 className='font-bold tracking-wide'>{blogVal.name}</h3>
              <div className='flex '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className='font-light tracking-wider'>12.3k</span>
              </div>
            </Link>
          )
        })}
      </div>

    </div>
  )
}

// BlogItem.propTypes = {
//     blog: PropTypes.object.isRequired
//   }

export default BlogItem