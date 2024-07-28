

function useFilterRating(allData , category , query){
    
    const filteredRatingData ={}
    category.map((category) => {
       let filterrating =  query.map((query) =>{
            switch (query){
                case '1 Rating and above':
                    return allData[category].filter((product) => product.rating >= 0 && product.rating <= 5)
                case '2 Rating and above':
                    return allData[category].filter((product) => product.rating >= 2 )
                case '3 Rating and above':
                    return allData[category].filter((product) => product.rating >= 3 )
                case '4 Rating and above':
                    return allData[category].filter((product) => product.rating >= 4 )
                case '5 Rating':
                    return allData[category].filter((product) => product.rating == 5 )
            }
        })
        filteredRatingData[category] = filterrating.flat(1);

    })
    return [filteredRatingData];
}
export default useFilterRating