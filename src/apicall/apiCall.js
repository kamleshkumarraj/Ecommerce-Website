import { addCategoryProducts } from "../store/Slices/AllCategoryProducts";
import { addProducts } from "../store/Slices/ProductList";

const apiCall = (baseUrl , url) =>  (dispatch) =>{
  url== undefined ? fetch(baseUrl)
        .then(res=>res.json())
        .then((data) => {
          dispatch(addProducts(data))
        })
      :
      fetch(baseUrl+url)
        .then(res=>res.json())
        .then((data) => {
          dispatch(addCategoryProducts(data.products))
        })
   
}
export default apiCall;
