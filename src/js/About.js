import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/About.css';
import sert from '../images/sertifikat_kachestva.jpg';

const About = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [customerName, setCustomerName] = useState('');

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    setReviews(savedReviews);
  }, []);

  const handleReviewChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleCustomerNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    if (reviewText.trim() !== '') {
      const newReview = {
        name: customerName || 'Аноним',
        text: reviewText
      };
      const updatedReviews = [...reviews, newReview];
      setReviews(updatedReviews);
      setReviewText('');
      setCustomerName('');
      localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    }
  };

  return (
    <div className="about">
      <h1>О компании GoldSofa</h1>
      <p>Добро пожаловать в GoldSophia! Мы предоставляем лучшие орехи и сухофрукты.</p>
      <img className="sert" src={sert} alt="GoldSofa sert" />
      <h2>Наше местоположение</h2>
      <div className="map-container">
        <iframe 
          title="GoldSofa Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d761.6236612463837!2d27.612364771723367!3d53.92875005007791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf2d70d90f73%3A0x1fe70a03f42c27bf!2z0JTQsNCx0YDQsNC90L7QvA!5e0!3m2!1sen!2sby!4v1718630993128!5m2!1sen!2sby"
          width="70%"
          height="70%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <h2>Отзывы клиентов</h2>
      <Form onSubmit={handleReviewSubmit}>
        <Form.Group controlId="formCustomerName">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите ваше имя"
            value={customerName}
            onChange={handleCustomerNameChange}
          />
        </Form.Group>
        <Form.Group controlId="formReview">
          <Form.Label>Напишите отзыв</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={reviewText}
            onChange={handleReviewChange}
            placeholder="Введите ваш отзыв"
          />
        </Form.Group>
        <Button style={{marginTop: '20px'}} variant="primary" type="submit">Отправить отзыв</Button>
      </Form>

      {reviews.length > 0 ? (
        <div className="review-list">
          <h3>Все отзывы</h3>
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                <strong>{review.name}</strong>: {review.text}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Пока нет отзывов.</p>
      )}
    </div>
  );
};

export default About;
