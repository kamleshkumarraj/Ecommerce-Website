/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const homeContext = createContext();

function HomeContext({children}){
    

    return (
        <homeContext.Provider value={"Kamlesh"}>
            {children}
        </homeContext.Provider>
    )
}
export default HomeContext
