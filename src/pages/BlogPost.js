import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogPost = () =>{

    const { title } = useParams(); // Get the title from the URL
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        const fetchBlog = async () => {
          if (!title) {
            console.error('No blog ID provided');
            setLoading(false);
            return;
          }
    
          try {
            // Fetch the blog post by its title
            const response = await axios.get(`http://localhost:8080/api/blog/title/${title}`);
            console.log("Fetched Blog:", response.data);
            setBlog(response.data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching blog:', error);
            setLoading(false);
          }
        };
    
        fetchBlog();
      }, [title]);
    
      if (loading) {
        return <div>Loading blog post...</div>;
      }
    
      if (!blog) {
        return <div>Blog post not found</div>;
      }

    return(
        <div>
            <h1>{blog.title}</h1>
            <img
                src={blog.image}
                alt={blog.title}
                loading="lazy"
                className="lazy-load"
              />
            <p>{blog.Description}</p>
        </div>
    )

}

export default BlogPost;
