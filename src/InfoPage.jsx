import "./assets/Sources/css/Footer.css"

import img1 from './assets/Sources/img/Gallery/mainG1.jpg';
import img2 from './assets/Sources/img/Gallery/mainG2.jpg';
import React, { useState, useEffect } from 'react';
import './assets/Sources/css/InfoPage.css'; 
// const url = 'https://api.weatherstack.com/current?access_key={PASTE_YOUR_API_KEY_HERE}&query=New Delhi';
// const options = {
// 	method: 'GET'
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// const City = ["London", "Cairo", "Paris", "Tokyo", "Sydney", "Rome" ];
// const API_KEY= "594ce593b6b44a20720693e4730ff57d" ;

function InfoPage() {
  return (
    <div className="InfoPage-container">
      <div className="reverse-gradient-section">
          <div className="main-content">
              <div className="image-row">
                  <a href="/subgallery?half=true">
                      <img src={img1} alt="Gallery_Link1"/>
                      <div className="image-text">Luxembourg</div>
                  </a>
                  <a href="/subgallery">
                      <img src={img2} alt="Gallery_Link2"/>
                      <div className="image-text">Verona</div>
                  </a>
              </div>
          </div>
        </div>
      <div className="reverse-gradient-section">
        <div className="main-content">
            <div className="image-row">
                <a href="/subgallery?half=true">
                    <img src={img1} alt="Gallery_Link3"/>
                    <div className="image-text">Luxembourg</div>
                </a>
                <a href="/subgallery">
                    <img src={img2} alt="Gallery_Link4"/>
                    <div className="image-text">Verona</div>
                </a>
            </div>
        </div>
      </div>
      <div className="reverse-gradient-section">
        <div className="main-content">
            <div className="image-row">
                <a href="/subgallery?half=true">
                    <img src={img1} alt="Gallery_Link3"/>
                    <div className="image-text">Luxembourg</div>
                </a>
                <a href="/subgallery">
                    <img src={img2} alt="Gallery_Link4"/>
                    <div className="image-text">Verona</div>
                </a>
            </div>
        </div>
      </div>
    <footer className="footer">
        <div className="footer-content">
            <p className="copyright">2024 Ui Project teehee. All rights reserved. <a href="http://127.0.0.1:5500/Pages/ContactUs.html" className="contact-link">Contact Us</a></p>
        </div>
    </footer>
  </div>
  )
}
export default InfoPage;