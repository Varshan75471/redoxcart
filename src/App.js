import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './components/CartItem'; // Update the path based on your project
import CartSummary from './components/CartSummary';
import './App.css'; // Ensure this is styled correctly

const App = () => {
    const items = useSelector((state) => state.cart.items);

    return (
        <div className="app">
            <h1>React Redux Cart</h1>
            <div className="cart">
                <div className="cart-items">
                    {items.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>
                <CartSummary />
            </div>
        </div>
    );
};

export default App;
