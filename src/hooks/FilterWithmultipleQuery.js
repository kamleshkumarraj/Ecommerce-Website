import { useState } from "react"

export const useFilterCategory = (allCategoriesData ) => {
    const [categories , setCategory] = useState(['tops']);
    
    let filteredData = {}
    if(categories.length ==0 ){
        filteredData = allCategoriesData;
    }
    else{
        categories.map((category) => {
            filteredData = {...filteredData , category}
        })
    }

    return [filteredData , setCategory]

}