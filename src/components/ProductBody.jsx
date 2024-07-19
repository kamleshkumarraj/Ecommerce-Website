import { useContext } from "react";
import Card from "./Card";
import { filterData } from "../context/filterDataProvider";
import LoadingCard from "./LoadingCard";
function ProductBody() {
    const [filteredData] = useContext(filterData)
    
  return (
    <>
    <h1 className="font-[600] text-[3.4rem] text-center p-[2rem] bg-[#00000021]">Products List</h1>
    <div id="products-body" className="flex -h-[100vh] bg-[#b0b0a5]" >
        <div id="product-nav" className="w-[20%] bg-[white]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iusto modi assumenda magnam ullam reiciendis laborum, dolores ab esse vitae in optio vel possimus nemo inventore, quaerat neque perspiciatis quo!</div>
        
        <div id="product-container" className="w-[85%] mx-auto px-[2rem] py-[1.5rem] grid grid-cols-3 gap-[4rem] max">
        {
            filteredData.length != 0 ? filteredData.map((product) => {
                
                return (
                    <Card 
                        id={product.id}
                        image={product.image}
                        price={product.price}
                        description={product.description}
                        key={product.id}
                        title={product.title}
                        cartData = {product}
                        cartStatus = {product.cartStatus}
                        wishlistStatus = {product.wishlistStatus}
                    />
                )
            }) : <LoadingCard />
        }
    </div>
  
        </div>
    </>
    )
  }      

export default ProductBody
