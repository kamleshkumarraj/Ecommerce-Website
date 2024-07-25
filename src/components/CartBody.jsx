
import CartItem from "./CartItem.jsx";
import { useContext } from "react";
import { AppConotext } from "../context/filterDataProvider.jsx";

function CartBody() {
    let totalPrice = 0;
    const {filteredCartData} = useContext(AppConotext)
    
  return (
    <div id="cart-container" className="w-[100%] rounded-b-[2rem] bg-[#97a0aee2] py-[2rem] mx-[2rem] relative">
      
        <div id="cart-body" className="">
          {
            filteredCartData.length != 0 ? 
              filteredCartData.map((cartItem) => {
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
            : <h1 className="text-[4rem] text-center py-[4rem] font-[600]">No Item Available in Your Cart List !</h1>
          }
        </div>

        <div id="price" className="flex justify-end px-[4rem]">
            { totalPrice>0 && <p className=" text-[2rem] font-[500]">Total Price = ₹{totalPrice}</p>}
        </div>
      
       
    </div>
  )
}

export default CartBody
