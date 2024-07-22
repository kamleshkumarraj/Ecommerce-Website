import { useContext } from "react";
import Card from "./Card";
import { filterData } from "../context/filterDataProvider";
import LoadingCard from "./LoadingCard";
import SideMenu from './SideMenu.jsx'

function ProductBody() {
    const {filteredData} = useContext(filterData)
    
  return (
    <>
    <h1 className="font-[600] text-[3.4rem] text-center p-[2rem] bg-[#00000021]">Products List</h1>
    <div id="products-body" className="flex  bg-[#EFF3F6] relative" >
        <div id="product-nav" className="w-[20%] bg-[white] sticky top-[17%] left-0 max-h-[90vh] px-[2rem]">
            <SideMenu />
        </div>
        
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
                        rating={product.rating.rate}
                        category={product.category}
                        quantity={product.quantity}
                    />
                )
            }) :<> 
                <LoadingCard key={1} /> 
                <LoadingCard key={2}/> 
                <LoadingCard key={3}/> 
                <LoadingCard key={4}/> 
                <LoadingCard key={5}/> 
                <LoadingCard key={6}/> 
                </>
        }
    </div>
  
        </div>
    </>
    )
  }      

export default ProductBody
