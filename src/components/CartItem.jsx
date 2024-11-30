import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../features/cartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="cart-item">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <div>
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            </div>
            <p>Subtotal: ${item.price * item.quantity}</p>
        </div>
    );
};

export default CartItem;
