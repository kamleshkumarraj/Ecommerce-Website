import { createSlice } from "@reduxjs/toolkit";
function findExisting(state , action){
    const existing = state.find((item) => item.id == action.payload.id)
    return existing
}

const slices = createSlice({
    name : 'wishlist',
    initialState : [],
    reducers : {
        addWishlistItem : (state ,action) => {
            state.push(action.payload)
        },
        removeWishlistItem :(state , action) =>{
            const filteredData = state.filter((product) => product.id != action.payload.id);
            return filteredData;
        },
        increaseWishlistQuantity : (state , action) =>{
            const existing  = findExisting(state , action)
            existing.quantity += 1;
        },
        decreaseWishlistQuantity : (state , action) =>{
            let existing = findExisting(state , action);
            existing.quantity -= 1;
            
        },
        checkWishlistQty : (state) => {
            const filter  = state.filter((product) => product.quantity != 0)
            return filter;
        }
    }
})

//create selector;
export const getWishlistLen = (state) => state.wishlist.length;


export const getWishlistData = (state) => state.wishlist
// export const getWishlistItem = createReducer(wishlistItem , (state) => state)

export const wishlistReducer = slices.reducer;
export const {addWishlistItem , removeWishlistItem , increaseWishlistQuantity , decreaseWishlistQuantity , checkWishlistQty} = slices.actions;