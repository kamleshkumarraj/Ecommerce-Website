import { createContext,  useState } from "react";
import { useSelector } from "react-redux";
import { getAllCategoriesProducts } from "../store/Slices/AllCategoryProducts";


export const MarketFilter = createContext()

function FilterProvider({children}){
    
    const allCategoriesProducts = useSelector(getAllCategoriesProducts)
    const [categoriesList , setCategoriesList] = useState(Object.keys(allCategoriesProducts))
    const [priceRange , setPriceRange] = useState([]);
    const [ratingRange , setRatingRange] = useState([])
    
    return (
        <MarketFilter.Provider value={{categoriesList , setCategoriesList , allCategoriesProducts,priceRange,setPriceRange,ratingRange,setRatingRange}}>
            {children}
        </MarketFilter.Provider>
    )
}

export default FilterProvider
