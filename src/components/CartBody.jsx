
import CartItem from "./CartItem.jsx";
import { useContext } from "react";
import { AppConotext } from "../context/filterDataProvider.jsx";
import Button from "./Button.jsx";
import { Link } from "react-router-dom";

function CartBody() {
    let totalPrice = 0;
    const {filteredCartData} = useContext(AppConotext)
    
  return (
    <div id="cart-container" className="w-[100%] rounded-b-[2rem] bg-[#97a0aee2] py-[2rem]  relative">
      
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

        <div id="footer" className="flex items-center justify-between sm:px-[4rem] sticky bottom-0 bg-[#A2A9B7] py-[2rem]">
          <Link state={filteredCartData} to={'/productlist-pages/product-details/buy-page'} id="checkout-btn" className="sm:mx-[4rem] mx-[1rem]">
          {
            totalPrice > 0 && <Button 
            label={'Checkout Cart'}
            bgColor={'bg-[#000000]'}
          />
          }
          </Link>
          <div id="price" className="mx-[1rem]">
              { totalPrice>0 && <p className=" text-[2rem] font-[500]">Total Price = ₹{totalPrice}</p>}
          </div>
        </div>
     
    </div>


  )
}

export default CartBody
