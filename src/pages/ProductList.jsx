import { useLocation } from "react-router-dom"
import LoadingCard from "../components/LoadingCard";
import { useSelector } from "react-redux";
import MarketCart from "../components/MarketCart";
import { getAllCategoriesProducts } from "../store/Slices/AllCategoryProducts";
function ProductList() {
    const location = useLocation();
    const category = location.state;
    const allCategoriesProducts = useSelector(getAllCategoriesProducts)
    const dataList = allCategoriesProducts[category];
  return (
    <div id="product-container" className="max-w-[138rem] mx-auto px-[2rem] py-[1.5rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] justify-center">
    {
        dataList ? dataList.map((product) => {
            return (
                <MarketCart
                    product = {product}
                    id={product.id}
                    image={product.images[0]}
                    price={product.price}
                    description={product.description}
                    key={product.id}
                    title={product.title}
                    cartData = {product}
                    cartlistStatus = {product.cartStatus}
                    wishlistStatus = {product.wishlistStatus}
                    rating={product.rating}
                    category={category}
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
  )
}

export default ProductList
