import { useState } from "react";
const baseUrl = window.location.href;

const useFilter = (productList , callback) => {
    const [query , setQuery] = useState('');
    const filteredData =  productList.filter((product) => {
       return callback(product).toLowerCase().includes(query.toLowerCase().trim())
    })
    return [filteredData , setQuery]
}

export default useFilter;