import { createSelector, createSlice } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";

const slices = createSlice({
    name : 'wishlist',
    initialState : [],
    reducers : {
        addWishlistItem : (state ,action) => {
            state.push(action.payload)
        }
    }
})

//create selector;
export const getWishlistLen = (state) => state.wishlist.length;

export const getWishlistItem = ({wishlist , productList}) => {
    return wishlist.map((wishlist) =>{
        return productList.filter((product) => wishlist.id == product.id )[0]
    })
}
export const getWishlistData = createSelector(getWishlistItem , (state) => state)
// export const getWishlistItem = createReducer(wishlistItem , (state) => state)

export const wishlistReducer = slices.reducer;
export const {addWishlistItem} = slices.actions;