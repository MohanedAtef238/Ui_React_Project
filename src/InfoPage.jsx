import React, { useState, useEffect } from 'react';
import './assets/Sources/css/Footer.css';
import './assets/Sources/css/InfoPage.css';
import img1 from './assets/Sources/img/Gallery/mainG1.jpg';
import img2 from './assets/Sources/img/Gallery/mainG2.jpg';

const API_KEY = "594ce593b6b44a20720693e4730ff57d";
const cities = ["London", "Cairo", "Paris", "Tokyo", "Sydney", "Rome"];

function InfoPage() {
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    const url = `https://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      return { city, data: result };
    } catch (error) {
      console.error(`Error fetching weather for ${city}:`, error);
      setError(`Could not fetch weather data for ${city}`);
      return { city, data: null };
    }
  };

  useEffect(() => {
    const fetchAllWeatherData = async () => {
      const promises = cities.map((city) => fetchWeather(city));
      const results = await Promise.all(promises);

      const weatherObject = {};
      results.forEach(({ city, data }) => {
        weatherObject[city] = data;
      });
      setWeatherData(weatherObject);
    };

    fetchAllWeatherData();
  }, []);

  const images = [img1, img2, img1, img2, img1, img2];

  return (
    <div className="InfoPage-container">
      {error && <p className="error">{error}</p>}

      <div className="reverse-gradient-section">
        <div className="main-content">
          <div className="image-row">
            {cities.map((city, index) => (
              <a key={city} href={`/subgallery?city=${city}`}>
                <img src={images[index % images.length]} alt={`Gallery_Link_${city}`} />
                <div className="image-text">
                  {city}
                  {weatherData[city]?.current && (
                    <>
                      <br />
                      Temp: {weatherData[city].current.temperature}°C
                      <br />
                      {weatherData[city].current.weather_descriptions[0]}
                    </>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p className="copyright">2024 Ui Project teehee. All rights reserved.{' '} <a href="http://127.0.0.1:5500/Pages/ContactUs.html" className="contact-link"> Contact Us </a></p>
        </div>
      </footer>
    </div>
  );
}

export default InfoPage;
