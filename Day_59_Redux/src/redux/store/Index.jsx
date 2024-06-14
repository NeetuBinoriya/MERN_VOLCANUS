import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../cart/Index'

export const store = configureStore({
    reducer: {
        cart: cartSlice
    },
})