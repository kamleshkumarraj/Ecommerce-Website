import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";


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
        }
    }
})

export const cartItemReducer = slice.reducer;
export const {addCartItem , removeCartItem} = slice.actions

// This is selector

export const getCartLen = (state) => state.cartList.length;


const getCartDataList = (state) => {
    const productList = state.productList;
    return state.cartList.map(({id}) => {

        let filteredData = productList.filter((product) => product.id == id)[0]
        return {...filteredData , quantity : 1}
        
    })
}
export const getCartData = createSelector(getCartDataList , (state) => state)


