import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BlogList.css'; // Ensure this path is correct

const BlogList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        console.log('BlogList loaded');
        // Add any additional JavaScript functionality here
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const handleFilter = (event) => {
        setFilter(event.target.value);
    };

    const filterBlogs = (blogs) => {
        return blogs.filter(blog => {
            const title = blog.title.toLowerCase();
            const category = blog.category.toLowerCase();
            return (
                title.includes(searchTerm) &&
                (filter === 'all' || category.includes(filter))
            );
        });
    };

    const blogs = [
        { title: 'Pyramids are overrated ?', country: 'Egypt', category: 'recent', img: '/img/blogss/Egyptt.jpg' },
        { title: 'Lots of spiders', country: 'Australia', category: 'recent', img: '/img/blogss/australlia.jpg' },
        { title: 'Everyone hates America', country: 'Canada', category: 'recent', img: '../img/blogss/canada.jpg' },
        { title: 'Hey red head', country: 'Ireland', category: 'recent', img: '/img/blogss/ireland.jpg' },
        { title: 'Oily moily', country: 'Saudi Arabia', category: 'recent', img: '/img/blogss/saudi.jpg' },
        { title: 'Chocolate, Chooccclaattee', country: 'Switzerland', category: 'recent', img: '/img/blogss/swizerland.jpg' },
        { title: 'I only see Indians', country: 'United Arab Emirates', category: 'recent', img: '/img/blogss/UAE.jpg' },
        { title: 'Where the hell is my way back?', country: 'Yemen', category: 'recent', img: '/img/blogss/yemen.jpg' },
        { title: 'Nachos are so good!', country: 'Mexico', category: 'popular', img: '/img/blogss/mexixo.jpg' },
        { title: 'Got robbed 5 times', country: 'Morocco', category: 'popular', img: '/img/blogss/morocco.jpg' },
        { title: 'Such a big apartment', country: 'Qatar', category: 'popular', img: '/img/blogss/qatar.jpg' },
        { title: 'WOW Hitler', country: 'Russia', category: 'popular', img: '/img/blogss/russia.jpg' },
        { title: 'Am I dreaming or this is real?', country: 'Norway', category: 'popular', img: '/img/blogss/norway.jpg' },
        { title: 'Oni-chan', country: 'Japan', category: 'popular', img: '/img/blogss/japan.jpg' },
        { title: 'Not everything is Messi', country: 'Argentina', category: 'popular', img: '/img/blogss/Argentina.jpg' },
        { title: 'Cold, but romantic', country: 'Finland', category: 'popular', img: '/img/blogss/finland.jpg' },
    ];

    const filteredBlogs = filterBlogs(blogs);

    return (
        <div>
            <div id="navbar-container">
                <div className="SBContainer">
                    <input
                        type="text"
                        id="SearchBox"
                        placeholder="Search For Blog . . ."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <select id="FilterBox" value={filter} onChange={handleFilter}>
                        <option value="all">All</option>
                        <option value="popular">Popular</option>
                        <option value="recent">Recent</option>
                    </select>
                </div>
            </div>

            <div className="container">
                <div className="blog-grid">
                    {filteredBlogs.map((blog, index) => (
                        <div
                            key={index}
                            className={`${blog.category.charAt(0).toUpperCase() + blog.category.slice(1)}-Blog`}
                        >
                            <img src={blog.img} className="img-fluid" alt={blog.country} />
                            <div className="card-info">
                                <div className="card-title">
                                    <h4 className="blog-title" style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                                        {blog.title}
                                    </h4>
                                </div>
                                <h6 className="country">{blog.country}</h6>
                                <p className="blog-description">well, i got lots of words i want to say about .....</p>
                                <Link to="/blog-details" className="read-more">Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogList;
