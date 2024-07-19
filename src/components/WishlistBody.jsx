import { useSelector } from "react-redux"
import {getWishlistData} from '../store/Slices/WishlistItem.js'

function WishlistBody() {
    const wishlistItem = useSelector(getWishlistData)
    console.log(wishlistItem)
    // console.log(wishlistItem)
  return (
    <div>
      
    </div>
  )
}

export default WishlistBody
