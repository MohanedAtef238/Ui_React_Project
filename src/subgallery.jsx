import React from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/Sources/css/gallery.css"; 
import "./assets/Sources/css/Footer.css"; 
import pic1 from "./assets/Sources/img/Gallery/pic1.jpg";
import pic2 from "./assets/Sources/img/Gallery/pic2.jpg";
import pic3 from "./assets/Sources/img/Gallery/pic3.jpg";
import pic4 from "./assets/Sources/img/Gallery/pic4.jpg";
import pic5 from "./assets/Sources/img/Gallery/pic5.jpg";
import pic6 from "./assets/Sources/img/Gallery/pic6.jpg";
import pic7 from "./assets/Sources/img/Gallery/pic7.jpg";
import pic8 from "./assets/Sources/img/Gallery/pic8.jpg";
import pic9 from "./assets/Sources/img/Gallery/pic9.jpg";
import pic10 from "./assets/Sources/img/Gallery/pic10.jpg";
import pic11 from "./assets/Sources/img/Gallery/pic11.jpg";
import pic12 from "./assets/Sources/img/Gallery/pic12.jpg";
import pic13 from "./assets/Sources/img/Gallery/pic13.jpg";
import pic14 from "./assets/Sources/img/Gallery/pic14.jpg";

const Subgallery = () => {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14];

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const showHalf = params.get("half") === "true";
  const imagesToRender = showHalf
    ? images.slice(0, Math.ceil(images.length / 2))
    : images; 

  return (
    <div>
      <ul className="gallery-list">
        {imagesToRender.map((src, index) => (
          <li key={index}>
            <img src={src} alt={`Gallery pic ${index + 1}`} loading="lazy" />
          </li>
        ))}
      </ul>
      <footer className="footer">
        <div className="footer-content">
          <p className="copyright">
            2024 Ui Project teehee. All rights reserved.{" "}
            <a href="/contact-us" className="contact-link">
              Contact Us
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Subgallery;
