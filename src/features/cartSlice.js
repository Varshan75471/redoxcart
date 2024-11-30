import { createSlice } from '@reduxjs/toolkit';
import productsData from '../components/product.json'; // Updated path to product.json

const initialState = {
    items: productsData.products.map((product) => ({
        id: product.id,
        name: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        quantity: 1, // Default quantity
        subtotal: product.price, // Default subtotal
    })),
    totalQuantity: productsData.products.length,
    totalAmount: productsData.products.reduce((sum, product) => sum + product.price, 0),
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increaseQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                item.quantity++;
                item.subtotal += item.price;
                state.totalQuantity++;
                state.totalAmount += item.price;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.quantity > 0) {
                item.quantity--;
                item.subtotal -= item.price;
                state.totalQuantity--;
                state.totalAmount -= item.price;
            }
        },
    },
});

export const { increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
