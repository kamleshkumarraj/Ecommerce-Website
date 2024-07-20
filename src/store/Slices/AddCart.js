import { createSlice } from "@reduxjs/toolkit";

function findExisting(state, action){
    const existing =  state.find((product) => product.id == action.payload.id);
    return existing;
}
const slice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        addCartItem : (state , action) => {
          state.push(action.payload)
        },
        removeCartItem :(state , action) =>{
            const filteredData = state.filter((product) => product.id != action.payload.id);
            return filteredData;
        },
        increaseCartQuantity : (state , action) =>{
            const existing  = findExisting(state , action)
            existing.quantity += 1;
        },
        decreaseCartQuantity : (state , action) =>{
            let existing = findExisting(state , action);
            existing.quantity -= 1;
            
        },
        checkQty : (state ) => {
            const filter  = state.filter((product) => product.quantity != 0)
            return filter;
        }
    },
    
})

export const cartItemReducer = slice.reducer;
export const {addCartItem , removeCartItem , increaseCartQuantity , decreaseCartQuantity , checkQty} = slice.actions

// This is selector

export const getCartLen = (state) => state.cartList.length;

export const getCartData =  (state) => state.cartList;


