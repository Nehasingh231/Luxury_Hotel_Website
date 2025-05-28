import React, { useState } from 'react';
import './BlogPage.css';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Corrected blog posts data with proper order and fixed "Restore" spelling
  const blogPosts = [
    {
      id: 1,
      title: "Classy Rooms That Will Blow Your Mind With Simple And Modern Design",
      author: "Luna Wayne",
      date: "20 December 2023",
      comments: 2,
      category: "Interior"
    },
    {
      id: 2,
      title: "Restore Lighting Design In The Hotel To Make It Comfortable & Attractive",
      author: "Luna Wayne",
      date: "20 December 2023",
      comments: 2,
      category: "Interior"
    },
    {
      id: 3,
      title: "Explore Interior Design Of Hotel Lobbies With A Variety Of Designs",
      author: "Luna Wayne",
      date: "20 December 2023",
      comments: 2,
      category: "Interior"
    }
  ];

  // Case-insensitive search
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="blogpage-container">
      <div className="blogpage-main">
        {filteredPosts.map((post) => (  
          <div className="blogpost-card" key={post.id}> 
            <div className="blogpost-image" />
            <div className="blogpost-content">
              <h3 className="blogpost-title">{post.title}</h3>
              <div className="blogpost-meta">
                <span>👤 {post.author}</span>
                <span>📅 {post.date}</span>
                <span>💬 {post.comments} Comments</span>
                <span>| {post.category}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="pagination">
          <span>◀</span>
          <span>1</span>
          <span className="active">2</span>
          <span>3</span>
          <span>▶</span>
        </div>
      </div>

      <aside className="blogpage-sidebar">
        <div className="search-box">
          <h4>Search Post</h4>
          <input 
            type="text" 
            placeholder="Search here" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="latest-posts">
  <h4>Latest Post</h4>
  {blogPosts.map((post) => (
    <div className="latest-post-card" key={post.id}>
      <div className="thumbnail"></div>
      <div className="post-info">
        <p className="post-title">
          {post.title.length > 35 ? post.title.substring(0, 35) + "..." : post.title}
        </p>
        <div className="post-meta">
          <span>{post.date.slice(0, 6)}</span>
          <span>|</span>
          <span>{post.category}</span>
        </div>
      </div>
    </div>
  ))}
</div>


        <div className="categories">
          <h4>Categories</h4>
          <ul>
            <li>▪ Interior</li>
            <li>▪ Design</li>
            <li>▪ Health</li>
            <li>▪ Hotel</li>
            <li>▪ Holiday</li>
          </ul>
        </div>

        <div className="tags">
          <h4>Tags</h4>
          <div className="tag-list">
            {["Interior", "Decor", "News", "Tips&Trick", "Insight"].map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BlogPage;