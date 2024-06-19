import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/Cart.css';

const Cart = ({ cartItems, setCartItems }) => {
  const [email, setEmail] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCustomerNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const handleOrderSubmit = (event) => {
    event.preventDefault();

    const orderDetails = {
      email,
      items: cartItems.map(item => ({
        name: item.name,
        weight: item.weight,
        price: item.price
      }))
    };
    const rounded = (number) => +number.toFixed(2);

    // Отправка данных заказа на почту через EmailJS
    emailjs.send('service_k4263ki', 'template_icoi9l5', {
      to_name: customerName || 'Customer',  // Имя получателя
      from_name: 'GoldSofa',  // Ваше имя или название компании
      reply_to: orderDetails.email,  // Email получателя
      message: orderDetails.items.map(item => 
        `Товар: ${item.name}, Вес: ${item.weight} кг, Цена: $${rounded(item.price * item.weight)}`).join('\n')
    }, '798F7vFXUvmd2C_9T')  // Ваш User ID здесь
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      setOrderPlaced(true);
      setCartItems([]);  // Очистка корзины после заказа
    }, (err) => {
      console.error('Failed to send email. Error:', err);
    });
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="cart">
      <h2>Ваша корзина</h2>
      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div>
                <h3>{item.name}</h3>
                <p>Вес: {item.weight} кг</p>
                <p>Цена: ${item.price}</p>
                <Button variant="danger" onClick={() => handleRemoveItem(index)}>Удалить</Button>
              </div>
            </li>
          ))}
        </ul>
      )}  

      {!orderPlaced ? (
        <Form onSubmit={handleOrderSubmit}>
          <Form.Group controlId="formCustomerName">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите ваше имя"
              value={customerName}
              onChange={handleCustomerNameChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Адрес электронной почты</Form.Label>
            <Form.Control
              type="email"
              placeholder="Введите email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Оформить заказ
          </Button>
        </Form>
      ) : (
        <p>Спасибо за ваш заказ! Подробности отправлены на {email}.</p>
      )}
    </div>
  );
};

export default Cart;
