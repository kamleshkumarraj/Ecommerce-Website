/* eslint-disable react/prop-types */
import { addWishlistItem, removeWishlistItem } from "../store/Slices/WishlistItem";
import { addCartItem, removeCartItem } from "../store/Slices/AddCart";
import {  resetCategoryCartStatus, resetCategorywishlistStatus, setCategoryCartStatus, setCategoryWishlistStatus} from '../store/Slices/AllCategoryProducts'; 
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TiStarFullOutline } from "react-icons/ti";
import { FaRegStar } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";
import Button from "./Button";
import { Link } from "react-router-dom";

function DetailsProduct({img,product , productItem , setImg}) {
    
    const starList = [1,2,3,4,5]
    let [quantity , setQty] = useState(1)
    const [price , setPrice] = useState(product.price)
    let newRating = product.rating;
    const dispatch = useDispatch()
    const wishListHandler = () =>{
        if(product.wishlistst){  
          dispatch(resetCategorywishlistStatus({id : product.id , status :false , category : productItem.category}))
          dispatch(removeWishlistItem({id : product.id , status : false}))
        }
        else{  
          dispatch(addWishlistItem({id : product.id, status : true , quantity , image : product.images[0], price : product.price , category : productItem.category , title : product.title , rating : product.rating}))
          dispatch(setCategoryWishlistStatus({id : product.id , status : true , category : productItem.category}))
        }
      }

      const cartlistHandler = () =>{
        if(product.cartStatus){  
          dispatch(resetCategoryCartStatus({id : product.id , status :false , category : productItem.category}))
          dispatch(removeCartItem({id : product.id , status : false}))
        }
        else{
            
          dispatch(addCartItem({id : product.id, status : true , quantity  , image : product.images[0], price : product.price , category : productItem.category , title : product.title , rating : product.rating}))
          dispatch(setCategoryCartStatus({id : product.id , status : true , category : productItem.category}))
         
        }
      }
  return (
    <div id="top-bar" className="grid md:grid-cols-2 grid-cols-1 px-[2rem] max-w-[138rem] mx-auto min-h-[40rem] mb-[2rem] gap-[5rem] ">
            <div id="img" className="w-[100%] flex flex-col border-[.5px] border-[#00000121] rounded-[2rem] p-[2rem] flex-wrap items-start">
                <div id="big-image" className="w-[100%]  ">
                    <img className="w-[70%] max-h-[90vh] mx-auto" src={img} alt="" />
                </div>
                <div id="img-box" className="flex max-h-[6rem] w-[100%] justify-start gap-[.5rem] my-[1rem] flex-wrap mx-[2rem] ">
                    <img className="h-[100%] w-[15%] p-[1px] border-[.5px] rounded-[.5rem] border-[#00000021]" src={product.thumbnail} alt="" onClick={() => {
                        setImg(product.thumbnail)
                    }}/>
                    {
                        product.images.map((images,idx) => {
                            return <img key={idx}  className="h-[100%] w-[15%] p-[1px] border-[.5px] rounded-[.5rem] border-[#00000021]" src={images} onClick={() =>{
                                setImg(images)
                                
                            }} alt="" />
                           
                        })
                    }
                </div>
            </div>
            <div id="detials" className="py-[4rem] md:px-[2rem] flex flex-col gap-[1rem] text-[1.6rem] font-[500]">
                <h1 className="text-[2.4rem] font-[600]" id="title"><i className="font-[400]">Brands : &nbsp;</i>{product.title}</h1>
                <p className="text-[1.6rem] font-[500] from-neutral-500">{product.description}</p>
                <div id="rating-box" className="my-[1.5rem]">
                <h1 className="text-[1.8rem]"><i>Rating : </i></h1>
                <div id="rating" className='flex gap-[1rem]'>
                
            {
                starList.length > 0 ? starList.map((Star , idx) => {
                  
                    if(newRating > 0){
                        newRating --;
                        return <TiStarFullOutline key={idx} size={'2.4rem'} style={{color : '#E3B05C'}} />;
                    }
                    else{
                        return <FaRegStar  key={idx} size={'2.4rem'} />
                    }
                }) : ''
            }
        </div>
                </div>
                <p className="text-[2rem]" id="price">${price} <i className="text-[1.6rem] font-[400]">/pieces</i> </p>
                <div id="dub-details" className="flex flex-col ">
                    <p><b className="text-[1.8rem]">Brand : &nbsp;</b>{product.brand}</p>
                    <p><b className="text-[1.8rem]">Category : &nbsp;</b>{product.category}</p>
                    <p><b className="text-[1.8rem]">Stock : &nbsp;</b>{product.stock}</p>
                    <p><b className="text-[1.8rem]">Weight : &nbsp;</b>{product.weight}</p>
                </div>
                <hr className="my-[.5rem]"/>
                
                <div id="size-qty" className="flex justify-start md:justify-around flex-wrap gap-[2rem]">
                <div id="size">
                <label className="text-[1.8rem] font-[600]" htmlFor="select">Select : </label> <br />
                    <select className="border-[1px] my-[.5rem] px-[2rem] py-[.5rem] text-[1.8rem] w-[18rem]" name="select" id="">
                        <option value="big">Big</option>
                        <option value="medium">Medium</option>
                        <option value="samll">Small</option>
                    </select>
                </div>
                <div id="quantity" className=" gap-[1rem] justify-center pr-[1rem] flex flex-col">
                <h1 className="text-[2rem]">Quantity : </h1> 
                <div id="btn" className="flex md:gap-[.5rem] flex-wrap gap-[1rem]">
                        <div id="increaseBtn" className="font-[600] text-[2.8rem] p-[.5rem] grid place-content-center py-[-2rem] border-[1px] rounded-[.5rem] hover:cursor-pointer"  onClick={() => {
                            quantity += 1;
                            setQty(quantity)
                            setPrice(quantity*product.price)
                            }}> 
                        <FiPlus size={'2rem'} /> 
                    </div>
                    
                    <p className="text-[2rem] font-[600] border-[.5px] border-[#0000012] px-[2rem] py-[.5rem]">{quantity}</p>
                    
                    <div id="decreaseBtn" className="font-[600] text-[2.8rem] p-[.5rem] grid place-content-center py-[-2rem] border-[1px] rounded-[.5rem] hover:cursor-pointer" > <FiMinus size={'2rem'} onClick={() => {
                        if(quantity > 1){
                            quantity -= 1;
                            setQty(quantity)
                            setPrice(quantity*product.price)
                        }
                        
                        
                        
                    }}/> </div>
                    </div>
                </div>
                </div>
                <div id="return-policy">
                    <p className="text-[2rem]" id="return">Return Policy : <span className="text-[1.8rem] px-[4rem]">{product.returnPolicy}</span></p>
                </div>

                <div id="last-qty">
                    <p className="text-[1.8rem]">Last Order within 10days : {product.minimumOrderQuantity} qty</p>
                </div>

                <div id="warranty">
                    <p className="warranty text-[1.8rem] font-[500]">Warranty : {product.warrantyInformation}</p>
                </div>
                <div id="btn" className="flex gap-[2rem] my-[2rem] flex-col sm:flex-row">
                    <Link to={'/productlist-pages/product-details/buy-page'}>
                        <Button 
                        label={"Buy Now"}
                        bgColor={'bg-[#E5A018]'}
                        />
                    </Link>
                    <div id="cart-btn" onClick={cartlistHandler}>
                        <Button 
                        label={product.cartStatus == true ? 'Remove to Cart' : 'Add to Cart'}
                        bgColor={'bg-[#3B71CA]'}
                        />
                    </div>
                    <div id="wishlist-btn" onClick={wishListHandler}>
                    <Button 
                    label={product.wishlistStatus == true ? 'Remove from wishlist ' : 'Add to Wishlist'}
                    bgColor={'bg-[#6C59CA]'}
                    />
                    </div>
                    
                
                </div>
            </div>
        </div>
  )
}

export default DetailsProduct
