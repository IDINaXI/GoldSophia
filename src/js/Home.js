import React from 'react';
import '../css/Home.css';
import nuts2 from "../images/almond.jpg";

const Home = () => {
    return (
      <div className="home">
        <h1>Добро пожаловать в GoldSophia</h1>
        <p>Откройте для себя лучший выбор орешков и сухофруктов. Свежие, качественные продукты с доставкой на дом.</p>
        <img src= {nuts2} alt="Продукты NuttyDelights" className="home-image" />
        <div className="promo">
          <h2>Специальные предложения</h2>
          <p>Купите 1 кг миндаля и получите 200 г кураги бесплатно!</p>
        </div>
      </div>
    );
  };
  
  export default Home;