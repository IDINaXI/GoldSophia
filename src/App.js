import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ProductList from './js/ProductList';
import Cart from './js/Cart';
import About from './js/About'; // Импорт компонента About
import Home from './js/Home'; // Импорт компонента Home
import './App.css';
import logo from './images/logo.png';
import instaLogo from './images/free-icon-instagram-1384031.png';
import tiktokLogo from './images/free-icon-tik-tok-1946552.png';
import vkLogo from './images/free-icon-vk-1236871.png';
import telegramLogo from './images/free-icon-telegram-2111708.png';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, weight) => {
    setCartItems([...cartItems, { ...product, weight }]);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img className="logo" src={logo} alt="GoldSofa Logo" />
          <div className="nav-buttons">
            <Link to="/"><Button className="nav-button">Главная</Button></Link>
            <Link to="/products"><Button className="nav-button">Товары</Button></Link>
            <Link to="/cart"><Button className="nav-button">Корзина ({cartItems.length})</Button></Link>
            <Link to="/about"><Button className="nav-button">О нас</Button></Link>
          </div>
        </header>

        <div className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        <footer className="App-footer">
          <div className='info'>
            <div className="social-links">
                {/* Ссылки на социальные сети */}
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <img src={instaLogo} alt="Instagram" className="social-logo" />
                </a>
                <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                  <img src={tiktokLogo} alt="TikTok" className="social-logo" />
                </a>
                <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
                  <img src={vkLogo} alt="VKontakte" className="social-logo" />
                </a>
                <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
                  <img src={telegramLogo} alt="Telegram" className="social-logo" />
                </a>
            </div>
      <p>&copy; 2024 GoldSofa. Все права защищены.</p>
          </div>
          <form>
            <h3>Наше местоположение:</h3>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d761.6236612463837!2d27.612364771723367!3d53.92875005007791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf2d70d90f73%3A0x1fe70a03f42c27bf!2z0JTQsNCx0YDQsNC90L7QvA!5e0!3m2!1sen!2sby!4v1718630993128!5m2!1sen!2sby"
              width="35%"
              height="5%"
              style={{ border: 20 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </form>
          

        </footer>
      </div>
    </Router>
  );
}

export default App;
