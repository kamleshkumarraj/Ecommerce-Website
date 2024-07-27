import Button from "./Button"
import { FiRefreshCw } from "react-icons/fi";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct, resetwishlistStatus, setWishlistStatus } from "../store/Slices/ProductList";
import HeroCard from "./HeroCard";
import LoadingCard from "./LoadingCard";
import { addWishlistItem, removeWishlistItem } from "../store/Slices/WishlistItem";
import { useState } from "react";

function HeroSection() {
    const [randomIdx , setRandomIdx] = useState(12)
    const productlist = useSelector(getAllProduct)[randomIdx];
    const dispatch = useDispatch();
  return (
    <div className="lg:max-w-[138rem]  sm:grid-cols-1 grid md:grid-cols-2  mx-auto bg-fixed sm:px-[0rem] ">
        <div id="left-section" className="lg:p-[2rem] p-[2rem] flex flex-col lg:pt-[4rem] bg-fixed sm:items-start items-center">
            <div id="subheading" className="bg-[white] text-[1.8rem] font-[400] md:mt-[6rem] mt-[3rem] max-w-[27rem]">
                <h1>#1 ECOMMERCE PLATFORM 2024</h1>
            </div>
            <div id="heading" className="font-[600] mt-[2rem]">
                <h1 className="text-[6.4rem] text-[#f3f5f4] font-[700] font-['mukta'] ">Explore, shop, <br /> repeat again.</h1>
            </div>
            <div id="title">
                <p className="text-[1.8rem] mt-[2rem] font-[500] text-[#0a0b0b]">Commurz is a driving force behind the dreams of emering  enterprenures, <br /> a trusted partner for industry leaders.</p>
            </div>
            <div id="button" className="mt-[6rem] mb-[2rem]">
                <Button 
                    label = "Start free trail"
                    bgColor={'bg-[#28574B]'}
                    color = {'text-[white]'}
                />
            </div>
        </div>

        <div id="right-section" className="lg:px-[5rem] p-[1rem] pt-[5rem]">
            <div id="card" className="w-[100%] ">

                <header className="flex justify-between py-[1.5rem] px-[3rem] font-[600] text-[2.4rem] bg-[#d2c2c27d] rounded-tl-[5rem] items-center">
                <div id="refresh" className="flex gap-[2rem] items-center ">
                    <p>New Products</p>
                    <p className={`hover:cursor-pointer`} >
                        <span id="refresh"  className={`hover:rotate-180`}>
                            <FiRefreshCw   size={'2.4rem'} onClick={() => {
                                setRandomIdx(Math.floor((Math.random()*19 +1)))
                                
                            }}/>
                        </span>
                    </p>
                    
                </div>
                <div id="wishlist" className="relative hover:cursor-pointer" onClick={() => {
                    if(productlist?.wishlistStatus){
                      dispatch(resetwishlistStatus({id : productlist?.id , status :false}))
                      dispatch(removeWishlistItem({id : productlist?.id , status : false}))
                    }
                    else{
                      dispatch(addWishlistItem({id : productlist?.id , status : true , quantity :1 , image : productlist?.image , price : productlist?.price , category : productlist?.category , title : productlist?.title , rating : productlist?.rating}))
                      dispatch(setWishlistStatus({id : productlist?.id , status : true}))
                    }
                  }}> 
                    {
                        productlist?.wishlistStatus == true ? 
                            <FaHeart size={'2.4rem'} style={{color : 'red'}}/> :
                            <FaRegHeart size={'2.4rem'} />
                        
                    }
                    
                    </div>
                </header>
                {
                  productlist && productlist.id > 0 ? <HeroCard 
                        key={productlist.id}
                        id={productlist.id}
                        image= {productlist.image}
                        title = {productlist.title}
                        rating={productlist.rating.rate}
                        cartlistStatus={productlist.cartStatus}
                        wishlistStatus={productlist.wishlistStatus}
                        price={productlist.price}
                        category={productlist.category}
                   /> : <LoadingCard />
                }
                
            </div>
        </div>
    </div>
  )
}

export default HeroSection
