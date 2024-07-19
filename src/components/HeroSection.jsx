import Button from "./Button"
import { FiRefreshCw } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getWishlistLen } from "../store/Slices/WishlistItem";

function HeroSection() {
    
    const wishlistLen = useSelector(getWishlistLen);
  return (
    <div className="max-w-[138rem] grid grid-cols-2 mx-auto bg-fixed">
        <div id="left-section" className="p-[2rem] flex flex-col pt-[4rem] bg-fixed">
            <div id="subheading" className="bg-[white] text-[1.8rem] font-[400] mt-[6rem] max-w-[27rem]">
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

        <div id="right-section" className="px-[5rem] pt-[3rem]">
            <div id="card" className="w-[100%] ">

                <header className="flex justify-between py-[1.5rem] px-[3rem] font-[600] text-[2.4rem] bg-[#d2c2c27d] rounded-tl-[5rem] items-center">
                <div id="refresh" className="flex gap-[2rem] items-center ">
                    <p>New Products</p>
                    <p className={`hover:cursor-pointer`} >
                        <FiRefreshCw size={'2.4rem'} onClick={() => {
                        }}/>
                    </p>
                    
                </div>
                <div id="wishlist" className="relative"> 
                    <FaRegHeart size={'2.4rem'} />
                    <p className="absolute top-[-70%] left-9 text-[1.8rem]">{wishlistLen}</p> 
                    </div>
                </header>
                {
                    
                }
                
            </div>
        </div>
    </div>
  )
}

export default HeroSection
