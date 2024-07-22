import WishlistItem from "./wishlistItem.jsx"
import { useContext } from "react"
import { filterData } from "../context/filterDataProvider.jsx"

function WishlistBody() {
    const {filteredWishlistData} = useContext(filterData)
    let totalPrice = 0;
  return (
    <div id="cart-container" className="w-[100%] rounded-b-[2rem] bg-[#d2aba28f] py-[2rem] mx-[2rem] relative">
      
        <div id="cart-body" className="">
          {
            filteredWishlistData.length != 0 ? 
              filteredWishlistData.map((wishlistItem) => {
                totalPrice = wishlistItem.quantity*wishlistItem.price + totalPrice;
                return <WishlistItem 
                    id={wishlistItem.id}
                    image = {wishlistItem.image}
                    key = {wishlistItem.id}
                    quantity = {wishlistItem.quantity}
                    price = {wishlistItem.price}
                    category= {wishlistItem.category}
                    title={wishlistItem.title}
                    rating={wishlistItem.rating}
                    
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

export default WishlistBody
