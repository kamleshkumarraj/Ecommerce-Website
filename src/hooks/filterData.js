import { useState } from "react";

const useFilter = (productList , callback) => {
    const [query , setQuery] = useState('');
    const filteredData =  productList.filter((product) => {
       return callback(product).toLowerCase().includes(query.toLowerCase())
    })
    return [filteredData , setQuery]
}

export default useFilter;