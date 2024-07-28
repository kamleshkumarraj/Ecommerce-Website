import CartBody from "../components/CartBody"
import { useSelector } from "react-redux"
import { getCartLen } from "../store/Slices/AddCart"

function CartList() {
  const cartLen = useSelector(getCartLen)
  
  return (
    <div className="bg-[#e8b5f039] py-[2rem] " id="cart-list-page" >
        <div id="cart-heading" className="max-w-[138rem] mx-auto px-[4rem] py-[2rem]">
          <p className="text-[2.8rem] font-[700]">Shopping Cart</p>
          <p className="text-[1.4rem] py-[.5rem]"><span className="text-[1.6rem] font-[700]">{cartLen} items</span> in ours carts</p>
        </div>

          <div id="cart-conatainer-heading" className="max-w-[138rem] mx-auto mt-[1rem] relative hidden sm:block">
            <div id="heading" className="w-[100%] px-[4rem]  py-[2rem] bg-[#A0A8B4] flex justify-between rounded-t-[2rem] sticky top-0 left-0">
            <div id="product-name" className="text-[1.8rem] font-[700] w-[50%]">
                <h1>Product</h1>
            </div>
            <div id="detail" className="flex w-[50%] justify-between text-[1.8rem] font-[700]">
                <h1>Price</h1>
                <h1>Quantity</h1>
                <h1>Totalprice</h1>
            </div>
        </div>
          </div>
        <div id="cart-body" className="max-w-[138rem] mx-auto">
          <CartBody />
        </div>
    </div>
  )
}

export default CartList
