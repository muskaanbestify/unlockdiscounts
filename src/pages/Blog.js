import React, { useEffect, useState } from 'react';
import './blog.css'; // Ensure CSS is imported
import { useNavigate } from 'react-router-dom';

// Header Component
function Header() {
  return (
    <div className='header_container'>
      <div className='header_text'>Blogs</div>
      <div className='para'>
        Unlock Insights: Explore Our Blog for Inspiration, Tips, and More!
      </div>
    </div>
  );
}

// BlogCard Component: Individual Blog Card
function BlogCard({ title, description, imageSrc, imageAlt, onClick }) {
  return (
    <div className='blog_card' onClick={onClick}>
      <img src={imageSrc} alt={imageAlt} className='blog_image' />
      <div className='blog_content'>
        <h2 className='blog_title'>{title}</h2>
        <p className='blog_description'>{description}</p>
      </div>
    </div>
  );
}

// Main Blog Component
function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to hold any error message
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://product-gallery.onrender.com/api/blogs'); // Adjust URL as necessary
        if (!response.ok) throw new Error('Failed to fetch blogs');
        const data = await response.json();
        setBlogs(data); // Assume data is an array of blog posts
      } catch (error) {
        setError(error.message); // Set error message to state
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Handle card click to navigate to a specific blog
  const handleBlogClick = (id) => {
    navigate(`/blog/${id}`); // Adjust the route as necessary
  };

  // Conditional rendering based on loading, error, or blogs data
  if (loading) return <div className='loading'>Loading...</div>;
  if (error) return <div className='error'>{error}</div>;
  if (blogs.length === 0) return <div>No blogs available.</div>;

  return (
    <div className='blog_page'>
      <Header />
      <div className='blog_container'>
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id} // Use _id from MongoDB
            title={blog.title}
            description={blog.description}
            imageSrc={blog.image} // Ensure this is a valid URL
            imageAlt={blog.imageAlt || 'Blog image'} // Add alt text fallback
            onClick={() => handleBlogClick(blog._id)} // Pass ID to click handler
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
