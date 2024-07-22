/* eslint-disable react/prop-types */
import { FaRegHeart, FaRegStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import Button from "./Button"
import { useDispatch } from "react-redux";
import { resetCartStatus, resetwishlistStatus, setCartStatus, setWishlistStatus } from "../store/Slices/ProductList";
import { addCartItem, removeCartItem} from "../store/Slices/AddCart";
import { addWishlistItem, removeWishlistItem } from "../store/Slices/WishlistItem";
import { TiStarFullOutline } from "react-icons/ti";

function Card({id , image , price , title , cartStatus , wishlistStatus , rating , category , quantity}) {

  const starList = [1,2,3,4,5];
  let newRating = rating;
  const dispatch = useDispatch();
   
  const cartListHandler = () => {
    if(!cartStatus){
      dispatch(setCartStatus({id , status : true}))
      dispatch(addCartItem({id , status : true , quantity :1 , image , price , category , title , rating}))
    }
    else{
      dispatch(resetCartStatus({id , status : false}))
      dispatch(removeCartItem({id , status : false}))
    }
  }
  const wishListHandler = () =>{
    if(wishlistStatus){
      dispatch(resetwishlistStatus({id , status :false}))
      dispatch(removeWishlistItem({id , status : false}))
    }
    else{
      dispatch(addWishlistItem({id , status : true , quantity :1 , image , price , category , title , rating}))
      dispatch(setWishlistStatus({id , status : true}))
    }
  }
  return (
    <div id="product" className="h-[55rem] px-[2rem] shadow-2xl bg-[white] rounded-[2rem] py-[1rem] flex flex-col justify-center relative"  key={id} >
      <img className="h-[40%] mx-auto" src={image} alt="" /> 
      <p className="text-[2rem] front-[500] my-[1rem]">₹{price}</p>
      <div id="weashlist-heart" className="hover:cursor-pointer" onClick={() => {
        if(wishlistStatus){
          dispatch(resetwishlistStatus({id , status :false}))
          dispatch(removeWishlistItem({id , status : false}))
        }
        else{
          dispatch(addWishlistItem({id , status : true , quantity :1 , image , price , category , title , rating}))
          dispatch(setWishlistStatus({id , status : true}))
        }
      }}>
      {
        wishlistStatus == true ?  
        <FaHeart size={'2.4rem'} style={{position : 'absolute' , top : 15 , right : 15, zIndex : 10000 , color : 'red'}}/> :
        <FaRegHeart size={'2.4rem'} style={{position : 'absolute' , top : 15 , right : 15, zIndex : 10000}} /> 
      }
      </div>
      <h1 id="title" className="text-[1.8rem] font-[500]">{title} </h1>

      <div id="rating" className='flex gap-[1rem] my-[1.5rem]'>
            {
                starList.length > 0 ? starList.map((Star , idx) => {
                  
                    if(newRating > 0){
                        newRating --;
                        return <TiStarFullOutline key={idx} size={'2.4rem'} style={{color : 'green'}} />;
                    }
                    else{
                        return <FaRegStar  key={idx} size={'2.4rem'} />
                    }
                }) : ''
            }
        </div>
      
      <div id="cart-button" className="my-[1rem] grid place-content-center w-[100%]" onClick={cartListHandler}>
        <Button 
          label = {`${cartStatus == true ? "Remove from cart" : "Add to cart"}`}
          bgColor = "bg-[blue]"
        />
        </div>

        <div id="wishlis-button" className="my-[1rem] grid place-content-center w-[100%]" onClick={wishListHandler}>
        <Button 
          label = {`${wishlistStatus==true ? "Remove from wishlist" : "Add to wishlist"}`}
          bgColor = "bg-[yellow]"
        />
        </div>
 </div>
  )
}

export default Card
