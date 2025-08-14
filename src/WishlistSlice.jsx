import { createSlice } from '@reduxjs/toolkit';

export const WishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: []
    },
    reducers: {
        addToWishlist: (state, action) => {
            const exists = state.items.find(item => item.name === action.payload.name);
            if (!exists) {
                state.items.push(action.payload);
            }
        },
        removeFromWishlist: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload.name);
        },
        clearWishlist: (state) => {
            state.items = [];
        }
    }
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = WishlistSlice.actions;
export default WishlistSlice.reducer;