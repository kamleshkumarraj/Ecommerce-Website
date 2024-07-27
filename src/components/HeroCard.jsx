/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import Button from './Button'
import { TiStarFullOutline } from "react-icons/ti";
import { resetCartStatus, resetwishlistStatus, setCartStatus, setWishlistStatus } from '../store/Slices/ProductList';
import { addCartItem, removeCartItem } from '../store/Slices/AddCart';
import { addWishlistItem, removeWishlistItem } from '../store/Slices/WishlistItem';

function HeroCard({id , image , price , title , description , rating , cartlistStatus , wishlistStatus , category}) {
    let constratinglist = [1,2,3,4,5];
    const dispatch = useDispatch();
    title = title.slice(0,50);
    const wishListHandler = () => {
            if(wishlistStatus){
              dispatch(resetwishlistStatus({id , status :false}))
              dispatch(removeWishlistItem({id , status : false}))
            }
            else{
              dispatch(addWishlistItem({id , status : true , quantity :1 , image , price , category , title , rating}))
              dispatch(setWishlistStatus({id , status : true}))
            }
    }
    const cartHandler = () => {
        if(!cartlistStatus){
            dispatch(setCartStatus({id , status : true}))
            dispatch(addCartItem({id , status : true , quantity :1 , image , price , category , title , rating}))
          }
          else{
            dispatch(resetCartStatus({id , status : false}))
            dispatch(removeCartItem({id , status : false}))
          }
    }

  return (
    <div id="product" className="py-[1rem] shadow-lg px-[2rem] grid-cols-1 items-center justify-center grid sm:grid-cols-2 lg:h-[45rem] sm:gap-[2rem] bg-[#ffffffc3] overflow-hidden rounded-br-[5rem] " key={id}>
    <div id="img" className='w-[50%] sm:w-[100%] sm:h-[75%] rounded-[2rem] bg-[white] grid place-content-center mt-[3rem] mx-auto sm:mx-0 lg:mt-[1rem] sm:px-[1rem] sm:my-0'>
        <img className=" w-[100%] sm:h-[100%] rounded-[2rem] " src={image} alt="" /> 
    </div>
    <div id="details" className='p-[1rem] flex flex-col justify-between py-[2rem]'>
        <p className="text-[2rem] front-[500] my-[1rem]">₹{price}</p>
        <h1 id="title" className="text-[2.4rem] font-[500]">{title} </h1>
        <p className="text-[1.3rem] font-[500] text-[#000002b0]" id="description">{description}</p>
        <div id="rating" className='flex gap-[1rem] my-[1.5rem]'>
            {
                constratinglist.length > 0 ? constratinglist.map((Star , idx) => {
                    if(rating > 0){
                        rating --;
                        return <TiStarFullOutline key={idx} size={'2.4rem'} style={{color : '#db7602'}} />;
                    }
                    else{
                        return <TiStarFullOutline key={idx} size={'2.4rem'} />
                    }
                }) : ''
            }
        </div>
        <div id="button " className='flex  sm:mb-[4rem] flex-col gap-[2rem] mt-[1.5rem]'>
        <div className='mx-auto sm:mx-0' id="cart-bnt" onClick={cartHandler}>
            <Button 
                label={`${cartlistStatus == true ? 'Remove to Cartlist' : 'Add to Cartlist'}`}
                bgColor={'bg-[#123f65]'}
                
            />
        </div>
        <div className='mx-auto sm:mx-0' id="wishlist-btn" onClick={wishListHandler}>
            <Button 
                label={`${wishlistStatus == true ? 'Remove to Wishlst' : 'Add to Wishlist'}`}
                bgColor={'bg-[#341]'}
                
            />
        </div>
        </div>
    </div>
    </div>
  )
}

export default HeroCard
