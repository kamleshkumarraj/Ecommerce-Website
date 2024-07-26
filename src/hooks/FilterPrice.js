

function useFilterPrice(allData , category , query){
  
    const filteredData ={}
    category.map((category) => {
       let filterPrice =  query.map((query) =>{
            switch (query){
                case 'Rs. 99 and below':
                    return allData[category].filter((product) => product.price >= 0 && product.price <=99)
                case 'Rs. 100-199':
                    return allData[category].filter((product) => product.price >= 100 && product.price <=199)
                case 'Rs. 200-399':
                    return allData[category].filter((product) => product.price >= 200 && product.price <=399)
                case 'Rs. 400-699':
                    return allData[category].filter((product) => product.price >= 400 && product.price <=699)
                case 'Rs. 700-999':
                    return allData[category].filter((product) => product.price >= 700 && product.price <=999)
                case 'Rs. 1000 and above':
                    return allData[category].filter((product) => product.price >= 1000)



            }
        })
        filteredData[category] = filterPrice.flat(1);

    })
    return [filteredData];
}
export default useFilterPrice