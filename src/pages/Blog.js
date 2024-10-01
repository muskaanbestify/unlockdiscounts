import React, { useContext, useMemo } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import './blog.css'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


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
function BlogCard({ title, description, imageSrc, imageAlt, onReadMore }) {
  return (
    <div className='blog_card'>
      <img src={imageSrc} alt={imageAlt} className='blog_image' />
      <div className='blog_content'>
        <h2 className='blog_title'>{title}</h2>
        <p className='blog_description'>{description}</p>
          <button className='read_more_button' onClick={onReadMore}>Read More</button>
      </div>
    </div>
  );
}

const Blogs = () => {
  const { state } = useContext(ProductContext);
  const { products, loading, error } = state;
  const navigate = useNavigate()
  // Memoize the filtered blog products
  const blogs = useMemo(() => {
    return products.filter(product => product.category === 'blog');
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleReadMore = async (title, id) => {
    console.log('Blog Title:', title); // Log the title
    console.log('Blog ID:', id);       // Log the ID

    try{
      const response = await axios.get(`http://localhost:8080/api/blog/title/${title}`)
      console.log('Response data:', response.data)
      navigate(`/${encodeURIComponent(title)}`);

    } catch(error){
      console.error('Error fetching data:', error.response ? error.response.data : error.message)
    }
  }

  return (
    <div className='blog_page'>
      <Header />
      <div className='blog_container'>
        {Array.isArray(blogs) && blogs.map((blog, index) => (
          <BlogCard
            key={blog._id}
            title={blog.title}
            description={blog.Description || "No description available."} // Fallback if no description
            imageSrc={blog.image}
            imageAlt={blog.title}
            onReadMore={() => handleReadMore(blog.title)}
          />
        ))}
      </div>
    </div>
  );

}

export default Blogs;
