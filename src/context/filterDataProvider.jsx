import { createContext, useState } from "react";
import useFilter from "../hooks/filterData";
import { useSelector } from "react-redux";
import { getAllProduct } from "../store/Slices/ProductList";
import { getCartData } from "../store/Slices/AddCart";
import { getWishlistData } from "../store/Slices/WishlistItem";

// eslint-disable-next-line react-refresh/only-export-components
export const AppConotext = createContext();

function FilterWrapper({children}){
    const baseUrl = window.location.href;
    const productsList = useSelector(getAllProduct)
    const cartList = useSelector(getCartData)
    const wishlist = useSelector(getWishlistData);
    
    const [filteredData , setQuery] = useFilter(productsList , (product) => product.title);
    const[filteredCartData , setCartQuery] = useFilter(cartList , (cart) => cart.title)
    const [filteredWishlistData , setWishlistQuery] = useFilter(wishlist , (wishlistItem) => wishlistItem.title);
    const [inputValue , setInputValue] = useState();
    const [toggleBar , setToggleBar] = useState(true);
    
    return (
        <AppConotext.Provider value={{filteredData , setQuery , filteredCartData , setCartQuery , filteredWishlistData , setWishlistQuery , baseUrl , inputValue , setInputValue , setToggleBar , toggleBar}}>
            {children}
        </AppConotext.Provider>
    )
}

export default FilterWrapper;