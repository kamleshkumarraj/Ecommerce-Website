import {  useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io"
import { Link, useLocation} from "react-router-dom"
import {getAllCategoriesProducts, getSpecificProduct} from '../store/Slices/AllCategoryProducts'; 
import { useSelector } from "react-redux";
import DetailsProduct from "./DetailsProduct";
import RatingAndReview from "./RatingAndReview";
import ProductSlider from "./ProductSlider";

function ProductsDetails() {
    const productItem = useLocation().state;
    const product = useSelector(getSpecificProduct(productItem.category , productItem.id))
    const allCategoryProduct = useSelector(getAllCategoriesProducts)
    const allCategory = Object.keys(allCategoryProduct);
    const [img , setImg] = useState(product.images[0])
  return (
    <div id="product-details-pages" className="px-[2rem] ">
        <Link id="back-btn" className="bg-[#00000012] grid place-content-center rounded-full w-[6rem] h-[6rem] hover:cursor-pointer mt-[2rem]" to={`/`}>
            <IoMdArrowRoundBack size={'3rem'} />
        </Link>

        <div id="detilas-body">
            <DetailsProduct 
                img = {img}
                product = {product}
                productItem = {productItem}
                setImg = {setImg}
            />
        </div>
        
        <div id="rating-reveiw">
            <RatingAndReview
                product={product}
            />
        </div>
        
        <div id="samrt-phone-collection">
            <ProductSlider
            allCategory={allCategory}
            allCategoryProduct={allCategoryProduct}
            setImg={setImg}
            categoryType={'smartPhones'}
            label={'Top smartphones collections'}
            />
        </div>

        <div id="mobile-accessories" >
            <ProductSlider
            allCategory={allCategory}
            allCategoryProduct={allCategoryProduct}
            setImg={setImg}
            categoryType={'mobileAccessories'}
            label={'Top mobile accessories collections'}
            />
        </div> 

        <div id="sport-slider">
            <ProductSlider
                allCategory={allCategory}
                allCategoryProduct={allCategoryProduct}
                setImg={setImg}
                categoryType={'sportsAccessories'}
                label={'Top sports accessories collections'}
            />
        </div>

        

        
    </div>
  )
}

export default ProductsDetails
