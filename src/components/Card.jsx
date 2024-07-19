/* eslint-disable react/prop-types */
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import Button from "./Button"
import { useDispatch } from "react-redux";
import { resetCartStatus, resetwishlistStatus, setCartStatus, setWishlistStatus } from "../store/Slices/ProductList";
import { addCartItem, removeCartItem} from "../store/Slices/AddCart";
import { addWishlistItem } from "../store/Slices/WishlistItem";

function Card({id , image , price , title , cartStatus , wishlistStatus}) {
  
  const dispatch = useDispatch();
  return (
    <div id="product" className="h-[50rem] px-[2rem] shadow-2xl bg-[white] rounded-[2rem] py-[1rem] flex flex-col justify-center relative"  key={id} >
      <img className="h-[50%] mx-auto" src={image} alt="" /> 
      <p className="text-[2rem] front-[500] my-[1rem]">${price}</p>
      {
      wishlistStatus == true ?  
      <FaHeart size={'2.4rem'} style={{position : 'absolute' , top : 15 , right : 15, zIndex : 10000 , color : 'red'}}/> :
       <FaRegHeart size={'2.4rem'} style={{position : 'absolute' , top : 15 , right : 15, zIndex : 10000}} /> 
      }
      <h1 id="title" className="text-[1.8rem] font-[500]">{title} </h1>
      
      <div id="cart-button" className="my-[1rem] grid place-content-center w-[100%]" onClick={() => {
          if(!cartStatus){
            dispatch(setCartStatus({id , status : true}))
            dispatch(addCartItem({id , status : true , quantity : 1}))
          }
          else{
            dispatch(resetCartStatus({id , status : false}))
            dispatch(removeCartItem({id , status : false}))
          }
           
          
          
      }}>
        <Button 
          label = {`${cartStatus == true ? "Remove from cart" : "Add to cart"}`}
          bgColor = "bg-[blue]"
        />
        </div>
        <div id="wishlis-button" className="my-[1rem] grid place-content-center w-[100%]" onClick={() => {
          if(wishlistStatus){
            dispatch(resetwishlistStatus({id , status :false}))
          }
          else{
            dispatch(addWishlistItem({id , status :true , quantity :1}))
            dispatch(setWishlistStatus({id , status : true}))
          }
        }}>
        <Button 
          label = {`${wishlistStatus==true ? "Remove from wishlist" : "Add to wishlist"}`}
          bgColor = "bg-[yellow]"
        />
        </div>
 </div>
  )
}

export default Card
