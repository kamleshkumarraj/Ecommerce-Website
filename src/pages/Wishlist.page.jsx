import { useSelector } from "react-redux"
import WishlistBody from "../components/WishlistBody"
import { getWishlistLen } from "../store/Slices/WishlistItem"

function Wishlist() {
  const wishlistLen = useSelector(getWishlistLen)
  return (
    <div className="bg-[#99dacb47] py-[2rem] " id="Wishlist-list-page" >
        <div id="Wishlist-heading" className="max-w-[138rem] mx-auto px-[4rem] py-[2rem]">
          <p className="text-[2.8rem] font-[700]">My Wishlist Data</p>
          <p className="text-[1.4rem] py-[.5rem]"><span className="text-[1.6rem] font-[700]">{wishlistLen} items</span> in our Wishlists</p>
        </div>

          <div id="Wishlist-conatainer-heading" className="max-w-[138rem] mx-auto mt-[1rem] relative">
            <div id="heading" className="w-[100%] px-[4rem]  py-[2rem] bg-[#d2aba28f] flex justify-between rounded-t-[2rem] sticky top-0 left-0">
            <div id="product-name" className="text-[1.8rem] font-[700] w-[50%]">
                <h1 className="">Product</h1>
            </div>
            <div id="detail" className="flex w-[50%] justify-between text-[1.8rem] font-[700]">
                <h1>Price</h1>
                <h1>Quantity</h1>
                <h1>Totalprice</h1>
            </div>
        </div>
          </div>
        <div id="Wishlist-body" className="max-w-[138rem] mx-auto">
          <WishlistBody />
        </div>
    </div>
  )
}

export default Wishlist
