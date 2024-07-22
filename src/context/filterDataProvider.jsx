import { createContext, useState } from "react";
import useFilter from "../hooks/filterData";
import { useSelector } from "react-redux";
import { getAllProduct } from "../store/Slices/ProductList";
import { getCartData } from "../store/Slices/AddCart";
import { getWishlistData } from "../store/Slices/WishlistItem";

// eslint-disable-next-line react-refresh/only-export-components
export const filterData = createContext();

function FilterWrapper({children}){
    const baseUrl = window.location.href;
    const productsList = useSelector(getAllProduct)
    const cartList = useSelector(getCartData)
    const wishlist = useSelector(getWishlistData);
    console.log(productsList)
    
    const [filteredData , setQuery] = useFilter(productsList , (product) => product.title);
    const[filteredCartData , setCartQuery] = useFilter(cartList , (cart) => cart.title)
    const [filteredWishlistData , setWishlistQuery] = useFilter(wishlist , (wishlistItem) => wishlistItem.title);
    const [inputValue , setInputValue] = useState();
    
    return (
        <filterData.Provider value={{filteredData , setQuery , filteredCartData , setCartQuery , filteredWishlistData , setWishlistQuery , baseUrl , inputValue , setInputValue}}>
            {children}
        </filterData.Provider>
    )
}

export default FilterWrapper;