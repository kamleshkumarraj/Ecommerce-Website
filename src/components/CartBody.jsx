import { useSelector } from "react-redux"
import {getCartData} from "../store/Slices/AddCart.js";
import CartItem from "./CartItem.jsx";

function CartBody() {
    const cartDataList = useSelector(getCartData)
    let totalPrice = 0;
    
  return (
    <div id="cart-container" className="w-[100%] rounded-b-[2rem] bg-[#97a0aee2] py-[2rem] mx-[2rem] relative">
      
        <div id="cart-body" className="">
          {
            cartDataList.length != 0 ? 
              cartDataList.map((cartItem) => {
                totalPrice = cartItem.price*cartItem.quantity + totalPrice;
                return <CartItem 
                    id={cartItem.id}
                    image = {cartItem.image}
                    key = {cartItem.id}
                    quantity = {cartItem.quantity}
                    price = {cartItem.price}
                    category= {cartItem.category}
                    title={cartItem.title}
                    rating={cartItem.rating}
                />
              })  
            : "Loading ...."
          }
          </div>

        <div id="price" className="flex justify-end px-[4rem]">
            <p className=" text-[2rem] font-[500]">Total Price = ₹{totalPrice}</p>
        </div>
      
       
    </div>
  )
}

export default CartBody
