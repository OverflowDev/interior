import {useState, useEffect, createContext } from "react"
import BlogData from "../data/BlogData"

const BlogContext = createContext()

export const BlogProvider = ({children}) => {

    // const [isLoading, setIsLoading] = useState(true)
    const [blog, setBlog] = useState(BlogData)

    useEffect(() => {
        fetchBlog()
    }, [])

    // Fetch Blog Details
    const fetchBlog = async () => {
        const response = await fetch(blog)
       
        const data = await response.json()

        setBlog(data)

        // setIsLoading(false)
    }


    return <BlogContext.Provider value={{ 
        // isLoading,
        blog,
     }}>
        
        {children}
    </BlogContext.Provider>
}

export default BlogContext