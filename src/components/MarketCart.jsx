import { FaArrowCircleRight, FaHeart } from "react-icons/fa";
import { FaRegHeart, FaRegStar } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetCategoryCartStatus, resetCategorywishlistStatus, setCategoryCartStatus, setCategoryWishlistStatus } from "../store/Slices/AllCategoryProducts";
import { addWishlistItem, removeWishlistItem } from "../store/Slices/WishlistItem";
import { addCartItem, removeCartItem } from "../store/Slices/AddCart";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
function MarketCart({ id , rating , image , price ,title , category , wishlistStatus , cartlistStatus}) {
    const dispatch = useDispatch();
    
    const wishListHandler = (category) =>{
        if(wishlistStatus){
          dispatch(resetCategorywishlistStatus({id , status :false , category}))
          dispatch(removeWishlistItem({id , status : false}))
          toast.success("product is remove successfully from wishlist")
        }
        else{
          dispatch(addWishlistItem({id , status : true , quantity :1 , image , price , category , title , rating}))
          dispatch(setCategoryWishlistStatus({id , status : true , category}))
          toast.success("product is add successfully in wishlist")
        }
      }
      const cartlistHandler = (category) =>{
        if(cartlistStatus){
          dispatch(resetCategoryCartStatus({id , status :false , category}))
          dispatch(removeCartItem({id , status : false}))
          toast.success("product is remove successfully from cartlist")
        }
        else{
          dispatch(addCartItem({id , status : true , quantity :1 , image , price , category , title , rating}))
          dispatch(setCategoryCartStatus({id , status : true , category}))
          toast.success("product is add successfully in cartlist")
        }
      }
    const starList = [1,2,3,4,5]
    let newRating = rating;
  return (
    <div id="product" className="overflow-hidden px-[2rem] shadow-2xl bg-[white] rounded-[2rem] max-w-[1fr] sm:px-[4rem]  py-[2rem] flex flex-col justify-center relative" key={id}  >
      <img className="max-h-[20rem] mx-auto " src={image} alt="" /> 
      <p className="text-[2rem] front-[500] my-[1rem]">₹{price}</p>
      <div id="weashlist-heart" className="hover:cursor-pointer z-[1]" 
      >
      {
        wishlistStatus == true ?  
        <FaHeart size={'2.4rem'} style={{position : 'absolute' , top : 15 , right : 15, zIndex : 10000 , color : 'red'}} onClick={() =>{
            wishListHandler(category)
        }}/> :
        <FaRegHeart size={'2.4rem'} style={{position : 'absolute' , top : 15 , right : 15, zIndex : 10000}} onClick={() => wishListHandler(category)}/> 
      }
      </div>
      <h1 id="title" className="text-[1.8rem] font-[500]">{title} </h1>

      <div id="rating" className='flex gap-[1rem] my-[1.5rem]'>
            {
                starList.length > 0 ? starList.map((Star , idx) => {
                  
                    if(newRating >=1){
                        newRating --;
                        return <TiStarFullOutline key={idx} size={'2.4rem'} style={{color : 'green'}} />;
                    }
                    else{
                        return <FaRegStar  key={idx} size={'2.4rem'} />
                    }
                }) : ''
            }
        </div>
        <div id="btn" className="flex justify-between gap-[1rem]">
        <Link to={`/product-list/product-details?category=${category}`} id="btn" state={{id , category}}  className="flex rounded-[1rem] gap-[1rem] py-[.8rem] bg-[#88887769] px-[1rem] items-center">
            <p className="text-[1.8rem] font-[600]">Details</p>
            <FaArrowCircleRight size={'2.4rem'} />
        </Link>

        <div id="add-to-cart" className="flex rounded-[1rem] py-[.8rem] bg-[#88887769] px-[1rem] items-center hover:cursor-pointer " onClick={() => {
           cartlistHandler(category)
        }}>
          <p className="text-[1.8rem] font-[600]">{
            cartlistStatus == true ? 'Remove to Cart' : 'Add to Cart'
          }</p>
        </div>

        </div>
     
 </div>
  )
}

export default MarketCart
