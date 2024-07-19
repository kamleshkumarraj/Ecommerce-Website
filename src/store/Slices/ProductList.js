import { createSlice } from "@reduxjs/toolkit";

const findExistingProduct = (state , action) => {
    const existingProduct = state.find((product) => product.id==action.payload.id)
    return existingProduct;
}

const slice = createSlice({
    name : 'product',
    initialState : [],
    reducers : {
        addProducts :(state , action) => {
            state =  [...action.payload]
            return state;
        },
        setCartStatus : (state , action) => {
            const existing = findExistingProduct(state,action)
            if(existing){
                existing.cartStatus = action.payload.status;
            }

        },
        resetCartStatus : (state ,action) =>{
            const existing = findExistingProduct(state ,action)
            if(existing){
                existing.cartStatus = action.payload.status;
            }
        },
        setWishlistStatus : (state , action) => {
            const existing = findExistingProduct(state,action)
            if(existing){
                existing.wishlistStatus = action.payload.status;
            }

        },
        resetwishlistStatus : (state ,action) =>{
            const existing = findExistingProduct(state ,action)
            if(existing){
                existing.wishlistStatus = action.payload.status;
            }
        }
    }
})

export const getAllProduct = (state) => state.productList;

export const productsReducer = slice.reducer;
export const {addProducts , setCartStatus ,resetCartStatus , setWishlistStatus , resetwishlistStatus} = slice.actions;