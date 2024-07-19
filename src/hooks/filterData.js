import { useState } from "react";

const useFilter = (productList , callback) => {
    const [query , setQuery] = useState('');
    console.log(query)
    const filteredData =  productList.filter((product) => {
       return callback(product).toLowerCase().includes(query.toLowerCase())
    })
    console.log(filteredData)

    return [filteredData , setQuery]
}

export default useFilter;