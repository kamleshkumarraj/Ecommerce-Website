import { useSelector } from "react-redux"
import {getCartData} from "../store/Slices/AddCart.js"



function CartBody() {
    const cartDataList = useSelector(getCartData)
    console.log(cartDataList)
  return (
    <div>
      
    </div>
  )
}

export default CartBody
