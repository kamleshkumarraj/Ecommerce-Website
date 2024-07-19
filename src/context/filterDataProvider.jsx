import { createContext } from "react";
import useFilter from "../hooks/filterData";
import { useSelector } from "react-redux";
import { getAllProduct } from "../store/Slices/ProductList";

// eslint-disable-next-line react-refresh/only-export-components
export const filterData = createContext();

function FilterWrapper({children}){
    const productsList = useSelector(getAllProduct)
    const [filteredData , setQuery] = useFilter(productsList , (product) => product.title)
    
    return (
        <filterData.Provider value={[filteredData , setQuery]}>
            {children}
        </filterData.Provider>
    )
}

export default FilterWrapper;