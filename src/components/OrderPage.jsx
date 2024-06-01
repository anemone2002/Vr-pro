// components/OrderPage.js
import React, { useState } from 'react';
import './OrderPage.css';

const OrderPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!name) newErrors.name = 'Name is required';
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (quantity < 1) newErrors.quantity = 'Quantity must be at least 1';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Handle form submission
            console.log('Form submitted:', { name, email, quantity });
            setErrors({});
        }
    };

    return (
        <div className="order-page">
            <h2>Pre-order Innovatech VR Pro</h2>
            <form onSubmit={handleSubmit} className="order-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        min="1"
                    />
                    {errors.quantity && <p className="error">{errors.quantity}</p>}
                </div>
                <button type="submit">Pre-order</button>
            </form>
        </div>
    );
};

export default OrderPage;
