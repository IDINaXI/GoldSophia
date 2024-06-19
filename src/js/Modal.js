// src/Modal.js
import React from 'react';
import ReactModal from 'react-modal';
import '..//css/Modal.css';
ReactModal.setAppElement('#root'); // Убедитесь, что это правильно

const Modal = ({ isOpen, onRequestClose, product, quantity, setQuantity }) => {
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Add to Cart"
            className="modal"
            overlayClassName="overlay"
        >
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <label>
                Quantity:
                <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="1"
                />
            </label>
            <button onClick={onRequestClose}>Close</button>
            <button onClick={() => { onRequestClose(); alert(`Added ${quantity} items to cart`); }}>Add to Cart</button>
        </ReactModal>
    );
};

export default Modal;