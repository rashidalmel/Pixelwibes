import React from 'react';
import './Blog.css';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'What is DeepSeek AI: DeepSeek AI vs ChatGPT',
            image: '/blogimage/chatgpt-vs-deepseek.png',
            date: '25 Feb, 2025',
            category: 'DEEPSEEK AI VS CHATGPT'
        },
        {
            id: 2,
            title: 'How To Integrate Third-Party Services Into Your Website',
            image: '/blogimage/third-party-integrate-6788b51342fcb.png',
            date: '16 Jan, 2025',
            category: 'INTEGRATION'
        },
        {
            id: 3,
            title: 'The Complete Guide to Generative AI Architecture',
            image: '/blogimage/10.png',
            date: '18 Nov, 2024',
            category: 'AI ARCHITECTURE'
        }
    ];

    return (
        <section className="blog-section">
            <div className="blog-container">
                <h3 className="blog-subtitle">Blog</h3>
                <h2 className="blog-title">Recent Blog Post</h2>
                
                <div className="blog-grid">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="blog-card">
                            <div className="blog-card-image">
                                <img 
                                    src={post.image} 
                                    alt={post.title}
                                    onError={(e) => {
                                        console.error('Image failed to load:', post.image);
                                    }} 
                                />
                                <div className="blog-card-date">{post.date}</div>
                            </div>
                            <div className="blog-card-content">
                                <h3 className="blog-card-title">{post.title}</h3>
                                <button className="read-more-btn">Read More →</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
