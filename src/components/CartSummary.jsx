import React from 'react';
import { useSelector } from 'react-redux';

const CartSummary = () => {
    const { totalQuantity, totalAmount } = useSelector((state) => state.cart);

    return (
        <div className="cart-summary">
            <h2>Cart Summary</h2>
            <p>Total Items: {totalQuantity}</p>
            <p>Total Amount: ${totalAmount}</p>
        </div>
    );
};

export default CartSummary;
