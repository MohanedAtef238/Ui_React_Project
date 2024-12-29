import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/Sources/css/HomePage.css"
import "./assets/Sources/css/Footer.css"
import b1 from './assets/Sources/img/b1.jpg';
import p1 from './assets/Sources/img/p1.jpg';
import m1 from './assets/Sources/img/m1.jpg';
import op1 from './assets/Sources/img/blogdirect.jpg';
import op2 from './assets/Sources/img/Destinationsdirect.jpg';
import op3 from './assets/Sources/img/gallerydirect.jpg';

const Home = () => {
  const handleScroll = (event) => {
    event.preventDefault();

    const targetID = event.currentTarget.getAttribute('data-target');
    const targetElement = document.getElementById(targetID);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const carouselWheel = document.getElementById('testimonialsCarousel');
    if (carouselWheel) {
      new bootstrap.Carousel(carouselWheel, {
        interval: 5000,
        wrap: true,
      });
    }

    const images = document.querySelectorAll('img');
    images.forEach((element) => {
      if (element.id === 'Img_1' || element.id === 'Linked_Img' || element.id === 'Img_3') {
        if (element.id === 'Linked_Img') {
          element.style.transition = 'transform 0.6s ease, filter 1.1s ease';
        } else {
          element.style.transition = 'filter 0.5s ease';
        }
        element.style.filter = 'brightness(60%)';

        element.addEventListener('mouseover', () => {
          if (element.id === 'Linked_Img') {
            element.style.transform = 'scale(1.05)';
            element.style.filter = 'brightness(80%)';
          }
        });

        element.addEventListener('mouseout', () => {
          if (element.id === 'Linked_Img') {
            element.style.transform = 'scale(1)';
            element.style.filter = 'brightness(60%)';
          }
        });
      }
    });
    return () => {
      images.forEach((element) => {
        element.removeEventListener('mouseover', null);
        element.removeEventListener('mouseout', null);
      });
    };
  }, []);


  return (
    <>
      <section className="banner">
        <div className="banner-image">
          <img src={b1} id="Img_1" alt="Banner 1" />
        </div>

        <a href="#" className="banner-image" data-target="WhereToNext" onClick={handleScroll}>
          <img src={p1} id="Linked_Img" alt="Banner 2" />
          <h3 className="Link-Text" style={{ fontWeight: 'bold' }}>
            Discover story-worthy travel moments
          </h3>
        </a>

        <div className="banner-image">
          <img src={m1} id="Img_3" alt="Banner 3" />
        </div>
      </section>

      <div className="gradient-section">
        <div className="main-content">
          <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>Welcome to Your Next Adventure</h1>
          <p>
            Traveling opens your mind to new cultures, experiences, and breathtaking landscapes. Whether you're exploring a
            bustling city or a serene countryside, every journey enriches your life. Start planning your next adventure today
            and embrace the beauty of the world.
          </p>
        </div>
      </div>

      <div className="reverse-gradient-section" id="WhereToNext">
        <div className="main-content">
          <h1 className="section-title">Where To Next?</h1>
          <div className="image-row">
            <a href="/blog-list">
              <img src={op1} alt="Blogs redirect" />
              <div className="image-text">Blogs</div>
            </a>
            <a href="/TravelList">
              <img src={op2} alt="Destinations redirect" />
              <div className="image-text">Destinations</div>
            </a>
            <a href="/gallery">
              <img src={op3} alt="Gallery redirect" />
              <div className="image-text">Gallery</div>
            </a>
          </div>
        </div>
        <hr
          style={{
            border: '2px solid #191923ff',
            width: '50%',
            margin: '20px auto',
            background: 'rgba(253, 188, 134, 0.3)',
          }}
        />
      </div>

      <div id="testimonialsCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <p>"A much better service than my own."</p>
            <h3> - Saul Goodman </h3>
          </div>
          <div className="carousel-item">
            <p>"Everything that is created is designed to end, but this was meant to thrive."</p>
            <h3> - 2B </h3>
          </div>
          <div className="carousel-item">
            <p>"My trips are finally worth having :D."</p>
            <h3> - Poor Guy </h3>
          </div>
          <div className="carousel-item">
            <p>"I couldn't stop admiring the gallery"</p>
            <h3> - Biased User </h3>
          </div>
          <div className="carousel-item">
            <p>"Can you see this"</p>
            <h3> - Confused User </h3>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p className="copyright">
            2024 Ui Project teehee. All rights reserved.{' '}
            <a href="/Contact" className="contact-link">
              Contact Us
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;