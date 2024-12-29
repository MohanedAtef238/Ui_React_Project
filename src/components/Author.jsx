import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Author.css';

const BlogCard = ({ imgSrc, title, link }) => (
    <div className="single-book">
        <a href={link} className="single-book__img">
            <img src={imgSrc} alt={`${title} cover`} />
        </a>
        <h4 className="single-book__title">{title}</h4>
        <Link to={link} className="read-more">View Blog</Link>
    </div>
);

const Author = () => {
    useEffect(() => {
        console.log('Author page loaded');
    }, []);

    return (
        <>
            <section className="fh5co-about-me">
                <div className="site-container">
                    <div className="portfolio-wrapper">
                        <div className="portfolio__img">
                            <img src="/img/blogss/author.png" alt="Ahmed El-Sayed" />
                        </div>
                        <div className="portfolio__bottom">
                            <h2>Ahmed El-Sayed</h2>
                            <p>It Consultant and CEO of HackPack Egy</p>
                        </div>
                    </div>
                    <div className="about-me__text">
                        <h3>About Ahmed</h3>
                        <p>
                        Ahmed El-Sayed is a prominent Egyptian businessman known for his innovative contributions to the fields of technology and finance. With a career spanning over two decades, he has established himself as a leader in the entrepreneurial landscape of Egypt. Born and raised in Cairo, Ahmed pursued his education at Cairo University, where he earned a degree in Business Administration. He later enhanced his expertise by obtaining an MBA from a prestigious international institution. His academic background laid the foundation for a successful career in business.                        </p>
                    </div>
                </div>
            </section>

            <section className="fh5co-books">
                <div className="site-container">
                    <h2>Ahmed's Blogs</h2>
                    <div className="books">
                        <BlogCard imgSrc="/img/blogss/Argentina.jpg" title="A Big Apartment" link="/blog-details" />
                        <BlogCard imgSrc="/img/blogss/Argentina.jpg" title="I Only See Indians" link="/blog-details" />
                        <BlogCard imgSrc="/img/blogss/Argentina.jpg" title="Camelopedia" link="/blog-details" />
                        <BlogCard imgSrc="/img/blogss/Argentina.jpg" title="Messi" link="/blog-details" />
                    </div>
                    <Link to="/blog-details" className="brand-button">Back to Blog</Link>
                </div>
            </section>
        </>
    );
};

export default Author;
