import { useContext } from "react";
import Card from "./Card";
import { AppConotext} from "../context/filterDataProvider";
import LoadingCard from "./LoadingCard";
import SideMenu from './SideMenu.jsx'

function ProductBody() {
    const {filteredData , toggleBar} = useContext(AppConotext)
    
  return (
    <>
        <div id="market-body" className="flex">
     
            <div id="product-container" className="w-[100%] mx-auto py-[1.5rem] grid grid-cols-4 gap-[2rem] max">
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
