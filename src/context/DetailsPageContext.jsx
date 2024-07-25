import { createContext, useState } from "react";

export const DetailsPageContext = createContext();

function DetailsPage({children}){
    const [item , setItem] = useState();
    const [detailsPage , setDetailsPage] = useState(item);
    
    return (
        <DetailsPageContext.Provider value={{detailsPage , setDetailsPage , item , setItem}}>
            {children}
        </DetailsPageContext.Provider>
    )
}

export default DetailsPage;