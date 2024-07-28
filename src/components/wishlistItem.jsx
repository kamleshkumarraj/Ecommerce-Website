import { FaRegStar } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { resetwishlistStatus } from "../store/Slices/ProductList";
import { FiMinus, FiPlus } from "react-icons/fi";
import { checkWishlistQty, decreaseWishlistQuantity, increaseWishlistQuantity } from "../store/Slices/WishlistItem";
import { resetCategorywishlistStatus } from "../store/Slices/AllCategoryProducts";
import { toast } from "react-toastify";
import { checkQty } from "../store/Slices/AddCart";

// eslint-disable-next-line react/prop-types
function WishlistItem({image , quantity , price , id , category , title , rating}) {
    const starList = [1,2,3,4,5];
    // eslint-disable-next-line react/prop-types
    const titleNew = title?.slice(0,50)
    const dispatch = useDispatch();
  return (
    <>
    <div className="max-w-[138rem] sm:mx-auto p-[2rem] flex flex-col justify-between sm:items-center items-center gap-[1rem] sm:flex-row" id="cart-item" key={id}>
        <div id="img" className="sm:w-[50%] w-[90%] min-h-[20rem] sm:h-[20rem] flex max-w-[40rem] flex-col sm:flex-row items-center ">
            <img className="h-[100%] min-w-[20rem] p-[1rem] bg-[white] rounded-[1rem]" src={image} alt="" />
            <div id="details" className="px-[2rem] py-[2rem] flex flex-col justify-between gap-[1rem] items-center">
                <h1 className="text-[1.5rem] bg-[white] max-w-[15rem] grid place-content-center font-[400] uppercase px-[1rem]">{category}</h1>
                <h1 className="text-[1.7rem] font-[600] ">{titleNew}</h1>
                <div id="rating" className="flex my-[.5rem] gap-[.8rem]">
                    {
                        starList.map((Star , idx) => {
                            if(rating > 0){
                                rating --;
                                return <TiStarFullOutline key={idx} size={'2.4rem'} style={{color : 'green'}} />;
                            }
                            else{
                                return <FaRegStar  key={idx} size={'2.4rem'} />
                            }
                        })
                    }
                </div>
            </div>
        </div>
        <div id="details" className="center gap-[1rem] flex flex-col sm:flex-row  sm:w-[50%]  sm:justify-between pr-[2rem]">
            <div id="price" className="self-center hidden sm:block">
                <h1 className="text-[2rem] font-[600]">₹{price}</h1>
            </div>
            <div id="quantity" className="flex gap-[1rem] items-center justify-center pr-[1rem]">
            <div id="increaseBtn" className="font-[600] text-[2.8rem] p-[.5rem] grid place-content-center py-[-2rem] border-[1px] rounded-[.5rem] border-[#bb00ff] hover:cursor-pointer" onClick={() => {
                dispatch(increaseWishlistQuantity({id}))
                toast.success("Quantity increased by 1")
                }}> 
                <FiPlus size={'2rem'} /> 
            </div>
            
            <p className="text-[2rem] font-[600]">{quantity}</p>
            
            <div id="decreaseBtn" className="hover:cursor-pointer font-[600] text-[2.8rem] p-[.5rem] grid place-content-center py-[-2rem] border-[1px] rounded-[.5rem] hover:cursor- border-[#bb00ff]" onClick={() => {
                if(quantity == 1){
                    dispatch(resetwishlistStatus({status : false , id}))
                    dispatch(resetCategorywishlistStatus({id , status : false , category}))
                    toast.error("product is removed from wishlist")
                }
                    dispatch(decreaseWishlistQuantity({id}))
                    dispatch(checkWishlistQty())
                    toast.success("Quantity is decreased by 1")
                
                
            }}> <FiMinus size={'2rem'} /> </div>
            </div>
            <div id="total-price" className="pr-[1.5rem]">
            <p className="text-[2.4rem] font-[500 my-[1rem]"> <span className="sm:hidden">Total Price : </span>
            {`₹` + `${price}` * `${quantity}`}
          </p>
            </div>
        </div>
        
    </div>
    <hr className="m-[2rem]"/>
    </>
  )
}

export default WishlistItem
