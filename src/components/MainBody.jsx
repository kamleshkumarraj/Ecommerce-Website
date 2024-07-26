import { useSelector } from "react-redux"
import { getAllCategoriesProducts } from "../store/Slices/AllCategoryProducts"
import MainCard from "./MainCard"

function MainBody() {
    const allCategoriesProducts = useSelector(getAllCategoriesProducts)
    const categoriesList = Object.keys(allCategoriesProducts)
  return (
    <div id="main-product-section" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  py-[2rem] gap-[2rem]">
    
      {
        categoriesList.map((categoryItem , id) => {
            if(allCategoriesProducts[categoryItem].length > 0){
                let item = allCategoriesProducts[categoryItem];
                return <MainCard key={id}
                        category={categoryItem}
                        image1={item[0].images[0]}
                        image2={item[1].images[0]}
                        image3={item[2].images[0]}
                        image4={item[4]?.images[0]}
                        price1={item[0].price}
                        price2={item[1].price}
                        price3={item[2].price}
                        price4={item[3]?.price}
                />
            }
        })
      }

    </div>
  )
}

export default MainBody
