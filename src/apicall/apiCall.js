import { addProducts } from "../store/Slices/ProductList";

const apiCall = () =>  (dispatch) =>{
  
  fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((data) => {
          dispatch(addProducts(data))
          
        })
   
}
export default apiCall;
