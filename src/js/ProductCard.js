// src/js/ProductCard.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
    const [weight, setWeight] = useState('');

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleAddToCart = () => {
        addToCart(product, weight);
    };

    return (
        <Card className="product-card">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
                <label>
                    Weight (kg):
                    <input
                        type="number"
                        value={weight}
                        onChange={handleWeightChange}
                        min="0"
                        step="0.1"
                    />
                </label>
                <Button onClick={handleAddToCart}>Add to Cart</Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
