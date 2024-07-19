import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./Slices/ProductList";
import { cartItemReducer } from "./Slices/AddCart";
import { wishlistReducer } from "./Slices/WishlistItem";

const store = configureStore({
    reducer : {
        productList : productsReducer,
        cartList : cartItemReducer,
        wishlist : wishlistReducer
    }
})

export default store;

// now we create selector
