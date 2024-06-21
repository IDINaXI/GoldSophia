import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ProductList from './js/ProductList';
import Cart from './js/Cart';
import About from './js/About';
import Home from './js/Home';
import './App.css';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]); // Adjust the type based on your product structure

  const addToCart = (product: any, weight: number) => {
    setCartItems([...cartItems, { ...product, weight }]);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img className="logo" src='./images/logo.png' alt="GoldSofa Logo" />
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
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src="../images/free-icon-instagram-1384031.png" alt="Instagram" className="social-logo" />
              </a>
              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                <img src='./images/free-icon-tik-tok-1946552.png' alt="TikTok" className="social-logo" />
              </a>
              <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
                <img src='./images/free-icon-vk-1236871.png' alt="VKontakte" className="social-logo" />
              </a>
              <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
                <img src='./images/free-icon-telegram-2111708.png' alt="Telegram" className="social-logo" />
              </a>
            </div>
            <p>&copy; 2024 GoldSofa. Все права защищены.</p>
          </div>
          <form>
            <h3>Наше местоположение:</h3>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d761.6236612463837!2d27.612364771723367!3d53.92875005007791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf2d70d90f73%3A0x1fe70a03f42c27bf!2z0JTQsNCx0YDQsNC90L7QvA!5e0!3m2!1sen!2sby!4v1718630993128!5m2!1sen!2sby"
              width="35%"
              height="2%"
              style={{ border: 20 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </form>
        </footer>
      </div>
    </Router>
  );
};

export default App;
