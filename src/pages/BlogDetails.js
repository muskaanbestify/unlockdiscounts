import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './blogDetail.css'; // Ensure to import CSS for styling

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null); // State to hold blog data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/blogs/${id}`); // Adjust URL to fetch blog by ID
        if (!response.ok) throw new Error('Failed to fetch blog detail');
        const data = await response.json();
        console.log('Fetched blog data:', data); // Log the fetched data
        setBlog(data); // Assume data is the blog object
      } catch (error) {
        setError(error.message); // Set error message to state
        console.error('Error fetching blog detail:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [id]);

  if (loading) return <div className='loading'>Loading...</div>;
  if (error) return <div className='error'>{error}</div>;
  if (!blog) return <div>No blog found.</div>;

  return (
    <div className='blog_detail_container'>
      <div className='blog_detail_card'>
        <h1 className='blog_detail_title'>{blog.title}</h1>
        <img src={blog.image} alt={blog.title} className='blog_detail_image' />
        <div className='blog_detail_content'>
          {/* Displaying the full description/content */}
          <div dangerouslySetInnerHTML={{ __html: blog.Description }} />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
