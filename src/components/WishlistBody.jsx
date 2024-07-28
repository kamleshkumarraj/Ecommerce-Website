import WishlistItem from "./wishlistItem.jsx"
import { useContext } from "react"
import { AppConotext } from "../context/filterDataProvider.jsx"

function WishlistBody() {
    const {filteredWishlistData} = useContext(AppConotext)
    let totalPrice = 0;
  return (
    <div id="wishlist-container" className="w-[100%] rounded-b-[2rem] bg-[#d2aba28f] py-[2rem]  relative">
      
        <div id="wishlist-body" className="">
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
            : <h1 className="text-[4rem] text-center py-[4rem] font-[600]">No Item Available in Your Wishlist !</h1>
          }
          </div>
        <div id="price" className="flex justify-end px-[4rem]">
            {totalPrice > 0 && <p className=" text-[2rem] font-[500]">Total Price = ₹{totalPrice}</p>}
        </div>
      
       
    </div>
  )
}

export default WishlistBody
