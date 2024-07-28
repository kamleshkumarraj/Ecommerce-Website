// src/DeliveryForm.js

import { useLocation } from "react-router-dom";
import BuyProduct from "./BuyProduct";
import CustomerDetails from "./CustomerDetails";

const DeliveryForm = () => {
  const filteredCartData = useLocation().state
  let totalPrice = 0;
  return (
    <>
        <div id="buy-page" className="flex max-w-[138rem] mx-auto flex-wrap min-h-[85vh] items-center justify-center gap-[6rem] p-[4rem]">
            <div id="product-section" className="max-w-[100%]">

              <div id="Wishlist-heading" className="max-w-[138rem] mx-auto px-[4rem] py-[2rem]">
                  <p className="text-[2.8rem] font-[700]">Checkout Product</p>
                  <p className="text-[1.4rem] py-[.5rem]"><span className="text-[1.6rem] font-[700]">{filteredCartData.length} items</span> in our Checkoutlist</p>
              </div>
        <div id="product-list" className="w-[100%] grid grid-cols-3 gap-[2rem]">
            {
              filteredCartData.length != 0 ? 
                filteredCartData.map((cartItem) => {
                  totalPrice = cartItem.price*cartItem.quantity + totalPrice;
                  return <BuyProduct  
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
            <div id="total-price">
              <h1 className="text-[2.4rem] font-[500] text-center my-[2rem]">Total Price is : ${totalPrice}</h1>
            </div>
            </div>
            <div id="form-section">
                <CustomerDetails />
            </div>
        </div>
    
    </>
  );
};

export default DeliveryForm;
