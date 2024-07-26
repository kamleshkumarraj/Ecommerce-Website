import { createContext,  useState } from "react";
import { useSelector } from "react-redux";
import { getAllCategoriesProducts } from "../store/Slices/AllCategoryProducts";
import useFilterPrice from "../hooks/FilterPrice";
import useFilterRating from "../hooks/FilterRating";


export const MarketFilter = createContext()

// eslint-disable-next-line react/prop-types
function FilterProvider({children}){
    
    const allCategoriesProducts = useSelector(getAllCategoriesProducts)
    const [categoriesList , setCategoriesList] = useState(Object.keys(allCategoriesProducts))
    let filterRatingData = [];
    const [priceRange , setPriceRange] = useState([]);
    const [ratingRange , setRatingRange] = useState([])
    const [filteredData ] = useFilterPrice(filterRatingData.length > 0 ? filterRatingData : allCategoriesProducts,categoriesList , priceRange)
    const [filteredRatingData] = useFilterRating(priceRange.length> 0 ? filteredData : allCategoriesProducts , categoriesList , ratingRange)
    filterRatingData = filteredRatingData;

    return (
        <MarketFilter.Provider value={{categoriesList , setCategoriesList , allCategoriesProducts,priceRange,setPriceRange,ratingRange, filteredRatingData, setRatingRange , filteredData }}>
            {children}
        </MarketFilter.Provider>
    )
}

export default FilterProvider
