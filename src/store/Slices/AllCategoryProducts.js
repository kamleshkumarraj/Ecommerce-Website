import { createSlice } from "@reduxjs/toolkit";


const dispatchProducts = (state , action) => {
    switch(action.payload[0].category){
        case "furniture" : {
            state.furniture = [...action.payload]
            return state;
        }
        case "groceries" : {
            state.groceries = [...action.payload]
            return state;
        }
        case "womens-watches" : {
            state.womenWatch = [...action.payload]
            return state;
        }case "womens-shoes" : {
            state.womenShoes = [...action.payload]
            return state;
        }case "womens-jewellery" : {
            state.womenJwellery = [...action.payload]
            return state;
        }case "womens-dresses" : {
            state.womensDresses = [...action.payload]
            return state;
        }case "womens-bags" : {
            state.womensBags = [...action.payload]
            return state;
        }case "vehicle" : {
            state.vechile = [...action.payload]
            return state;
        }case "tops" : {
            state.tops = [...action.payload]
            return state;
        }case "tablets" : {
            state.tablets = [...action.payload]
            return state;
        }case "sunglasses" : {
            state.sunglasses = [...action.payload]
            return state;
        }case "sports-accessories" : {
            state.sportsAccessories = [...action.payload]
            return state;
        }case "smartphones" : {
            state.smartPhones = [...action.payload]
            return state;
        }case "motorcycle" : {
            state.moterCycles = [...action.payload]
            return state;
        }case "mobile-accessories" : {
            state.mobileAccessories = [...action.payload]
            return state;
        }case "mens-watches" : {
            state.mensWatches = [...action.payload]
            return state;
        }case "mens-shoes" : {
            state.mensShoes = [...action.payload]
            return state;
        }case "mens-shirts" : {
            state.mensShirts = [...action.payload]
            return state;
        }case "laptops" : {
            state.laptops = [...action.payload]
            return state;
        }case "kitchen-accessories" : {
            state.kitchenAccessories = [...action.payload]
            return state;
        }
        
    }}
function findExistingProduct(state , action) {
    return state[action.payload.category].find((item) => item.id == action.payload.id)
}
const slice = createSlice({
    name : 'products',
    initialState :{
        kitchenAccessories : [],
        laptops : [],
        smartPhones : [],
        tablets : [],
        womenWatch : [],
        womenShoes : [],
        womensBags : [],
        womensDresses : [],
        womenJwellery : [],
        mensShirts : [],
        mensShoes : [],
        mensWatches : [],
        furniture : [],
        groceries : [],
        homeDecoration : [],
        vechile: [],
        moterCycles : [],
        sunglasses : [],
        mobileAccessories : [],
        sportsAccessories : [],
        tops : []
    },
    reducers :{ 
        addCategoryProducts : (state , action) =>{
            dispatchProducts(state , action)
        },
        setCategoryCartStatus : (state , action) => {
            const existing = findExistingProduct(state,action)
            if(existing){
                existing.cartStatus = action.payload.status;
            }

        },
        resetCategoryCartStatus : (state ,action) =>{
            const existing = findExistingProduct(state ,action)
            if(existing){
                existing.cartStatus = action.payload.status;
            }
        },
        setCategoryWishlistStatus : (state , action) => {
            const existing = findExistingProduct(state,action)
            if(existing){
                existing.wishlistStatus = action.payload.status;
            }

        },
        resetCategorywishlistStatus : (state ,action) =>{
            const existing = findExistingProduct(state ,action)
            if(existing){
                existing.wishlistStatus = action.payload.status;
            }
        }
    }
})

export const categoryReducers = slice.reducer
export const {addCategoryProducts , setCategoryCartStatus , setCategoryWishlistStatus , resetCategoryCartStatus , resetCategorywishlistStatus} = slice.actions

export const getAllCategoriesProducts = (state) => state.categoryProducts;

//selectors

export const getSpecificProduct = (category , id) => (state) =>{
    return state.categoryProducts[category].find((product) => product.id == id)
    
}